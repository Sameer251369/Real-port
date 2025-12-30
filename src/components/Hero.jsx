import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

// 1. MUST IMPORT IMAGES LIKE THIS FOR VITE/NETLIFY
import profilePic from '../assets/1733927345216.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Sameer Bashir', 'Full Stack Developer', 'AI Powered Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* 2. BACKGROUND IMAGE FIX */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Subtle Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* 3. PROFILE IMAGE - ENHANCED FOR ALL SCREENS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 order-first lg:order-none" 
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <img
                src={profilePic} // Using the imported variable
                alt="Sameer Bashir"
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-3xl border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  <Sparkles size={14} />
                  Available for new projects
                </span>
              </motion.div>

              {/* Text heights fixed for mobile */}
              <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]"
                    style={{
                      background: 'linear-gradient(to right, #fff, #94a3b8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {texts[currentText]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-xl text-slate-400 leading-relaxed font-light tracking-wide"
              >
                Architecting scalable applications with modern stacks. 
                Focusing on performance, AI integration, and seamless user experiences.
              </motion.p>
            </div>

            {/* BUTTONS IMPROVED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
                <ArrowDown size={16} />
              </motion.button>

              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white text-sm hover:bg-white/10 transition-all"
                whileHover={{ y: -2 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:text-white hover:border-blue-500/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;