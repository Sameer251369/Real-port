import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import profilePic from '../assets/1733927345216.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <div className="absolute inset-0 bg-[#020617]/70" />

      {/* Animated Soft Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), transparent 55%)',
            'radial-gradient(circle at 70% 70%, rgba(147,51,234,0.18), transparent 55%)',
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl space-y-6">
        
        {/* PROFILE PIC */}
        <motion.img
          src={profilePic}
          alt="Sameer Bashir"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full border border-white/15 shadow-2xl"
        />

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
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
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
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl"
        >
          Building scalable, high-performance applications with modern stacks
          and practical AI — focused on clean UX and real-world impact.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ y: -2 }}
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 transition-transform"
          >
            View Work <ArrowDown size={16} />
          </motion.button>

          <motion.button
            whileHover={{ y: -2 }}
            className="px-8 py-4 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            Download CV
          </motion.button>
        </div>

        {/* Socials */}
        <div className="flex gap-4 justify-center pt-6">
          <a
            href="https://github.com/Sameer251369"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-bashir"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sameerbashir522@gmail.com"
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