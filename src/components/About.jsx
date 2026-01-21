import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Database, Cpu } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Globe,
      title: 'Frontend Mastery',
      description: 'Crafting pixel-perfect, responsive interfaces using React and modern CSS.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Architecting robust server-side logic and optimized database schemas.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Leveraging Neural Networks and LLMs to build the next generation of apps.',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
    },
  ];

  return (
    <section id="about" className="bg-[#020617] relative overflow-hidden" ref={ref}>
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Bridging the gap between <br className="hidden md:block"/> 
              <span className="text-blue-400">design and logic.</span>
            </h3>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a Full Stack Developer who views code as a tool for solving human problems. 
              My expertise spans the entire development lifecycle, from conceptualizing 
              fluid user interfaces to engineering scalable server architectures.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              With a foundation in both modern frontend frameworks and robust backend 
              systems, I specialize in building applications that are not just 
              functional, but memorable.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              {['React', 'Node.js', 'PostgreSQL', 'Python', 'AWS'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <div className="grid gap-6 w-full">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex items-start gap-5 p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.07] hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;