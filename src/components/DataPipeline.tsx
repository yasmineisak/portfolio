import { motion } from 'framer-motion';
import { Database, Eye, Cpu, Cloud, ArrowDown } from 'lucide-react';

const NODES = [
  {
    id: 1,
    title: "Node 1: Ingestion & Data",
    icon: <Database className="text-cyan" size={24} />,
    content: "Internships at TE Connectivity & Trigo SAS. Developed SQL pipelines, advanced ETL, and Power BI dashboards tracking production KPIs.",
    type: "Ingest"
  },
  {
    id: 2,
    title: "Node 2: Computer Vision & AI",
    icon: <Eye className="text-magenta" size={24} />,
    content: "SIANA: Optimized YOLOv8 models for automated railway inspection, image preprocessing, bounding box annotation, and PaddleOCR text extraction.",
    type: "Process"
  },
  {
    id: 3,
    title: "Node 3: Scalable Systems",
    icon: <Cpu className="text-matrix" size={24} />,
    content: "AuraMarket (Multi-Agent via JADE, Kafka, ETL) & WokWise (Web recruitment with automated CV parsing/sorting).",
    type: "Distribute"
  },
  {
    id: 4,
    title: "Node 4: Deployment & Stack",
    icon: <Cloud className="text-white" size={24} />,
    content: "Python, PyTorch, Java, Spring Boot, Docker, Airflow, MinIO, PostgreSQL, MongoDB, Proxmox VE.",
    type: "Deploy"
  }
];

export default function DataPipeline() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2 font-sans flex items-center">
          <span className="text-magenta mr-3">{'//'}</span> Data Pipeline / DAG
        </h2>
        <p className="text-gray-400 font-mono text-sm">Executing workflow: Isakrouhen_Experience_DAG_v1</p>
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        {NODES.map((node, index) => (
          <div key={node.id} className="relative w-full flex flex-col items-center group">
            
            {/* The Node Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel-interactive w-full md:w-3/4 p-6 relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start text-left"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {node.icon}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{node.title}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 uppercase font-mono tracking-wider text-gray-300">
                    Task: {node.type}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {node.content}
                </p>
              </div>
            </motion.div>

            {/* Connecting Line */}
            {index < NODES.length - 1 && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 60, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.2) + 0.1, duration: 0.4 }}
                className="w-1 bg-gradient-to-b from-white/20 to-cyan/50 my-2 relative z-0 flex items-center justify-center"
                style={{ height: '60px' }}
              >
                <motion.div 
                  className="absolute"
                  animate={{ y: [0, 40, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown className="text-cyan/70" size={16} />
                </motion.div>
              </motion.div>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
}
