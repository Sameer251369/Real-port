import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Send, Phone } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="section-container relative"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
      ref={ref}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(70, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 102, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div
          className="w-20 h-1 mx-auto mb-12"
          style={{
            background:
              'linear-gradient(to right, var(--color-primary), var(--color-accent-purple))',
          }}
        ></div>

        {/* 🔥 CENTER FIX APPLIED HERE */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <motion.div
              className="backdrop-blur-md border border-white/10 p-8 rounded-xl"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      color: 'var(--color-text-primary)',
                    }}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      color: 'var(--color-text-primary)',
                    }}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    Message
                  </label>
                  <textarea
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none resize-none"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      color: 'var(--color-text-primary)',
                    }}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(70, 102, 255, 0.4), rgba(148, 0, 211, 0.4))',
                  }}
                >
                  {isSubmitting ? 'Sending…' : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </form>

              <div className="mt-8 pt-8 border-t border-white/10 text-center space-y-4">
                <a
                  href="mailto:Sameerbashir522@gmail.com"
                  className="flex justify-center items-center gap-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Mail size={20} />
                  Sameerbashir522@gmail.com
                </a>

                <a
                  href="tel:+916005349142"
                  className="flex justify-center items-center gap-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <Phone size={20} />
                  6005 349142
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
