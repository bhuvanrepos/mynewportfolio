import { motion } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'

const certifications = [
  {
    id: 1,
    title: 'Microsoft Learn',
    description: 'Azure Networking, VNets, Load Balancers',
    image: '/ml-logo.png',
    link: 'https://learn.microsoft.com/en-us/users/bhuvanmandala-3326/',
    color: 'from-blue-500/20 to-transparent'
  },
  {
    id: 2,
    title: 'Kaggle',
    description: 'Programming & Datasets',
    image: '/kaggle.png',
    link: 'https://www.kaggle.com/bhuvan1731',
    color: 'from-cyan-500/20 to-transparent'
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-24 mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm text-secondary uppercase tracking-widest font-semibold mb-2">Qualifications</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Certifications</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card overflow-hidden group border border-white/5 hover:border-secondary/50 transition-colors flex flex-col sm:flex-row items-center sm:items-stretch h-full"
          >
            <div className={`w-full sm:w-1/3 bg-white p-6 flex items-center justify-center relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-50`}></div>
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-24 h-24 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-center w-full">
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <FiAward />
                <span className="text-xs uppercase tracking-wider font-semibold">Verified Badge</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{cert.title}</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {cert.description}
              </p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 py-2.5 px-5 rounded-lg transition-colors w-fit group/btn border border-white/5 hover:border-white/20"
              >
                View Certificates <FiExternalLink className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
