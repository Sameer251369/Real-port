import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Server, ExternalLink, ArrowUpRight } from 'lucide-react';

// --- AGRO AI IMAGES ---
import agro1 from '../assets/Screenshot 2025-12-30 143825.png';
import agro2 from '../assets/Screenshot 2025-12-30 143856.png';

// --- SHOECART IMAGES ---
import shoe1 from '../assets/Screenshot 2025-12-30 144143.png';
import shoe2 from '../assets/Screenshot 2025-12-30 144200.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Agro AI: Disease Detector',
      role: 'Full Stack AI Engineer',
      description:
        'A high-performance agricultural diagnostic platform. I engineered a custom neural network backend to identify crop pathologies, integrated with a real-time React dashboard for instant treatment protocols.',
      images: [agro1, agro2],
      stack: ['Django REST', 'React', 'PyTorch', 'JWT Auth'],
      liveUrl: 'https://agro-ai-frontend.vercel.app/',
      frontEndRepo: 'https://github.com/Sameer251369/AGRO-AI-frontend.git',
      backEndRepo: 'https://github.com/Sameer251369/AGRO-AI-backend-.git',
      color: '#10b981',
    },
    {
      id: 2,
      title: 'Shoecart: Premium E-Com',
      role: 'Lead Full Stack Developer',
      description:
        'A luxury footwear storefront built for scale. Features a stateless Django architecture, granular search filtering, persistent cart management, and a highly polished checkout experience.',
      images: [shoe1, shoe2],
      stack: ['Django DRF', 'Tailwind CSS', 'Redux', 'PostgreSQL'],
      liveUrl: 'https://shoecart-front.vercel.app/',
      frontEndRepo: 'https://github.com/Sameer251369/Shoecart.git',
      backEndRepo: 'https://github.com/Sameer251369/shoecart-backend.git',
      color: '#3b82f6',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            SELECTED <span className="text-blue-500">WORKS</span>
          </motion.h2>
        </div>

        <div className="space-y-80">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Flex container for Content and Visuals */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                
                {/* 1. LEFT SIDE: SPACIOUS TEXT CONTENT */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                  <div className="space-y-4">
                    <span className="text-blue-400 font-mono text-xs font-bold tracking-[0.4em] uppercase">
                      {project.role}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* 2. RIGHT SIDE: IMAGE SHOWCASE & COMPACT BUTTONS */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="w-full lg:w-1/2 space-y-10"
                >
                  <div className="grid grid-cols-2 gap-4 relative group">
                    {/* Visual Background Glow */}
                    <div 
                      className="absolute inset-0 blur-[100px] opacity-20 pointer-events-none" 
                      style={{ backgroundColor: project.color }}
                    />
                    
                    {project.images.map((img, i) => (
                      <div key={i} className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${i === 1 ? 'mt-12' : ''}`}>
                        <img src={img} alt="Snapshot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>

                  {/* PROJECT ACTION LINKS - PLACED UNDER IMAGES FOR BETTER ROOM */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
                    >
                      Live Demo <ExternalLink size={16} />
                    </motion.a>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.frontEndRepo}
                        target="_blank"
                        className="p-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
                        title="Client Code"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.backEndRepo}
                        target="_blank"
                        className="p-4 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors"
                        title="Server Code"
                      >
                        <Server size={20} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;