import { motion } from 'framer-motion';
import { Github, Server, ExternalLink } from 'lucide-react';

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
      title: 'Agro AI',
      subtitle: 'Disease Detection Platform',
      role: 'Full Stack AI Engineer',
      description:
        'An agricultural intelligence platform that detects crop diseases using deep learning. Built with a scalable Django backend and a real-time React dashboard for actionable insights.',
      images: [agro1, agro2],
      stack: ['Django REST', 'React', 'PyTorch', 'JWT'],
      liveUrl: 'https://agro-ai-frontend.vercel.app/',
      frontEndRepo: 'https://github.com/Sameer251369/AGRO-AI-frontend.git',
      backEndRepo: 'https://github.com/Sameer251369/AGRO-AI-backend-.git',
      accent: '#10b981',
    },
    {
      id: 2,
      title: 'Shoecart',
      subtitle: 'Premium E-Commerce',
      role: 'Lead Full Stack Developer',
      description:
        'A modern e-commerce platform focused on performance and UX. Features advanced filtering, persistent cart logic, and a polished checkout flow.',
      images: [shoe1, shoe2],
      stack: ['Django DRF', 'Tailwind', 'Redux', 'PostgreSQL'],
      liveUrl: 'https://shoecart-front.vercel.app/',
      frontEndRepo: 'https://github.com/Sameer251369/Shoecart.git',
      backEndRepo: 'https://github.com/Sameer251369/shoecart-backend.git',
      accent: '#3b82f6',
    },
  ];

  return (
    <section id="projects" className="bg-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Selected <span className="text-blue-500">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A small collection of products I’ve designed and engineered end-to-end.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 max-w-xl"
              >
                <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                  {project.role}
                </span>

                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mt-2">{project.subtitle}</p>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest rounded-md bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-4 pt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold text-sm"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.frontEndRepo}
                    target="_blank"
                    className="p-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition"
                  >
                    <Github size={20} />
                  </a>

                  <a
                    href={project.backEndRepo}
                    target="_blank"
                    className="p-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition"
                  >
                    <Server size={20} />
                  </a>
                </div>
              </motion.div>

              {/* IMAGES */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative grid grid-cols-2 gap-4"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 blur-[120px] opacity-20 pointer-events-none"
                  style={{ backgroundColor: project.accent }}
                />

                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl border border-white/10 shadow-xl"
                  >
                    <img
                      src={img}
                      alt="Project screenshot"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
