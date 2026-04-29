import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import { FaGamepad } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'CareerSpark',
    description: 'AI-powered career guidance platform helping students discover the right path. Features roadmap generation, resume builder, and job matching.',
    image: '/career.png',
    imgClass: 'object-contain p-4',
    tags: ['Next.js', 'Tailwind', 'MongoDB', 'OpenAI', 'Groq', 'Gemini API', 'Python'],
    demoLink: 'https://careerspark2k25-2.vercel.app/',
    githubLink: 'https://github.com/bhuvanm1705/careerspark2k25.2.git'
  },
  {
    id: 2,
    title: 'Foru.ms',
    description: 'Community platform for discussions and connections. Real-time chat, nested replies, and advanced moderation tools.',
    image: '/for.jpg',
    tags: ['TypeScript', 'CSS', 'JavaScript', 'Vite+React', 'Firebase'],
    demoLink: 'https://un-forum-vercel-devpost-hackathon.vercel.app/',
    githubLink: 'https://github.com/bhuvanm1705/Un-Forum_vercel_devpost_hackathon'
  },
  {
    id: 3,
    title: 'अन्नदानम् - Annadānam',
    description: 'A platform connecting food donors with those in need. Streamlines the donation process to reduce food waste and address hunger efficiently.',
    image: '/alogo1.png',
    imgClass: 'object-contain p-4',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://mellow-figolla-2052d2.netlify.app/',
    githubLink: 'https://github.com/careers2k25/ANNADHANAM'
  },
  {
    id: 4,
    title: 'WarDrop',
    description: 'Historical war strategy game built with a modern engine. Immersive graphics, multiplayer battles, and strategic resource management.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    tags: ['Unity', 'C#', 'Multiplayer', '3D Graphics'],
    demoLink: '#',
    githubLink: '#'
  }
]

const Projects = () => {
  const [showGamifiedAlert, setShowGamifiedAlert] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showGamifiedAlert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showGamifiedAlert]);

  const handleWarDropClick = (e) => {
    e.preventDefault();
    setShowGamifiedAlert(true);
  };

  return (
    <section id="projects" className="scroll-mt-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm text-accent uppercase tracking-widest font-semibold mb-2">My Work</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-card group overflow-hidden flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full ${project.imgClass || 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.id === 4 ? (
                  <>
                    <button onClick={handleWarDropClick} className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary rounded-lg transition-colors text-sm font-medium cursor-pointer">
                      <FiExternalLink /> Live Demo
                    </button>
                    <button onClick={handleWarDropClick} className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors text-sm font-medium cursor-pointer">
                      <FiGithub /> GitHub
                    </button>
                  </>
                ) : (
                  <>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary rounded-lg transition-colors text-sm font-medium">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors text-sm font-medium">
                      <FiGithub /> GitHub
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gamified Alert Modal */}
      <AnimatePresence>
        {showGamifiedAlert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGamifiedAlert(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-[#0a0f1c] border-2 border-cyan-400 rounded-2xl p-8 max-w-md w-full shadow-[0_0_40px_rgba(6,182,212,0.4)] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Gamified Top Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-80"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setShowGamifiedAlert(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              {/* Floating Gamepad Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="bg-cyan-500/10 p-5 rounded-full border border-cyan-400/30 mb-6 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <FaGamepad size={48} />
              </motion.div>

              <h4 className="text-3xl font-extrabold text-white mb-2 tracking-wide uppercase">
                Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Denied</span>
              </h4>
              
              <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest">
                Level Not Unlocked Yet
              </p>

              <div className="w-full bg-[#111827] py-8 px-6 rounded-xl border border-white/5 relative overflow-hidden group mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p 
                  className="text-4xl text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
                  style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}
                >
                  Learning in progress
                </p>
                <p 
                  className="text-xl text-gray-400 mt-4"
                  style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}
                >
                  ~ Bhuvan
                </p>
              </div>

              <button 
                onClick={() => setShowGamifiedAlert(false)}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                CONTINUE QUEST
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
