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
  Cloud
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', icon: Code2 },
        { name: 'JavaScript (ES6+)', icon: Code2 },
        { name: 'TypeScript', icon: Code2 },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Next.js', icon: Layers },
      ],
    },
    {
      category: 'Backend & API',
      icon: Terminal,
      skills: [
        { name: 'Django', icon: Terminal },
        { name: 'Django REST Framework', icon: Cpu },
        { name: 'Python', icon: Code2 },
        { name: 'PostgreSQL', icon: Database },
        { name: 'MySQL / MongoDB', icon: Database },
      ],
    },
    {
      category: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'CI/CD Pipelines', icon: GitBranch },
        { name: 'Render / Netlify', icon: Cloud },
        { name: 'Git / GitHub', icon: GitBranch },
        { name: 'Docker', icon: Layers },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: Palette,
      skills: [
        { name: 'Figma', icon: Figma },
        { name: 'Responsive Design', icon: Layers },
        { name: 'Prototyping', icon: Palette },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#4666ff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Arsenal</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;