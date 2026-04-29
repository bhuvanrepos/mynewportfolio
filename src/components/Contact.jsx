import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi'

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    setStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xykogdzn', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        // Reset back to form after 6 seconds
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm text-primary uppercase tracking-widest font-semibold mb-2">I'm Always Open To Discuss New Opportunities</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Let's Connect</h3>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
              <FiMail size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-400 font-medium mb-1">Email</h4>
              <a href="mailto:bhuvanamd17@gmail.com" className="text-lg text-white font-medium hover:text-primary transition-colors break-all">
                bhuvanamd17@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center shrink-0">
              <FiPhone size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-400 font-medium mb-1">Phone</h4>
              <a href="tel:+918309289388" className="text-lg text-white font-medium hover:text-secondary transition-colors">
                +91 8309289388
              </a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center shrink-0">
              <FiMapPin size={24} />
            </div>
            <div>
              <h4 className="text-sm text-gray-400 font-medium mb-1">Location</h4>
              <p className="text-lg text-white font-medium">
                Hyderabad, India
              </p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/bhuvan1705" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all rounded-xl">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com/bhuvanm1705" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all rounded-xl">
              <FiGithub size={20} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Subtle background glow for form */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/30"
                >
                  <FiCheckCircle size={48} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-white mb-3"
                >
                  Message Sent Successfully!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 text-lg"
                >
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="e.g. Mandala Bhuvan"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="e.g. your.email@domain.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Hello Bhuvan, I would like to discuss..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-opacity flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : status === 'error' ? (
                    'Error Sending. Try Again.'
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
