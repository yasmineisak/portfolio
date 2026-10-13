import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Languages, 
  Rocket, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Download, 
  Mail, 
  Compass, 
  Award,
  Globe2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutMe() {
  const { t } = useLanguage();

  const LANGUAGES_DATA = [
    { name: "English", code: "EN", level: t.about.bento.enLevel, percent: 90 },
    { name: "French", code: "FR", level: t.about.bento.frLevel, percent: 95 },
    { name: "Arabic", code: "AR", level: t.about.bento.arLevel, percent: 100 },
  ];

  const KEY_METRICS = [
    { value: t.about.metrics.m1Val, label: t.about.metrics.m1Label, sub: t.about.metrics.m1Sub },
    { value: t.about.metrics.m2Val, label: t.about.metrics.m2Label, sub: t.about.metrics.m2Sub },
    { value: t.about.metrics.m3Val, label: t.about.metrics.m3Label, sub: t.about.metrics.m3Sub },
  ];

  return (
    <section className="section-container relative" id="about">
      {/* Invisible anchor target for backwards compatibility */}
      <div id="education" className="absolute -top-12 left-0 pointer-events-none" />

      {/* Radiant ambient white halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1200px] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(250,237,240,0.8)_35%,rgba(215,142,160,0.32)_65%,transparent_80%)] rounded-full blur-[40px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white text-maroon-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-maroon-600" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-tight">
            <div className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-md flex items-center justify-center">
              <User className="text-maroon-700" size={32} />
            </div>
            <span>{t.about.title}</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-roseDust-100 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{t.about.statusBadge}</span>
        </div>
      </div>

      {/* Modern Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* 1. Main Bio Spotlight Card (Col Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-card-interactive p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Subtle decorative background glow on hover */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-roseDust-300/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700 -z-10" />

          <div>
            {/* Top pill & status */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-roseDust-100/90 border border-roseDust-200 text-maroon-800 text-xs font-bold tracking-wide flex items-center gap-2">
                <Award size={14} className="text-maroon-600" />
                {t.about.studentBadge}
              </span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide">
                {t.about.cycle}
              </span>
            </div>

            {/* Core headline */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
              {t.about.headlineStart} <span className="text-maroon-700 underline decoration-roseDust-300 underline-offset-4">{t.about.headlineHighlight}</span> {t.about.headlineEnd}
            </h3>

            {/* Bio body */}
            <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
              {t.about.bio}
            </p>

            {/* Core Domain Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Computer Vision & YOLOv8",
                "Pipelines ETL & Streaming (Spark, Kafka)",
                "Architectures LLM & RAG",
                "Deep Learning & MLOps",
                "Microservices & Cloud"
              ].map((domain, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl bg-white/80 border border-slate-200/90 text-maroon-900 text-xs font-semibold shadow-xs hover:border-roseDust-300 hover:bg-roseDust-50/50 transition-colors"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80">
            {KEY_METRICS.map((metric, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-maroon-700">{metric.value}</div>
                <div className="text-xs font-bold text-slate-900">{metric.label}</div>
                <div className="text-[11px] text-slate-500 font-medium">{metric.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Open to / PFE Opportunity Card (Col Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="lg:col-span-5 glass-card-interactive p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-white/95 via-roseDust-50/70 to-white/95"
        >
          {/* Subtle glowing halo accent */}
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-maroon-600/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700 -z-10" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-maroon-700 to-roseDust-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Rocket size={24} />
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {t.about.opportunity.available}
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.about.opportunity.objectiveLabel}
            </span>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">
              {t.about.opportunity.title}
            </h4>
            <p className="text-sm font-bold text-maroon-700 mb-5">
              {t.about.opportunity.subtitle}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-roseDust-200/80 shadow-xs">
                <Calendar className="text-maroon-600 flex-shrink-0 mt-0.5" size={17} />
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.about.opportunity.startDateLabel}</div>
                  <div className="text-xs text-slate-600 font-medium">{t.about.opportunity.startDateVal}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-roseDust-200/80 shadow-xs">
                <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={17} />
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.about.opportunity.formatLabel}</div>
                  <div className="text-xs text-slate-600 font-medium">{t.about.opportunity.formatVal}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:isakrouhenyasmine@gmail.com"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-700 text-white font-bold text-xs tracking-wide transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Mail size={15} />
              <span>{t.about.opportunity.contactBtn}</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${t.about.opportunity.cvFile}`}
              download={t.about.opportunity.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-roseDust-50 text-maroon-800 border border-roseDust-200 font-bold text-xs transition-all shadow-xs active:scale-95"
            >
              <Download size={15} />
              <span>{t.about.opportunity.cvBtn}</span>
            </a>
          </div>
        </motion.div>

        {/* 3. Based in Card (Col Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-4 glass-card-interactive p-7 md:p-8 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-roseDust-100 border border-roseDust-200 flex items-center justify-center text-maroon-700 group-hover:scale-105 transition-transform">
                <MapPin size={22} />
              </div>
              <span className="text-xs font-bold text-maroon-700 bg-roseDust-50 px-3 py-1 rounded-full border border-roseDust-200/80">
                Maroc • Tanger
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.about.bento.locLabel}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              {t.about.bento.locTitle}
            </h4>
            <p className="text-base font-extrabold text-maroon-800 mb-2">
              Tangier, Morocco
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {t.about.bento.locDesc}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Compass size={14} className="text-maroon-600" />
            <span>35.7595° N, 5.8340° W • Hybride & Sur Site</span>
          </div>
        </motion.div>

        {/* 4. Studying Card (Col Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="lg:col-span-4 glass-card-interactive p-7 md:p-8 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-roseDust-100 border border-roseDust-200 flex items-center justify-center text-maroon-700 group-hover:scale-105 transition-transform">
                <GraduationCap size={24} />
              </div>
              <span className="text-xs font-bold text-maroon-700 bg-roseDust-50 px-3 py-1 rounded-full border border-roseDust-200/80">
                2025 - 2027
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.about.bento.eduLabel}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              {t.about.bento.eduTitle}
            </h4>
            <p className="text-base font-extrabold text-maroon-800 mb-1">
              Engineering Program
            </p>
            <p className="text-xs font-bold text-slate-700 mb-2">
              {t.about.bento.eduSchool}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {t.about.bento.eduDesc}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Award size={14} className="text-maroon-600" />
            <span>Spécialité IA, Computer Vision & Big Data</span>
          </div>
        </motion.div>

        {/* 5. Languages Card (Col Span 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="lg:col-span-4 glass-card-interactive p-7 md:p-8 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-roseDust-100 border border-roseDust-200 flex items-center justify-center text-maroon-700 group-hover:scale-105 transition-transform">
                <Languages size={22} />
              </div>
              <span className="text-xs font-bold text-maroon-700 bg-roseDust-50 px-3 py-1 rounded-full border border-roseDust-200/80">
                {t.about.bento.langSub}
              </span>
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              {t.about.bento.langLabel}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              {t.about.bento.langTitle}
            </h4>
            <p className="text-base font-extrabold text-maroon-800 mb-4">
              English, French, Arabic
            </p>

            {/* Language proficiency progress bars */}
            <div className="space-y-3">
              {LANGUAGES_DATA.map((lang, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-roseDust-100 border border-roseDust-200 text-maroon-800 font-extrabold text-[10px]">
                        {lang.code}
                      </span>
                      <span>{lang.name}</span>
                    </span>
                    <span className="text-maroon-700 font-semibold text-[11px]">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div 
                      className="h-full bg-gradient-to-r from-maroon-600 to-roseDust-500 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Globe2 size={14} className="text-maroon-600" />
            <span>Communication fluide en contexte multiculturel</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
