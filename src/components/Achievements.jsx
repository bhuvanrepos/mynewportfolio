import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiAward, FiArrowRight } from 'react-icons/fi'

const achievements = [
  {
    id: 'ai-india-impact',
    title: 'AI India Impact Buildathon Finalist',
    tag: 'Top 2% National Finalist',
    image: '/ailogonew.png',
    imgClass: 'object-contain p-4 bg-white',
    date: 'Feb 2026',
    org: 'GUVI x HCL'
  },
  {
    id: 'vercel-hackathon',
    title: 'Vercel International Hackathon Winner',
    tag: 'Winner',
    image: '/verlogo.png',
    imgClass: 'object-contain p-4 bg-white',
    date: '2025',
    org: 'Vercel x Devpost'
  },
  {
    id: 'guinness-world-record',
    title: 'Guinness World Record Agentathon',
    tag: 'Record Holder',
    image: '/aglogo.jpeg',
    imgClass: 'object-contain p-4 bg-white',
    date: 'Dec 2025',
    org: 'Guinness World Records'
  },
  {
    id: 'google-arcade',
    title: 'Google Arcade Learner - Legend',
    tag: 'Legend Tier',
    image: '/gcp.png',
    imgClass: 'object-contain p-6 bg-white',
    date: '2025',
    org: 'Google Cloud'
  },
  {
    id: 'devops-mastersprint',
    title: 'Devops MasterSprint - Student Resource Person',
    tag: 'Resource Person',
    image: '/dms.png',
    imgClass: 'object-contain p-4 bg-white',
    date: 'Sep-Nov 2025',
    org: 'DevOps MasterSprint'
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm text-secondary uppercase tracking-widest font-semibold mb-2">Milestones</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Achievements & Recognition</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, idx) => (
          <Link to={`/achievement/${achievement.id}`} key={achievement.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer h-full border border-white/5 hover:border-secondary/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className={`w-full h-full ${achievement.imgClass || 'object-cover'} group-hover:scale-105 transition-transform duration-700`}
                />
                {!achievement.imgClass?.includes('bg-white') && (
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                )}
                <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <FiAward /> {achievement.tag}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-secondary transition-colors">
                  {achievement.title}
                </h4>
                <div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
                  <span>{achievement.date}</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>{achievement.org}</span>
                </div>
                <div className="mt-4 flex items-center text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <FiArrowRight className="ml-1" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Achievements
