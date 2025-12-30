import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  GitBranch, 
  Figma,
  Terminal,
  Globe,
  Layers,
  Cpu,
  Cloud,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-400 to-cyan-400',
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend & API',
      icon: Terminal,
      color: 'from-purple-400 to-pink-400',
      skills: ['Django', 'Django REST Framework', 'Python', 'PostgreSQL', 'MySQL / MongoDB'],
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-emerald-400 to-teal-400',
      skills: ['CI/CD Pipelines', 'Render / Netlify', 'Git / GitHub', 'Docker', 'AWS'],
    },
    {
      category: 'UI/UX Design',
      icon: Palette,
      color: 'from-orange-400 to-yellow-400',
      skills: ['Figma', 'Responsive Design', 'Prototyping', 'Adobe Suite', 'Motion Graphics'],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-[#020617] relative" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4">
              <Sparkles size={14} /> My Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">ARSENAL</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-slate-400 max-w-sm text-lg font-light leading-relaxed"
          >
            A specialized stack focused on performance, scalability, and seamless user experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

              <div className="relative z-10">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <category.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                  {category.category}
                </h3>

                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      <span className="text-sm font-medium tracking-wide">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;