import { useState, useEffect, useRef, useMemo } from 'react';
import { User, FolderGit2, Briefcase, Cpu, Award } from 'lucide-react';
import JellyRadio, { JellyRadioItemObj } from './JellyRadio';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function StickyNav() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('about');
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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto">
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
        <div className="w-[1px] h-6 bg-white/20 shrink-0 hidden sm:block" />

        {/* Embedded Compact Language Toggle */}
        <LanguageToggle compact className="shrink-0" />
      </nav>
    </header>
  );
}
