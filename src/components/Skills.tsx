import { motion } from 'framer-motion';
import {
  Cpu,
  Brain,
  Activity,
  BarChart3,
  Code2,
  Server,
  Award,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SKILL_ICONS: LucideIcon[] = [Brain, Activity, BarChart3, Code2, Server];

const SKILL_ITEMS_DATA = [
  [
    "YOLOv8",
    "PaddleOCR",
    "LLM & RAG",
    "LangChain",
    "Hugging Face",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
  ],
  [
    "Apache Spark",
    "Apache Kafka",
    "ChromaDB",
    "Apache Airflow",
    "Airbyte",
    "Vectorisation",
    "Pipelines ETL",
  ],
  [
    "Power BI",
    "Tableau",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Snowflake",
    "SQL Server",
    "Excel Avancé",
  ],
  [
    "Python",
    "Java",
    "Spring Boot",
    "React",
    "Django",
    ".NET",
    "C",
    "PHP",
    "JavaScript",
    "HTML / CSS",
  ],
  [
    "Docker",
    "Git",
    "Linux",
    "Proxmox VE",
    "Conteneurisation",
    "Microservices",
  ],
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section-container relative" id="skills">
      {/* Focused bright white center glow matching hero format */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1200px] h-[85%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(250,237,240,0.75)_35%,rgba(215,142,160,0.3)_65%,transparent_80%)] rounded-full blur-[35px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white text-maroon-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-maroon-600" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-tight">
            <div className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-md flex items-center justify-center">
              <Cpu className="text-maroon-700" size={32} />
            </div>
            <span>{t.skills.title}</span>
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-roseDust-200 font-semibold px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
          {t.skills.countBadge}
        </span>
      </div>

      {/* 5-Card Technical Skills Bento Layout: 3 on top row, 2 wide on bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-7 items-stretch">
        {t.skills.categories.map((category, idx) => {
          const Icon = SKILL_ICONS[idx] || Brain;
          const items = SKILL_ITEMS_DATA[idx] || [];
          const isBottomRow = idx >= 3;
          const spanClass = isBottomRow ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-card-interactive p-7 flex flex-col justify-between group rounded-3xl ${spanClass}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-roseDust-100 border border-roseDust-200 flex items-center justify-center text-maroon-700 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-extrabold text-maroon-900 uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/80 border border-roseDust-200/80 rounded-xl text-xs font-bold text-slate-800 shadow-2xs hover:bg-white hover:border-maroon-300 hover:text-maroon-900 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-roseDust-200/50 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>{items.length} {t.skills.technologiesCount}</span>
                <span className="text-maroon-600 font-bold group-hover:translate-x-0.5 transition-transform">
                  {t.skills.expertiseLabel}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications kept aside in a dedicated block under the skills */}
      <motion.div
        id="certifications"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-20 scroll-mt-28"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white text-maroon-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
              <Award size={13} className="text-maroon-600" />
              <span>{t.certifications.badge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-tight">
              <div className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-md flex items-center justify-center">
                <Award className="text-maroon-700" size={32} />
              </div>
              <span>{t.certifications.title}</span>
            </h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-roseDust-200 font-semibold px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
            {t.certifications.countBadge}
          </span>
        </div>

        {/* 5 Horizontal Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {t.certifications.items.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card-interactive p-5 rounded-2xl flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-roseDust-100 text-maroon-800 border border-roseDust-200/80">
                    {cert.badge}
                  </span>
                  <span className="text-xs font-extrabold text-maroon-700">
                    {cert.year}
                  </span>
                </div>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/link"
                  >
                    <h4 className="text-sm font-bold text-slate-900 group-hover/link:text-maroon-700 transition-colors mb-1.5 leading-snug flex items-start justify-between gap-1.5">
                      <span>{cert.title}</span>
                      <ExternalLink size={13} className="text-maroon-600 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                    </h4>
                  </a>
                ) : (
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {cert.title}
                  </h4>
                )}

                <p className="text-xs font-semibold text-maroon-600">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-roseDust-200/50 flex items-center justify-between text-[11px] font-semibold">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-maroon-700 hover:text-maroon-900 font-bold transition-colors group/verif"
                  >
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>{t.certifications.verifyLink}</span>
                    <ExternalLink size={11} className="opacity-70 group-hover/verif:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>{t.certifications.verifiedBadge}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
