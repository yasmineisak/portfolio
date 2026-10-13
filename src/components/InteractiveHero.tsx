import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer, ChevronDown, Download, Sparkles, Mail, Phone, GraduationCap } from 'lucide-react';
import SpecularButton from './SpecularButton';
import { useLanguage } from '../context/LanguageContext';

function LinkedinIcon({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

type InteractionState = 'idle' | 'left' | 'right' | 'center' | 'center_greet' | 'center_point';

const CHARACTER_IMAGES: Record<InteractionState, string> = {
  idle: `${import.meta.env.BASE_URL}character/idle_work.png`,
  center: `${import.meta.env.BASE_URL}character/look_center.png`,
  left: `${import.meta.env.BASE_URL}character/look_left.png`,
  right: `${import.meta.env.BASE_URL}character/look_right.png`,
  center_greet: `${import.meta.env.BASE_URL}character/center_greet.png`,
  center_point: `${import.meta.env.BASE_URL}character/center_point.png`,
};

export default function InteractiveHero() {
  const { t } = useLanguage();
  const [activeState, setActiveState] = useState<InteractionState>('idle');
  const [prevState, setPrevState] = useState<InteractionState>('idle');
  const [contextMessage, setContextMessage] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const greetDelayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const centerSeqTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevCleanTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastZoneRef = useRef<'left' | 'right' | 'center' | null>(null);

  // Transition helper that maintains previous state solid underneath to prevent ghosting
  const changeState = useCallback((newState: InteractionState) => {
    setActiveState((curr) => {
      if (curr === newState) return curr;
      setPrevState(curr);
      if (prevCleanTimeoutRef.current) clearTimeout(prevCleanTimeoutRef.current);
      prevCleanTimeoutRef.current = setTimeout(() => {
        setPrevState(newState);
      }, 600);
      return newState;
    });
  }, []);

  // Preload character frames
  useEffect(() => {
    let loadedCount = 0;
    const allImages = Object.values(CHARACTER_IMAGES);
    const total = allImages.length;
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= total) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= total) setImagesLoaded(true);
      };
    });
  }, []);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Clear timers helper
  const clearAllTimers = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (transitTimeoutRef.current) {
      clearTimeout(transitTimeoutRef.current);
      transitTimeoutRef.current = null;
    }
    if (greetDelayTimeoutRef.current) {
      clearTimeout(greetDelayTimeoutRef.current);
      greetDelayTimeoutRef.current = null;
    }
    if (centerSeqTimeoutRef.current) {
      clearTimeout(centerSeqTimeoutRef.current);
      centerSeqTimeoutRef.current = null;
    }
  }, []);

  // Left Zone Handler: if coming from right, naturally turns across center first
  const handleLeftZone = useCallback(() => {
    if (lastZoneRef.current === 'left') return;
    const fromZone = lastZoneRef.current;
    lastZoneRef.current = 'left';
    clearAllTimers();

    const executeLeft = () => {
      changeState('left');
      setContextMessage('Anyone here on the left?');

      timeoutRef.current = setTimeout(() => {
        changeState('idle');
        setContextMessage(null);
        lastZoneRef.current = null;
      }, 3500);
    };

    if (fromZone === 'right') {
      // Natural human head-turn passes through center first
      changeState('center');
      transitTimeoutRef.current = setTimeout(executeLeft, 220);
    } else {
      executeLeft();
    }
  }, [changeState, clearAllTimers]);

  // Right Zone Handler: if coming from left, naturally turns across center first
  const handleRightZone = useCallback(() => {
    if (lastZoneRef.current === 'right') return;
    const fromZone = lastZoneRef.current;
    lastZoneRef.current = 'right';
    clearAllTimers();

    const executeRight = () => {
      changeState('right');
      setContextMessage('Anyone here on the right?');

      timeoutRef.current = setTimeout(() => {
        changeState('idle');
        setContextMessage(null);
        lastZoneRef.current = null;
      }, 3500);
    };

    if (fromZone === 'left') {
      // Natural human head-turn passes through center first
      changeState('center');
      transitTimeoutRef.current = setTimeout(executeRight, 220);
    } else {
      executeRight();
    }
  }, [changeState, clearAllTimers]);

  // Center Zone Handler: looks forward immediately; only waves if hovering
  const handleCenterZone = useCallback(() => {
    if (lastZoneRef.current === 'center') return;
    lastZoneRef.current = 'center';
    clearAllTimers();

    // Natural forward gaze looking at user
    changeState('center');

    // Only wave and greet if user remains in center for >350ms
    greetDelayTimeoutRef.current = setTimeout(() => {
      changeState('center_greet');
      setContextMessage(t.hero.greetingMessage);

      // Transition to pointing downward after 2.5s
      centerSeqTimeoutRef.current = setTimeout(() => {
        changeState('center_point');
        setContextMessage(t.hero.exploreBtn);

        timeoutRef.current = setTimeout(() => {
          changeState('idle');
          setContextMessage(null);
          lastZoneRef.current = null;
        }, 3500);
      }, 2500);
    }, 350);
  }, [changeState, clearAllTimers, t]);

  // Mouse move over interaction areas with soft hysteresis deadbands
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const windowWidth = window.innerWidth;
    const relativeX = e.clientX / windowWidth;

    // Reset inactivity idle timer on movement
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      clearAllTimers();
      changeState('idle');
      setContextMessage(null);
      lastZoneRef.current = null;
    }, 4500);

    const currentZone = lastZoneRef.current;
    if (currentZone === 'left') {
      if (relativeX > 0.38) {
        if (relativeX > 0.65) handleRightZone();
        else handleCenterZone();
      }
    } else if (currentZone === 'right') {
      if (relativeX < 0.62) {
        if (relativeX < 0.35) handleLeftZone();
        else handleCenterZone();
      }
    } else {
      // Current is center or idle
      if (relativeX < 0.32) {
        handleLeftZone();
      } else if (relativeX > 0.68) {
        handleRightZone();
      } else {
        handleCenterZone();
      }
    }
  };

  const handleMouseLeave = () => {
    clearAllTimers();
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    changeState('idle');
    setContextMessage(null);
    lastZoneRef.current = null;
  };

  const handleMobileTap = () => {
    handleCenterZone();
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen text-slate-900 select-none flex flex-col justify-between isolate"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radiant bright white center glow behind the character */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[950px] h-[75vh] max-h-[750px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(250,237,240,0.8)_35%,rgba(215,142,160,0.35)_65%,transparent_80%)] rounded-full blur-[30px]" />
      </div>

      {/* TOP NAVIGATION (Area: Minimal navigation and brand name) */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 py-4 sm:py-5 hidden md:flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-md flex items-center justify-center font-bold text-maroon-700 tracking-wider text-base group-hover:scale-105 transition-transform">
            YI
          </div>
          <div>
            <span className="font-semibold text-white/95 text-base tracking-tight block">
              Yasmine Isakrouhen
            </span>
            <span className="text-[11px] font-medium text-roseDust-200 tracking-widest uppercase block">
              Portfolio
            </span>
          </div>
        </a>

        {/* Center space reserved for persistent StickyNav with JellyRadio */}
        <div className="hidden md:block w-32" />

        <div className="flex items-center gap-2.5">
          {/* LinkedIn Profile Button */}
          <a
            href="https://www.linkedin.com/in/yasmine-isakrouhen/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#0A66C2] border border-white shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}${t.hero.cvFile}`}
            download={t.hero.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 hover:bg-white text-maroon-700 font-semibold text-xs md:text-sm border border-white shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <Download size={15} />
            <span>{t.hero.cvDownload}</span>
          </a>
        </div>
      </header>

      {/* MAIN HERO INTERACTIVE STAGE */}
      <div
        onClick={isMobile ? handleMobileTap : undefined}
        className="relative z-20 flex-grow flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 cursor-default pt-16 md:pt-0"
      >
        {/* INTERACTION ZONES DEBUG / VISUAL INDICATORS (Desktop only) */}
        {!isMobile && (
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none z-10">
            {/* Left Zone trigger indicator */}
            <div className={`transition-opacity duration-500 flex items-center justify-start pl-8 ${activeState === 'left' ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-1.5 h-16 rounded-full bg-roseDust-400/40 blur-[1px]" />
            </div>
            {/* Center Zone */}
            <div className={`transition-opacity duration-500 flex items-center justify-center ${activeState.startsWith('center') ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-24 h-1 rounded-full bg-roseDust-400/30 blur-[1px] self-end mb-16" />
            </div>
            {/* Right Zone trigger indicator */}
            <div className={`transition-opacity duration-500 flex items-center justify-end pr-8 ${activeState === 'right' ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-1.5 h-16 rounded-full bg-roseDust-400/40 blur-[1px]" />
            </div>
          </div>
        )}

        {/* LEFT COLUMN: Personal intro + Quick Contact Actions + cursor instruction */}
        <div className="hidden lg:flex flex-col justify-center items-start w-1/4 z-30 pointer-events-auto pl-4">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-glass-card p-6 rounded-2xl max-w-xs w-full shadow-[0_20px_50px_rgba(77,22,47,0.12)]"
          >
            {/* Availability Pill */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-maroon-700">
                {t.hero.availablePill}
              </span>
            </div>

            {/* Name & Role */}
            <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-1">
              I'm Yasmine Isakrouhen
            </h1>
            <p className="text-xs font-semibold text-maroon-700 mb-4">
              {t.hero.role}
            </p>

            {/* Quick Contact Hub (2x2 sleek frosted interactive chips) */}
            <div className="pt-3.5 border-t border-roseDust-200/80 mb-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {t.contact?.title || "Contact & Coordonnées"}
                </span>
                <span className="text-[9px] font-bold text-maroon-700 uppercase tracking-widest px-1.5 py-0.5 rounded bg-roseDust-100/70 border border-roseDust-200/60">
                  Direct
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* 1. Personal Email */}
                <a
                  href="mailto:isakrouhenyasmine@gmail.com"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/70 hover:bg-white text-slate-800 hover:text-maroon-800 border border-white/80 shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  title="Email: isakrouhenyasmine@gmail.com"
                >
                  <div className="w-6 h-6 rounded-lg bg-roseDust-100 flex items-center justify-center text-maroon-700 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={12} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-semibold text-slate-500 uppercase block leading-none">
                      Perso
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block truncate group-hover:text-maroon-800">
                      Email
                    </span>
                  </div>
                </a>

                {/* 2. University Email */}
                <a
                  href="mailto:Yasmine.Isakrouhen@emsi-edu.ma"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/70 hover:bg-white text-slate-800 hover:text-maroon-800 border border-white/80 shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  title="EMSI: Yasmine.Isakrouhen@emsi-edu.ma"
                >
                  <div className="w-6 h-6 rounded-lg bg-roseDust-100 flex items-center justify-center text-maroon-700 shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap size={12} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-semibold text-slate-500 uppercase block leading-none">
                      EMSI
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block truncate group-hover:text-maroon-800">
                      Email
                    </span>
                  </div>
                </a>

                {/* 3. Phone */}
                <a
                  href="tel:+212632825077"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/70 hover:bg-white text-slate-800 hover:text-emerald-700 border border-white/80 shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  title="Appeler: 0632825077 (+212 632 82 50 77)"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={12} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-semibold text-emerald-700 uppercase block leading-none">
                      Appel
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 block truncate group-hover:text-emerald-700">
                      06 32 82 50 77
                    </span>
                  </div>
                </a>

                {/* 4. LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yasmine-isakrouhen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white/70 hover:bg-white text-slate-800 hover:text-[#0A66C2] border border-white/80 shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  title="Profil LinkedIn"
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-50 flex items-center justify-center text-[#0A66C2] shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={12} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-semibold text-[#0A66C2] uppercase block leading-none">
                      Réseau
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block truncate group-hover:text-[#0A66C2]">
                      LinkedIn
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Interaction Cue matching original design */}
            <div className="pt-3 border-t border-roseDust-200/80 flex items-center gap-2.5 text-xs text-slate-700">
              <div className="w-6 h-6 rounded-lg bg-white shadow-2xs flex items-center justify-center text-maroon-600 animate-cursor-pulse">
                <MousePointer size={12} />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-[11px] leading-snug">{t.hero.callMePrompt}</p>
                <p className="text-[9px] text-slate-500 font-normal">{t.hero.hoverSub}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CENTER COLUMN: Large interactive character + laptop */}
        <div className="relative flex-grow flex flex-col items-center justify-center z-20 max-w-2xl w-full">
          {/* Mobile intro card (visible on small screens) */}
          <div className="lg:hidden w-full text-center mb-3 px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/70 text-maroon-700 text-xs font-bold mb-2 shadow-sm">
              I'm Yasmine Isakrouhen
            </span>
            <p className="text-xs text-roseDust-200 font-medium mb-3">
              {t.hero.mobileTap}
            </p>

            {/* Mobile Contact Badges Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 pointer-events-auto">
              <a
                href="tel:+212632825077"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-maroon-900 text-[11px] font-bold shadow-sm border border-white/60 active:scale-95 transition-transform"
                title="Appeler: 0632825077"
              >
                <Phone size={12} className="text-maroon-600" />
                <span>06 32 82 50 77</span>
              </a>
              <a
                href="mailto:isakrouhenyasmine@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-maroon-900 text-[11px] font-bold shadow-sm border border-white/60 active:scale-95 transition-transform"
                title="Email Personnel"
              >
                <Mail size={12} className="text-maroon-600" />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yasmine-isakrouhen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-[#0A66C2] text-[11px] font-bold shadow-sm border border-white/60 active:scale-95 transition-transform"
                title="LinkedIn"
              >
                <LinkedinIcon size={12} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Character Stage: Perfectly proportioned to viewport */}
          <div
            className="relative aspect-square flex items-center justify-center transition-all duration-300"
            style={{ width: 'min(515px, 60vh, 88vw)', height: 'min(515px, 60vh, 88vw)' }}
          >
            {/* Soft backdrop glow */}
            <div className="absolute inset-6 rounded-full bg-white/50 blur-2xl -z-10" />

            {/* Preloaded Character Frames with smooth organic cubic-bezier turning transition */}
            <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(58,13,30,0.3)] border border-white/60 bg-[#2a0e1c] transition-opacity duration-700 ${imagesLoaded ? 'opacity-100' : 'opacity-80'}`}>
              {/* Smoothly Animated Character States with Zero-Ghosting Solid Layering */}
              {(Object.entries(CHARACTER_IMAGES) as [InteractionState, string][]).map(([stateKey, src]) => {
                const isActive = activeState === stateKey;
                const isPrev = prevState === stateKey;

                return (
                  <motion.img
                    key={stateKey}
                    src={src}
                    alt={`Character ${stateKey}`}
                    initial={false}
                    animate={{
                      opacity: isActive || isPrev ? 1 : 0,
                      x: isActive
                        ? 0
                        : stateKey === 'left'
                          ? 5
                          : stateKey === 'right'
                            ? -5
                            : 0,
                      rotate: isActive
                        ? 0
                        : stateKey === 'left'
                          ? 0.5
                          : stateKey === 'right'
                            ? -0.5
                            : 0,
                      zIndex: isActive ? 20 : isPrev ? 10 : 0,
                    }}
                    transition={{
                      duration: 0.52,
                      ease: [0.25, 1, 0.35, 1], // Slower, calmer, natural human head turn deceleration
                    }}
                    className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
                  />
                );
              })}

              {/* Interactive Zone Overlay Badges (Desktop) */}
              {!isMobile && (
                <div className="absolute bottom-3 inset-x-3 flex justify-between items-center text-[11px] font-medium text-white/70 px-4 py-1.5 rounded-xl bg-black/30 backdrop-blur-md pointer-events-none border border-white/10 z-30">
                  <span className={activeState === 'left' ? 'text-white font-bold' : ''}>{t.hero.leftZone}</span>
                  <span className={activeState === 'center' || activeState.startsWith('center') ? 'text-white font-bold' : ''}>{t.hero.centerGreet}</span>
                  <span className={activeState === 'right' ? 'text-white font-bold' : ''}>{t.hero.rightZone}</span>
                </div>
              )}
            </div>

            {/* Contextual Reaction Message Bubble (Above Character) */}
            <AnimatePresence>
              {contextMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-12 z-40 bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-full shadow-[0_10px_35px_rgba(77,22,47,0.25)] border border-white text-maroon-800 text-sm font-bold tracking-wide flex items-center gap-2"
                >
                  <Sparkles size={16} className="text-maroon-500 animate-spin" />
                  <span>{contextMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: Specialty & Engineering Highlights */}
        <div className="hidden lg:flex flex-col justify-center items-end w-1/4 z-30 pointer-events-auto pr-4">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-glass-card p-6 rounded-2xl max-w-xs w-full text-right shadow-[0_20px_50px_rgba(77,22,47,0.12)]"
          >
            <div className="text-[11px] uppercase tracking-wider text-maroon-700 font-bold mb-2.5">
              {t.hero.specialtyBadge}
            </div>
            <div className="text-xl font-bold text-slate-900 leading-tight mb-1">
              {t.hero.specialtyTitle}
            </div>
            <p className="text-xs font-semibold text-maroon-700 mb-3">
              EMSI Tanger • 2025 - 2027
            </p>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {t.hero.specialtyDesc}
            </p>

            {/* Focus Pills matching the visual weight of the Left Card's divider section */}
            <div className="pt-3.5 border-t border-roseDust-200/80 flex items-center justify-end gap-1.5 flex-wrap">
              <span className="text-[10px] font-semibold text-slate-700 bg-white/70 px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs">
                Big Data
              </span>
              <span className="text-[10px] font-semibold text-slate-700 bg-white/70 px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs">
                LLM & RAG
              </span>
              <span className="text-[10px] font-semibold text-slate-700 bg-white/70 px-2.5 py-1 rounded-lg border border-white/80 shadow-2xs">
                Computer Vision
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM (Area: Portfolio exploration cue) */}
      <footer className="relative z-30 w-full max-w-7xl mx-auto px-6 py-4 sm:py-5 flex flex-col items-center justify-center pointer-events-auto">
        <SpecularButton
          size="md"
          radius={22}
          tint="#ffffff"
          tintOpacity={0.06}
          blur={10}
          textColor="#ffffff"
          lineColor="#ffffff"
          baseColor="#7a2444"
          intensity={1.2}
          idleIntensity={0.4}
          shineSize={14}
          shineFade={36}
          thickness={1.4}
          glow={1}
          followMouse
          proximity={250}
          onClick={() => {
            const aboutSection = document.getElementById('about') || document.getElementById('education');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group cursor-pointer font-semibold text-xs tracking-widest uppercase transition-all hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <span>{t.hero.exploreBtn}</span>
            <ChevronDown size={15} className="text-white group-hover:translate-y-0.5 transition-transform" />
          </span>
        </SpecularButton>
      </footer>
    </div>
  );
}
