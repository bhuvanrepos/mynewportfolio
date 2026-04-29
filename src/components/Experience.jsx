import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const experiences = [
  {
    role: 'Tech Lead Intern',
    company: 'Swecha Viswam AI',
    duration: 'May 2025 - July 2025',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=200&auto=format&fit=crop', // Placeholder logo
    points: [
      'Led LLM-based AI projects using Hugging Face, PyTorch and LangChain.',
      'Mentored 10+ interns on NLP, fine-tuning, deployment and prompt engineering.',
      'Worked on real-world AI systems and deployment architectures.'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm text-primary uppercase tracking-widest font-semibold mb-2">Professional Journey</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Experience</h3>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 md:flex items-center justify-between"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-dark border-4 border-primary z-10"></div>

              {/* Date (Left Side on Desktop) */}
              <div className="hidden md:block w-5/12 text-right pr-12">
                <div className="inline-flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  <FiCalendar /> {exp.duration}
                </div>
              </div>

              {/* Content Card (Right Side on Desktop) */}
              <div className="w-full md:w-5/12 md:pl-12">
                <div className="md:hidden inline-flex items-center gap-2 text-primary text-sm font-medium bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 mb-4">
                  <FiCalendar /> {exp.duration}
                </div>
                
                <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-lg object-cover bg-white" />
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <p className="text-secondary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-gray-400 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary mt-1"><FiBriefcase size={14} /></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
