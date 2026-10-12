import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, Database, BarChart3, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EXP_METADATA = [
  {
    icon: Cpu,
    glow: "from-maroon-600/30 via-roseDust-400/10",
    tags: ["YOLOv8", "PaddleOCR", "Python", "Computer Vision"],
  },
  {
    icon: Database,
    glow: "from-maroon-700/30 via-roseDust-500/10",
    tags: ["SQL Avancé", "Power BI", "DAX", "KPI Industriels"],
  },
  {
    icon: BarChart3,
    glow: "from-maroon-600/30 via-roseDust-400/10",
    tags: ["Power BI", "Data Cleaning", "Contrôle Qualité"],
  },
];

export default function Experience() {
  const { t, language } = useLanguage();

  const experiences = t.experience.items.map((item, idx) => ({
    ...item,
    icon: EXP_METADATA[idx]?.icon || Briefcase,
    glow: EXP_METADATA[idx]?.glow || "from-maroon-600/30 via-roseDust-400/10",
    tags: EXP_METADATA[idx]?.tags || [],
  }));

  return (
    <section className="section-container relative" id="experience">
      {/* Focused bright white center glow matching hero format */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[85%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(250,237,240,0.75)_35%,rgba(215,142,160,0.3)_65%,transparent_80%)] rounded-full blur-[35px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white text-maroon-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-maroon-600" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-tight">
            <div className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-md flex items-center justify-center">
              <Briefcase className="text-maroon-700" size={32} />
            </div>
            <span>{t.experience.title}</span>
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-roseDust-200 font-semibold px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
          {t.experience.countBadge}
        </span>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-roseDust-300/40 ml-4 md:ml-8 space-y-12 pb-4">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={idx}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute w-5 h-5 bg-white rounded-full -left-[11px] top-6 border-[4px] border-maroon-600 group-hover:border-roseDust-400 group-hover:shadow-[0_0_20px_rgba(232,180,192,0.8)] transition-all duration-300" />

              {/* Glowing background card gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${exp.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-3xl -z-10`}
              />

              <div className="glass-card-interactive p-8 md:p-10 relative overflow-hidden">
                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-roseDust-100 border border-roseDust-200 flex items-center justify-center text-maroon-700 group-hover:scale-105 transition-transform">
                          <Icon size={18} />
                        </div>
                        <span className="inline-block px-3.5 py-1 rounded-full bg-roseDust-100 text-maroon-800 font-extrabold text-xs border border-roseDust-200/80 shadow-xs">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-maroon-700">
                        {exp.projectTitle}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5 items-start xl:items-end text-xs text-slate-600 font-medium bg-white/80 p-3 rounded-xl border border-roseDust-200/60 shadow-xs">
                      <span className="flex items-center gap-2 font-bold text-maroon-800">
                        <Calendar size={15} className="text-maroon-600" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-2 text-slate-600">
                        <MapPin size={15} className="text-maroon-600" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points with detailed accomplishments */}
                  <ul className="space-y-2.5 mt-6 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <div className="mt-2 w-1.5 h-1.5 bg-maroon-600 rounded-full flex-shrink-0 shadow-xs" />
                        <span className="leading-relaxed text-sm md:text-[15px] font-normal">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technical Tags */}
                  <div className="pt-4 border-t border-slate-200/70 flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                      {language === 'fr' ? 'Technologies & Méthodes :' : 'Technologies & Methods:'}
                    </span>
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200/90 text-maroon-900 font-semibold text-xs shadow-2xs hover:bg-roseDust-50 hover:border-roseDust-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
