import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/10 py-12 backdrop-blur-md" style={{ background: 'rgba(10, 14, 39, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-xl backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                whileHover={{ y: -4, scale: 1.1 }}
                aria-label={social.label}
              >
                <social.icon size={20} className="text-(--color-text-secondary)" style={{ color: 'var(--color-text-secondary)' }} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="flex items-center gap-2 justify-center" style={{ color: 'var(--color-text-muted)' }}>
              © {currentYear} Sameer Bashir. All rights reserved. Made with{' '}
              <Heart size={16} className="text-red-500 fill-red-500" style={{ color: '#ef4444' }} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;