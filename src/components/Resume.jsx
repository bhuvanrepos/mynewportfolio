import { motion } from 'framer-motion'
import { FiDownload, FiCheckCircle } from 'react-icons/fi'

const Resume = () => {
  const highlights = [
    'B.Tech CSE - Malla Reddy College of Engineering',
    'Full Stack Developer | AI Engineer',
    'Hackathon Winner & Record Holder',
    'Tech Lead Intern - Swecha Viswam AI',
    'Multiple Projects & Certifications'
  ]

  return (
    <section id="resume" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm text-secondary uppercase tracking-widest font-semibold mb-2">Download My Resume</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Resume</h3>
      </motion.div>

      <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="grid lg:grid-cols-2">
          
          {/* Left Side: Highlights & Download */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
            
            <h4 className="text-2xl font-bold text-white mb-6">Bhuvan's Resume</h4>
            
            <ul className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <FiCheckCircle className="text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="/resume.pdf"
              download="Bhuvan_Resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-primary/30 w-fit"
            >
              <FiDownload size={20} /> Download Resume
            </motion.a>
          </div>

          {/* Right Side: Resume Preview */}
          <div className="bg-white/5 p-6 md:p-12 flex items-center justify-center border-l border-white/5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[1/1.4] w-full max-w-sm rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-white/10"
            >
              <object 
                data="/resume.pdf#view=FitH" 
                type="application/pdf" 
                className="w-full h-full border-none bg-white"
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]">
                  <FiDownload size={40} className="text-gray-500 mb-4" />
                  <p className="text-gray-300 text-sm mb-4">Your mobile browser doesn't support inline PDF previews.</p>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                  >
                    Open PDF Document
                  </a>
                </div>
              </object>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Resume
