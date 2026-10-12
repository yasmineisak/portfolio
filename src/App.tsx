import { Mail, MapPin, Sparkles, Heart } from 'lucide-react';
import InteractiveHero from './components/InteractiveHero';
import StickyNav from './components/StickyNav';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

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
      
      {/* Luxury Frosted Footer */}
      <footer className="w-full relative border-t border-white/20 bg-[#340b1c]/80 backdrop-blur-xl py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-maroon-700 to-roseDust-400 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-[#230713] rounded-full flex items-center justify-center font-bold text-white text-sm">
                YI
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-base">Yasmine Isakrouhen</p>
              <p className="text-xs text-roseDust-300 font-medium flex items-center gap-1.5">
                <MapPin size={12} className="text-roseDust-400" /> {t.footer.roleDesc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-roseDust-200">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5 backdrop-blur-md">
              <Sparkles size={13} className="text-roseDust-300" />
              {t.footer.pfeBadge}
            </span>
            <a 
              href="mailto:contact@yasmine-isakrouhen.me" 
              className="px-3.5 py-1.5 rounded-full bg-maroon-800/80 hover:bg-maroon-700 border border-roseDust-300/30 text-white font-medium transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Mail size={13} className="text-roseDust-300" />
              {t.footer.contactBtn}
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-roseDust-300/60 flex items-center justify-center gap-1.5">
          <span>{t.footer.copyrightStart}</span>
          <Heart size={12} className="text-rose-400 fill-rose-400 inline" />
          <span>{t.footer.copyrightEnd}</span>
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
