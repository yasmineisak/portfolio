import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  compact?: boolean;
  className?: string;
  showIcon?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  compact = false,
  className = '',
  showIcon = false,
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Sélection de langue / Language selector"
      className={`inline-flex items-center rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/20 shadow-md p-1 transition-colors select-none ${className}`}
    >
      {showIcon && (
        <span className="pl-2 pr-1 text-roseDust-300">
          <Globe size={compact ? 13 : 15} />
        </span>
      )}

      {/* FR Button */}
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        className={`relative rounded-full font-bold transition-colors duration-200 z-10 flex items-center justify-center ${
          compact ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
        } ${
          language === 'fr'
            ? 'text-[#4d0f28] font-black'
            : 'text-roseDust-200 hover:text-white'
        }`}
      >
        {language === 'fr' && (
          <motion.div
            layoutId={compact ? 'activePillCompact' : 'activePillStandard'}
            className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span>FR</span>
      </button>

      {/* EN Button */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`relative rounded-full font-bold transition-colors duration-200 z-10 flex items-center justify-center ${
          compact ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'
        } ${
          language === 'en'
            ? 'text-[#4d0f28] font-black'
            : 'text-roseDust-200 hover:text-white'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId={compact ? 'activePillCompact' : 'activePillStandard'}
            className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          />
        )}
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
