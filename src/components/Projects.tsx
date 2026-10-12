import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import {
  FolderGit2,
  Workflow,
  Sparkles,
  Layers,
  Bot,
  FileText,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PipelineStep {
  step: string;
  name: string;
  desc: string;
  tech: string;
}

interface ProjectDisplayItem {
  title: string;
  type: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  glow: string;
  pipeline: PipelineStep[];
}

const PROJECT_CONFIGS = [
  {
    icon: Bot,
    tags: [
      "JADE Framework",
      "Apache Kafka",
      "Apache Airflow",
      "Airbyte",
      "Microservices",
      "Docker",
    ],
    gradient: "from-maroon-600/25 via-maroon-800/10 to-transparent",
    glow: "rgba(140, 45, 86, 0.35)",
  },
  {
    icon: Layers,
    tags: [
      "RAG Architecture",
      "LLM Open-Source",
      "LangChain",
      "ChromaDB",
      "Hugging Face",
      "Embeddings",
    ],
    gradient: "from-roseDust-400/20 via-maroon-700/10 to-transparent",
    glow: "rgba(215, 142, 160, 0.35)",
  },
  {
    icon: FileText,
    tags: [
      "Full-Stack Web",
      "Traitement NLP",
      "Matching Sémantique",
      "Filtres Avancés",
      "React",
      "Django",
    ],
    gradient: "from-rose-500/20 via-maroon-800/10 to-transparent",
    glow: "rgba(244, 63, 94, 0.3)",
  },
];

const HorizontalProjectCard = ({
  project,
  idx,
  overviewLabel,
  pipelineHeader,
}: {
  project: ProjectDisplayItem;
  idx: number;
  overviewLabel: string;
  pipelineHeader: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  const xInfo = useMotionValue(0);
  const yInfo = useMotionValue(0);

  const xSpring = useSpring(xInfo, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(yInfo, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    xInfo.set(yPct * -6);
    yInfo.set(xPct * 6);
  };

  const handleMouseLeave = () => {
    xInfo.set(0);
    yInfo.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      className="relative w-full"
    >
      <div
        className="glass-card-interactive p-8 md:p-10 relative overflow-hidden group rounded-3xl"
        style={{ boxShadow: `0 12px 45px -12px ${project.glow}` }}
      >
        {/* Ambient Gradient Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
        />

        <div className="relative z-10 flex flex-col">
          {/* Top Row: Identity & Overview */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-7">
            {/* Left: Icon, Title & Tags */}
            <div className="space-y-3 lg:max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-roseDust-100 border border-roseDust-200 flex items-center justify-center text-maroon-700 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon size={22} />
                </div>
                <span className="px-3.5 py-1 text-xs rounded-full bg-white/80 text-maroon-800 font-extrabold border border-roseDust-200/80 shadow-2xs">
                  {project.type}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-maroon-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-maroon-600/95 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] rounded-lg bg-white/90 text-maroon-900 font-semibold border border-slate-200/90 shadow-2xs hover:bg-roseDust-50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Description Block */}
            <div className="lg:max-w-lg lg:border-l lg:border-roseDust-200/60 lg:pl-6 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-maroon-600" />
                {overviewLabel}
              </span>
              <p className="text-slate-700 text-sm md:text-[14px] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Pipeline Header */}
          <div className="flex items-center gap-3 mb-4 pt-5 border-t border-roseDust-200/70">
            <div className="flex items-center gap-2 text-maroon-800 font-black text-xs uppercase tracking-wider">
              <Workflow size={16} className="text-maroon-700" />
              <span>{pipelineHeader}</span>
            </div>
            <div className="h-[1px] flex-grow bg-roseDust-200/60" />
          </div>

          {/* Horizontal Pipeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 relative">
            {project.pipeline.map((pStep, sIdx) => {
              const isLast = sIdx === project.pipeline.length - 1;
              return (
                <div key={sIdx} className="relative group/step">
                  <div className="h-full bg-white/75 hover:bg-white/95 rounded-2xl p-4 border border-roseDust-200/70 shadow-2xs transition-all flex flex-col justify-between">
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-maroon-700 text-white flex items-center justify-center text-xs font-black shadow-2xs">
                          {pStep.step}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-roseDust-100 text-maroon-800 border border-roseDust-200/80">
                          {pStep.tech}
                        </span>
                      </div>

                      {/* Step Name */}
                      <h4 className="text-xs font-bold text-slate-900 mb-1.5">
                        {pStep.name}
                      </h4>

                      {/* Step Desc */}
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        {pStep.desc}
                      </p>
                    </div>

                    {/* Step indicator arrow for desktop */}
                    {!isLast && (
                      <div className="hidden lg:flex justify-end pt-2 text-roseDust-400 group-hover/step:text-maroon-600 transition-colors">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { t } = useLanguage();

  const projects: ProjectDisplayItem[] = t.projects.items.map((item, idx) => ({
    ...item,
    icon: PROJECT_CONFIGS[idx]?.icon || Bot,
    tags: PROJECT_CONFIGS[idx]?.tags || [],
    gradient: PROJECT_CONFIGS[idx]?.gradient || "from-maroon-600/25 via-maroon-800/10 to-transparent",
    glow: PROJECT_CONFIGS[idx]?.glow || "rgba(140, 45, 86, 0.35)",
  }));

  return (
    <section className="section-container relative" id="projects">
      {/* Focused bright white center glow matching hero format */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1200px] h-[85%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(250,237,240,0.75)_35%,rgba(215,142,160,0.3)_65%,transparent_80%)] rounded-full blur-[35px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white text-maroon-800 text-xs font-bold tracking-wider uppercase mb-3 shadow-xs">
            <Sparkles size={13} className="text-maroon-600" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4 tracking-tight">
            <div className="p-3 bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-md flex items-center justify-center">
              <FolderGit2 className="text-maroon-700" size={32} />
            </div>
            <span>{t.projects.title}</span>
          </h2>
        </div>
        <span className="text-xs uppercase tracking-widest text-roseDust-200 font-semibold px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
          {t.projects.countBadge}
        </span>
      </div>

      {/* Projects Stack: Each project under the next one */}
      <div className="flex flex-col gap-9">
        {projects.map((project, idx) => (
          <HorizontalProjectCard
            key={idx}
            project={project}
            idx={idx}
            overviewLabel={t.projects.overviewLabel}
            pipelineHeader={t.projects.pipelineHeader}
          />
        ))}
      </div>
    </section>
  );
}
