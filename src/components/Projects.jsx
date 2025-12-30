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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Agro AI: Disease Detector',
      role: 'Full Stack AI Engineer',
      description:
        'A high-performance agricultural diagnostic platform. I engineered a custom neural network backend to identify crop pathologies, integrated with a real-time React dashboard for instant treatment protocols.',
      images: [agro1, agro2],
      stack: ['Django REST', 'React', 'PyTorch', 'JWT Auth'],
      liveUrl: 'https://agroa.netlify.app/',
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
      liveUrl: 'https://shoecart1.netlify.app/',
      frontEndRepo: 'https://github.com/Sameer251369/Shoecart.git',
      backEndRepo: 'https://github.com/Sameer251369/shoecart-backend.git',
      color: '#3b82f6',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500">Masterpieces</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed tracking-wide">
              A curated selection of full-stack applications where complex logic meets elegant design.
            </p>
          </motion.div>
        </div>

        {/* Project List */}
        <div className="space-y-64">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 lg:gap-32 items-start`}>
                
                {/* TEXT CONTENT */}
                <div className="w-full lg:w-1/2 space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="h-[2px] w-12 bg-blue-500 rounded-full" />
                      <span className="text-blue-400 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                        {project.role}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg md:text-xl text-slate-400 leading-[1.8] font-light tracking-wide italic">
                    "{project.description}"
                  </p>

                  {/* TECH STACK TAGS */}
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-wrap items-center gap-6 pt-8">
                    {/* LIVE DEMO BUTTON */}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-tighter shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all"
                    >
                      Live Preview <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </motion.a>

                    {/* SOURCE CODE LINKS */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.frontEndRepo}
                        target="_blank"
                        whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                        className="p-5 border border-white/10 rounded-2xl text-white flex items-center gap-3 transition-colors bg-white/5"
                        title="Frontend Source"
                      >
                        <Github size={22} />
                        <span className="text-xs font-bold uppercase tracking-widest">Client</span>
                      </motion.a>
                      <motion.a
                        href={project.backEndRepo}
                        target="_blank"
                        whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                        className="p-5 border border-white/10 rounded-2xl text-white flex items-center gap-3 transition-colors bg-white/5"
                        title="Backend Source"
                      >
                        <Server size={22} />
                        <span className="text-xs font-bold uppercase tracking-widest">Server</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* IMAGE SHOWCASE */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 relative group">
                  {/* Background Glow */}
                  <div 
                    className="absolute inset-0 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" 
                    style={{ backgroundColor: project.color }}
                  />
                  
                  {project.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02, rotate: i === 0 ? -2 : 2 }}
                      className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10 transition-all duration-500 ${
                        i === 1 ? 'lg:mt-24 shadow-blue-500/10' : 'shadow-emerald-500/10'
                      }`}
                    >
                      <img
                        src={img}
                        alt="Project Snapshot"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>

              </div>
              
              {/* Modern Divider */}
              {index !== projects.length - 1 && (
                <div className="mt-64 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;