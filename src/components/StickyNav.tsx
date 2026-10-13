import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FolderGit2, Briefcase, Cpu, Award, Menu, X, Download, Phone, Mail } from 'lucide-react';
import JellyRadio, { JellyRadioItemObj } from './JellyRadio';
import LanguageToggle from './LanguageToggle';
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

export default function StickyNav() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isClicking = useRef(false);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems: JellyRadioItemObj[] = useMemo(() => [
    { value: 'about', label: t.nav.about, icon: <User size={14} className="mr-1" /> },
    { value: 'projects', label: t.nav.projects, icon: <FolderGit2 size={14} className="mr-1" /> },
    { value: 'experience', label: t.nav.experience, icon: <Briefcase size={14} className="mr-1" /> },
    { value: 'skills', label: t.nav.skills, icon: <Cpu size={14} className="mr-1" /> },
    { value: 'certifications', label: t.nav.certifications, icon: <Award size={14} className="mr-1" /> },
  ], [t]);

  // Robust Scrollspy to detect active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isClicking.current) return;

      // Bottom-up check to give precedence to deeper sections in view
      const sectionIds = ['certifications', 'skills', 'experience', 'projects', 'about'];
      const anchor = window.innerHeight * 0.4;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= anchor && rect.bottom >= 60) {
            setActiveTab(id);
            return;
          }
        }
      }

      if (window.scrollY < 350) {
        setActiveTab('about');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    isClicking.current = true;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);

    const targetEl = document.getElementById(value);
    if (targetEl) {
      const yOffset = -90; // offset for sticky header height
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    clickTimeout.current = setTimeout(() => {
      isClicking.current = false;
    }, 900);
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DESKTOP / LAPTOP NAVBAR (Persistent JellyRadio Dock)    */}
      {/* Kept EXACTLY the same as original for screens >= md (768px)*/}
      {/* ======================================================== */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto hidden md:block">
        <nav 
          aria-label={t.nav.ariaLabel}
          className="p-1.5 rounded-full bg-[#2a0715]/85 hover:bg-[#2a0715]/95 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 transition-all duration-300 flex items-center justify-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2"
        >
          <JellyRadio
            items={navItems}
            value={activeTab}
            onChange={handleTabChange}
            chipColor="rgba(255, 255, 255, 0.12)"
            activeColor="#ffffff"
            textColor="#fde2ec"
            activeTextColor="#661435"
            size="md"
            gap={6}
            radius={20}
            swell={0.16}
            barge={4}
            shrink={0.04}
            jelly={0.8}
            bounce={0.22}
            stiffness={520}
            ariaLabel={t.nav.ariaLabel}
          />

          {/* Subtle Frosted Divider */}
          <div className="w-[1px] h-6 bg-white/20 shrink-0" />

          {/* Embedded Compact Language Toggle */}
          <LanguageToggle compact className="shrink-0" />
        </nav>
      </header>

      {/* ======================================================== */}
      {/* 2. MOBILE PHONE NAVBAR (Hamburger format)                */}
      {/* Displays on screens smaller than md (<768px)             */}
      {/* ======================================================== */}
      <header className="fixed top-3 inset-x-3 z-50 pointer-events-auto md:hidden">
        <div className="px-3.5 py-2 rounded-full bg-[#2a0715]/90 hover:bg-[#2a0715]/95 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 transition-all flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="flex items-center gap-2 group active:scale-95 transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-maroon-700 to-roseDust-400 p-[1px] flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-[#230713] rounded-full flex items-center justify-center font-bold text-white text-xs">
                YI
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-xs tracking-tight block leading-tight">
                Yasmine Isakrouhen
              </span>
              <span className="text-[9px] font-medium text-roseDust-300 tracking-wider uppercase block">
                Portfolio
              </span>
            </div>
          </a>

          {/* Right Controls: Language Switcher + Animated Hamburger Button */}
          <div className="flex items-center gap-2">
            <LanguageToggle compact className="shrink-0" />

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 border border-white/20 flex items-center justify-center text-white transition-all focus:outline-none"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu Dropdown Modal */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Dimmed Blurred Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md -z-10"
              />

              {/* Frosted Glass Dropdown Card */}
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 w-full rounded-3xl bg-[#2a0715]/95 backdrop-blur-3xl border border-white/20 shadow-2xl p-4 flex flex-col gap-2 overflow-hidden"
              >
                {/* Navigation Links */}
                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive = activeTab === item.value;
                    return (
                      <button
                        key={item.value}
                        onClick={() => {
                          handleTabChange(item.value);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? 'bg-white text-maroon-900 shadow-md scale-[1.01]'
                            : 'text-roseDust-100 hover:bg-white/10 active:bg-white/15'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={isActive ? 'text-maroon-700' : 'text-roseDust-300'}>
                            {item.icon}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-maroon-700" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Frosted Divider */}
                <div className="h-[1px] w-full bg-white/10 my-1" />

                {/* Direct CV Download Link in Mobile Menu */}
                <a
                  href={`${import.meta.env.BASE_URL}${t.hero.cvFile}`}
                  download={t.hero.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-maroon-700 to-roseDust-500 text-white font-bold text-sm shadow-md hover:shadow-lg active:scale-98 transition-all border border-white/20"
                >
                  <Download size={16} />
                  <span>{t.about.opportunity.cvBtn || t.hero.cvDownload}</span>
                </a>

                {/* Mobile Quick Contact Bar */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <a
                    href="tel:+212632825077"
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-medium transition-colors"
                  >
                    <Phone size={13} className="text-roseDust-300 mb-1" />
                    <span>0632825077</span>
                  </a>
                  <a
                    href="mailto:isakrouhenyasmine@gmail.com"
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-medium transition-colors"
                  >
                    <Mail size={13} className="text-roseDust-300 mb-1" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yasmine-isakrouhen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-medium transition-colors"
                  >
                    <LinkedinIcon size={13} className="text-[#58a6ff] mb-1" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
