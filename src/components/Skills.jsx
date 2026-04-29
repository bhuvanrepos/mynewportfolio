import { motion } from 'framer-motion'
import { 
  SiPython, SiPytorch, SiTensorflow, SiOpenai, SiHuggingface,
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiNodedotjs, SiExpress, SiFastapi, SiMongodb, SiPostgresql,
  SiDocker, SiVercel, SiGit,
  SiFlutter, SiAndroidstudio, SiDart, SiFirebase
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'AI / ML',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, color: '#FFFFFF' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ]
  },
  {
    title: 'App Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-sm text-secondary uppercase tracking-widest font-semibold mb-2">My Technical Arsenal</h2>
        <h3 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-2xl"
          >
            <h4 className="text-xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">
              {category.title}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors group-hover:scale-110 duration-300">
                      <Icon size={28} style={{ color: skill.color }} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
