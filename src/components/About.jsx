import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { value: '5+', label: 'Major Projects' },
    { value: '15+', label: 'Hackathons' },
    { value: '10+', label: 'Certifications' },
    { value: '3+', label: 'Hackathon Wins' },
  ]

  return (
    <section id="about" className="scroll-mt-24 relative py-20 w-full flex items-center min-h-[80vh]">
      
      {/* Absolute Full-Bleed Right Image for Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 bottom-0 right-[calc(-50vw+50%)] w-[50vw] hidden lg:block -z-10"
      >
        <div className="relative w-full h-full">
          <img 
            src="/laptop.png" 
            alt="Developer working on laptop" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient mask to blend left edge with black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
      </motion.div>

      <div className="w-full lg:w-[55%] z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Mobile Image */}
          <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8 lg:hidden border border-white/10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <img src="/laptop.png" alt="Developer" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/20"></div>
          </div>

          <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase flex flex-wrap justify-center sm:justify-start items-center gap-2">
              DEVELOPER <span className="text-gray-500 hidden sm:inline">•</span><span className="text-gray-500 sm:hidden">|</span> PROBLEM SOLVER <span className="text-gray-500 hidden sm:inline">•</span><span className="text-gray-500 sm:hidden">|</span> INNOVATOR
            </h2>
            
            <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Crafting Digital Solutions <br className="hidden sm:block" />
              <span className="text-cyan-400">That Make Impact</span>
            </h3>
            
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg pt-4 mx-auto sm:mx-0">
              I love turning complex ideas into simple, beautiful and efficient solutions. Always exploring new technologies and building products that matter.
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-xl p-5 min-w-[120px] flex-1 sm:flex-none flex flex-col justify-center transition-colors hover:border-cyan-400/30"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default About
