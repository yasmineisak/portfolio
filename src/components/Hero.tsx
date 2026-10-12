import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function StarSphere() {
  const ref = useRef<any>(null);
  
  // Generating points in a sphere
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-glow z-10 pointer-events-none" />
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarSphere />
        </Canvas>
      </div>
      
      {/* Overlay Content */}
      <div className="section-container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-10 md:p-16 max-w-4xl mx-auto backdrop-blur-md bg-surface/30"
        >
          <div className="inline-block px-5 py-2 mb-8 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            Disponible: 1er Février 2027 (PFE - 6 Mois)
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight mb-6">
            Yasmine Isakrouhen
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-10">
            Élève Ingénieure <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">Big Data & IA</span> (5ème année)
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-400 mb-12">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin size={18} className="text-secondary" /> Tanger, Maroc
            </div>
            <div className="hidden md:block text-slate-600">•</div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={18} className="text-primary" /> Yasmine.Isakrouhen@emsi-edu.ma
            </div>
            <div className="hidden md:block text-slate-600">•</div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={18} className="text-tertiary" /> +212 632825077
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}ISAKROUHEN_Yasmine_FlowCV_Resume_2026-10-03 (3).pdf`}
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all"
          >
            <Download size={22} />
            Télécharger le CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
