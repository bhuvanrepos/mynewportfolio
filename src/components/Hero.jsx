import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[90vh] flex items-center relative py-20 lg:py-0 w-full">
      
      {/* Absolute Full-Bleed Right Image for Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 bottom-0 right-[calc(-50vw+50%)] w-[50vw] hidden lg:block -z-10"
      >
        <div className="relative w-full h-full">
          <img 
            src="/first_img.jpeg" 
            alt="Mandala Bhuvan" 
            className="w-full h-full object-cover object-[center_top]"
          />
          {/* Gradient mask to blend left edge with black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        </div>
      </motion.div>

      {/* Left Content */}
      <div className="w-full lg:w-[60%] z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Mobile Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-400 mb-8 lg:hidden shadow-[0_0_15px_rgba(34,211,238,0.3)] mx-auto sm:mx-0">
            <img src="/first_img.jpeg" alt="Mandala Bhuvan" className="w-full h-full object-cover object-top" />
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <div className="inline-block px-3 py-1 border border-cyan-400 rounded-md">
              <h2 className="text-cyan-400 font-medium tracking-widest uppercase text-xs">
                HELLO, I'M
              </h2>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Mandala Bhuvan
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-400 font-medium tracking-wide">
              Full Stack Developer | AI Engineer
            </p>
            <p className="text-gray-400 max-w-lg text-sm sm:text-base leading-relaxed pt-2">
              Building scalable AI-driven applications and<br />
              full stack solutions that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold rounded-md transition-colors flex items-center gap-2 text-sm"
            >
              View My Work <FiArrowRight />
            </a>
            <a
              href="#resume"
              className="px-6 py-2.5 bg-transparent border border-cyan-400 hover:bg-cyan-400/10 text-white font-medium rounded-md transition-colors flex items-center gap-2 text-sm"
            >
              Download Resume <FiDownload />
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-4 pt-6">
            <a href="https://github.com/bhuvanm1705" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#222] text-white p-3 rounded-full transition-colors flex items-center justify-center">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/bhuvan1705" target="_blank" rel="noreferrer" className="bg-[#111] hover:bg-[#222] text-white p-3 rounded-full transition-colors flex items-center justify-center">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:bhuvanamd17@gmail.com" className="bg-[#111] hover:bg-[#222] text-white p-3 rounded-full transition-colors flex items-center justify-center">
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
