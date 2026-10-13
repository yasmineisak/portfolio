import { Mail, Phone, MapPin, Sparkles, Heart, GraduationCap, Download, ExternalLink } from 'lucide-react';
import InteractiveHero from './components/InteractiveHero';
import StickyNav from './components/StickyNav';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
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

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#3a0d1e] via-[#4d162f] to-[#3a0d1e] text-slate-100 font-sans selection:bg-maroon-600 selection:text-white relative overflow-hidden isolate">
      {/* Global dusty rose side vignettes matching hero */}
      <div className="fixed inset-y-0 left-0 w-1/3 bg-[radial-gradient(ellipse_at_0%_50%,rgba(194,108,131,0.35)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="fixed inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_100%_50%,rgba(194,108,131,0.35)_0%,transparent_70%)] pointer-events-none z-0" />
      
      {/* Persistent Floating JellyRadio Navigation Dock */}
      <StickyNav />

      {/* Interactive Hero */}
      <InteractiveHero />

      {/* Main Sections */}
      <div className="max-w-7xl mx-auto space-y-20 pb-28 relative z-10 px-4 sm:px-6 lg:px-8">
        <AboutMe />
        <Projects />
        <Experience />
        <Skills />
      </div>
      
      {/* Luxury Frosted Footer with Comprehensive Contact Information */}
      <footer id="contact" className="w-full relative border-t border-white/20 bg-[#280816]/90 backdrop-blur-2xl py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Top Row: Identity & Availability Status */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-maroon-700 to-roseDust-400 p-[1.5px] flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#230713] rounded-2xl flex items-center justify-center font-extrabold text-white text-base">
                  YI
                </div>
              </div>
              <div>
                <p className="font-extrabold text-white text-lg tracking-tight">Yasmine Isakrouhen</p>
                <p className="text-xs text-roseDust-300 font-medium flex items-center gap-1.5 mt-0.5">
                  <MapPin size={13} className="text-roseDust-400" /> {t.footer.roleDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-semibold flex items-center gap-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t.footer.pfeBadge}
              </span>
              <a 
                href={`${import.meta.env.BASE_URL}${t.hero.cvFile}`}
                download={t.hero.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all flex items-center gap-2 active:scale-95 shadow-xs"
              >
                <Download size={14} />
                <span>{t.about.opportunity.cvBtn || t.hero.cvDownload}</span>
              </a>
            </div>
          </div>

          {/* Center Contact Hub: All 4 Contact Methods */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-roseDust-300 mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-roseDust-400" />
              <span>{t.contact?.title || "Contact & Coordonnées"}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. Email Personnel */}
              <a 
                href="mailto:isakrouhenyasmine@gmail.com"
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between shadow-xs hover:shadow-md active:scale-98"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-maroon-800/80 border border-roseDust-400/30 flex items-center justify-center text-roseDust-200 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-roseDust-300/80 uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Personnel
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-roseDust-300 mb-1">
                    {t.contact?.personalEmailLabel || "Email Personnel"}
                  </p>
                  <p className="text-xs font-bold text-white group-hover:text-roseDust-200 transition-colors truncate">
                    isakrouhenyasmine@gmail.com
                  </p>
                </div>
              </a>

              {/* 2. Email Universitaire */}
              <a 
                href="mailto:Yasmine.Isakrouhen@emsi-edu.ma"
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between shadow-xs hover:shadow-md active:scale-98"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-maroon-800/80 border border-roseDust-400/30 flex items-center justify-center text-roseDust-200 group-hover:scale-105 transition-transform">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-roseDust-300/80 uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    EMSI
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-roseDust-300 mb-1">
                    {t.contact?.universityEmailLabel || "Email Universitaire"}
                  </p>
                  <p className="text-xs font-bold text-white group-hover:text-roseDust-200 transition-colors truncate">
                    Yasmine.Isakrouhen@emsi-edu.ma
                  </p>
                </div>
              </a>

              {/* 3. Numéro Téléphone */}
              <a 
                href="tel:+212632825077"
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between shadow-xs hover:shadow-md active:scale-98"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-maroon-800/80 border border-roseDust-400/30 flex items-center justify-center text-roseDust-200 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-roseDust-300/80 uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    Maroc
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-roseDust-300 mb-1">
                    {t.contact?.phoneLabel || "Numéro Téléphone"}
                  </p>
                  <p className="text-xs font-bold text-white group-hover:text-roseDust-200 transition-colors">
                    +212 632 82 50 77 <span className="text-roseDust-400 text-[10px] font-normal">(0632825077)</span>
                  </p>
                </div>
              </a>

              {/* 4. LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/yasmine-isakrouhen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all group flex flex-col justify-between shadow-xs hover:shadow-md active:scale-98"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center text-[#58a6ff] group-hover:scale-105 transition-transform">
                    <LinkedinIcon size={18} />
                  </div>
                  <ExternalLink size={13} className="text-roseDust-400/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-roseDust-300 mb-1">
                    {t.contact?.linkedinLabel || "LinkedIn"}
                  </p>
                  <p className="text-xs font-bold text-white group-hover:text-roseDust-200 transition-colors truncate">
                    in/yasmine-isakrouhen
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-roseDust-300/70">
            <div className="flex items-center gap-1.5">
              <span>{t.footer.copyrightStart}</span>
              <Heart size={12} className="text-rose-400 fill-rose-400 inline" />
              <span>{t.footer.copyrightEnd}</span>
            </div>
            <p className="text-[11px] text-roseDust-400/60 font-mono">
              EMSI Tanger • Big Data & IA 2025-2027
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
