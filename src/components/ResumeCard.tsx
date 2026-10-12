import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function ResumeCard() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel w-full md:w-2/3 mx-auto p-8 relative overflow-hidden group"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan/20 to-magenta/20 border border-white/10 flex items-center justify-center">
              <FileText className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-sans">Curriculum Vitae</h3>
              <p className="text-gray-400 font-mono text-sm mt-1">ISAKROUHEN_Yasmine_FlowCV_Resume_2026-10-03 (3).pdf</p>
            </div>
          </div>
          
          <a
            href={`${import.meta.env.BASE_URL}ISAKROUHEN_Yasmine_FlowCV_Resume_2026-10-03 (3).pdf`}
            download
            className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
