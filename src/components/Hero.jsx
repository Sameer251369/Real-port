import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import bgImage from '../assets/1733927345216.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* Background Image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18, // 👈 more visible but still elegant
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#020617]/70" />

      {/* Soft animated gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2), transparent 55%)',
            'radial-gradient(circle at 70% 70%, rgba(147,51,234,0.2), transparent 55%)',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl px-6 text-center space-y-6">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide"
        >
          <Sparkles size={14} />
          Open for work
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Sameer Bashir
          </span>
        </motion.h1>

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-400 font-mono text-xs sm:text-sm tracking-widest uppercase"
        >
          Full Stack Developer · AI Engineer · AI Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-400 text-base md:text-lg leading-relaxed"
        >
          Building scalable, high-performance applications with modern stacks
          and practical AI — focused on clean UX and real-world results.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ y: -2 }}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2"
          >
            View Work <ArrowDown size={16} />
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5"
          >
            Download CV
          </motion.button>
        </div>

        {/* Socials */}
        <div className="flex gap-4 justify-center pt-6">
          <a
            href="https://github.com/Sameer251369"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-bashir"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:Sameerbashir522@gmail.com"
            className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 transition"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;

