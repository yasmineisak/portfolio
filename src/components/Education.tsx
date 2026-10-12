import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EDUCATION_DATA = [
  {
    degree: "Cycle d'ingénieur en Informatique et Réseaux",
    specialty: "Spécialité IA & Data Engineering",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    location: "Tanger, Maroc",
    period: "2025 - Présent",
    glow: "from-maroon-600/30 via-roseDust-400/10",
  },
  {
    degree: "Licence en Informatique-Mathématiques",
    specialty: "Bases Scientifiques & Algorithmiques",
    school: "Faculté des Sciences - Univ. Abdelmalek Essaadi",
    location: "Tétouan, Maroc",
    period: "2024 - 2025",
    glow: "from-maroon-700/30 via-roseDust-500/10",
  }
];

export default function Education() {
  return (
    <section className="section-container relative" id="education">
      {/* Focused bright white center glow matching hero format */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[85%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(250,237,240,0.75)_35%,rgba(215,142,160,0.3)_65%,transparent_80%)] rounded-full blur-[35px] pointer-events-none -z-10" />
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-14 flex items-center gap-4">
        <div className="p-3 bg-white/80 rounded-2xl border border-white shadow-sm">
          <GraduationCap className="text-maroon-700" size={30} />
        </div>
        <span>Mon Parcours Académique</span>
      </h2>
      
      <div className="grid gap-8">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            key={idx} 
            className="group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${edu.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-3xl -z-10`} />
            
            <div className="glass-card-interactive p-8 md:p-10 flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-lg font-bold text-maroon-700 mb-4">
                  {edu.specialty}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-600 font-medium text-sm">
                  <span className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-maroon-600"/> {edu.school}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={18} className="text-maroon-600"/> {edu.location}
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0 flex items-center gap-3 text-maroon-700 bg-roseDust-100/90 px-5 py-2.5 rounded-xl border border-roseDust-200/80 shadow-sm">
                <Calendar size={18} className="text-maroon-600" />
                <span className="font-semibold tracking-wide text-sm">{edu.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
