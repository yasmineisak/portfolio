import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

type OutputLine = {
  type: 'input' | 'output' | 'error';
  content: string;
};

const FILES = {
  'profile.txt': `Name: Yasmine Isakrouhen
Title: Élève Ingénieure Big Data and IA (5ème année)
Location: Tanger, Maroc
Email: Yasmine.Isakrouhen@emsi-edu.ma
Phone: +212 632825077
Availability: À partir de 1er février 2027 (6-month PFE internship)
Education:
- EMSI Tanger (2025 - Présent): Ingénierie IA & Data Engineering
- Univ. Abdelmalek Essaadi (2024-2025): Licence Informatique-Mathématiques`,
  'skills.json': `{
  "AI_Vision": ["YOLO", "PaddleOCR", "LLM", "RAG", "LangChain", "Hugging Face", "TensorFlow", "PyTorch"],
  "BigData_Streaming": ["Apache Spark", "Apache Kafka", "ChromaDB", "Airflow"],
  "Software_Engineering": ["Python", "Java", "Spring Boot", "React", "Docker", "Linux", "Proxmox VE"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis", "Snowflake"]
}`,
  'experience/siana.md': `# SIANA (Tanger | 07/2026 - 08/2026)
**Role**: Stage en Intelligence Artificielle & Computer Vision
**Key Contributions**:
- Développement et optimisation de modèles YOLOv8 pour l'inspection ferroviaire automatisée
- Pipelines de traitement d'images
- Extraction de texte avec PaddleOCR
- Annotation de données et curation des jeux de données`
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    { type: 'output', content: 'Neural Command Interface v2.0' },
    { type: 'output', content: 'Type "help" to see available commands.' }
  ]);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    const newHistory: OutputLine[] = [...history, { type: 'input', content: `visitor@yasmine:~$ ${cmd}` }];
    
    const [action, ...args] = cmd.split(' ');

    if (action === 'help') {
      newHistory.push({ type: 'output', content: 'Available commands:' });
      newHistory.push({ type: 'output', content: '  help                        - List available commands' });
      newHistory.push({ type: 'output', content: '  clear                       - Clear terminal output' });
      newHistory.push({ type: 'output', content: '  cat profile.txt             - View profile summary and availability' });
      newHistory.push({ type: 'output', content: '  cat skills.json             - View technical stack' });
      newHistory.push({ type: 'output', content: '  cat experience/siana.md     - Details about computer CV internship' });
      newHistory.push({ type: 'output', content: '  run contact.sh              - Initiate contact protocol' });
    } else if (action === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (action === 'cat') {
      const file = args.join(' ');
      if (FILES[file as keyof typeof FILES]) {
        newHistory.push({ type: 'output', content: FILES[file as keyof typeof FILES] });
      } else {
        newHistory.push({ type: 'error', content: `cat: ${file}: No such file or directory` });
      }
    } else if (action === 'run' && args[0] === 'contact.sh') {
      newHistory.push({ type: 'output', content: 'Initiating contact protocol...' });
      newHistory.push({ type: 'output', content: 'Email: Yasmine.Isakrouhen@emsi-edu.ma' });
      newHistory.push({ type: 'output', content: 'Phone: +212 632825077' });
      // In a real app, this could open a modal window
    } else {
      newHistory.push({ type: 'error', content: `command not found: ${action}` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-10 z-10 relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel overflow-hidden border border-white/10"
      >
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TerminalIcon size={16} className="text-cyan" />
            <span className="text-xs font-mono text-gray-300">yasmine@ai-core:~</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer flex items-center justify-center group"><X size={8} className="opacity-0 group-hover:opacity-100 text-black" /></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 flex items-center justify-center group"><Plus size={8} className="opacity-0 group-hover:opacity-100 text-black" /></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-[400px] overflow-y-auto terminal-scrollbar font-mono text-sm">
          {history.map((line, i) => (
            <div 
              key={i} 
              className={
                line.type === 'input' ? 'text-white' : 
                line.type === 'error' ? 'text-magenta' : 'text-matrix whitespace-pre-wrap'
              }
            >
              {line.content}
            </div>
          ))}
          <div ref={endOfMessagesRef} />
          
          <form onSubmit={handleCommand} className="mt-2 flex items-center">
            <span className="text-cyan mr-2">visitor@yasmine:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono"
              autoFocus
              spellCheck={false}
            />
          </form>
        </div>
      </motion.div>
    </section>
  );
}
