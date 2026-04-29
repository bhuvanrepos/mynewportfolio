import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiCalendar, FiMapPin, FiX, FiAward, FiGithub } from 'react-icons/fi'

// Mock database for the achievement details
const achievementData = {
  'ai-india-impact': {
    title: 'AI India Impact Buildathon - Finalist',
    tag: 'Top 2% National Finalist',
    date: 'Feb 2026',
    location: 'GUVI x HCL',
    heroImage: '/bm.png',
    about: 'Selected among the top 2% out of 40,000+ participants nationwide for building AI-based solutions solving real-world problems. Our solution demonstrated innovation, technical excellence, and a strong commitment to creating meaningful impact using AI.',
    solution: 'An AI-powered platform that helps in real-time problem detection, prediction, and intelligent recommendations using LLM and ML models. We integrated multiple data sources to provide actionable insights.',
    repos: [
      { name: 'Version 1', url: 'https://github.com/bhuvanm1705/hcl-guvi-aihoneypotver-1' },
      { name: 'Version 2', url: 'https://github.com/venky2911/honeypotnew1' },
      { name: 'Version 3', url: 'https://github.com/bhuvanm1705/thrustnet' }
    ],
    videoUrl: 'https://www.loom.com/embed/b3661649261b4e058c0f5a6fab89acb6',
    gallery: [
      '/aig1.jpeg',
      '/aig2.jpeg',
      '/aig3.jpeg',
      '/aig4.jpeg'
    ]
  },
  'vercel-hackathon': {
    title: 'Foru.ms x v0 by Vercel Hackathon Winner',
    tag: 'Winner',
    date: 'Dec 24, 2025 – Jan 1, 2026',
    location: 'Vercel x Devpost',
    heroImage: '/verbanner.png',
    about: "Emerged as a top winner out of 163 highly competitive participants. This achievement reflects our team's exceptional ability to innovate, adapt, and build high-quality solutions under pressure using modern web technologies.",
    solution: "A Next.js & Firebase community platform that redefines the forum. We use 'Creative Misuse' to transform standard threads into Job Boards, Collaborative Stories, and Product Roadmaps—all in one app.",
    videoUrl: 'https://player.vimeo.com/video/1150677414',
    gallery: [
      '/v1.jpg',
      '/v2.jpg',
      '/v3.jpg',
      '/v4.jpg'
    ],
    galleryTitle: 'Project Shots'
  },
  'guinness-world-record': {
    title: 'AGENTATHON - Biggest Hackathon InCity',
    tag: 'Record Holder',
    date: 'Dec 20, 2025 – Dec 21, 2025',
    location: 'Guinness World Records',
    heroImage: '/agbanner.jpeg',
    about: 'Participated in the AGENTATHON, contributing to a Guinness World Record for participation. Competing alongside more than 3,500 participants across 600 teams, the intensive event focused exclusively on conceptualizing, designing, and building advanced AI Agents.',
    solution: 'A comprehensive career guidance platform featuring course tracking, AI chat, and gamified learning.',
    videoUrl: 'https://player.vimeo.com/video/1150677414',
    gallery: [
      '/ag1.jpeg',
      '/ag2.jpeg',
      '/ag33.jpeg',
      '/ag4.jpeg'
    ],
    galleryTitle: 'Event Gallery'
  },
  'google-arcade': {
    title: 'GOOGLE Arcade 2025 - Legend',
    tag: 'Legend Tier',
    date: 'July 7 – Dec 28, 2025',
    location: 'Google Cloud',
    heroImage: '/arcadebanner.png',
    about: 'Solved complex Challenge Labs—scenarios without step-by-step instructions—that simulate real-world cloud engineering tasks. Mastered specific enterprise tools such as BigQuery for data analytics, Kubernetes for container orchestration, and Generative AI with Vertex AI.',
    solutionTitle: 'My Learning',
    solution: 'Acquired and practically applied advanced Google Cloud Skills including VPC, Kubernetes, Big Query, and other core cloud infrastructure components.',
    certificationUrl: 'https://www.credly.com/users/bhuvan-mandala.e59f75c4/badges',
    gallery: [
      '/ar1.jpeg'
    ],
    galleryTitle: 'Event Gallery',
    galleryCaption: 'Swags From Google for Reaching The Legend'
  },
  'devops-mastersprint': {
    title: 'Devops MasterSprint - Student Resource Person',
    tag: 'Resource Person',
    date: '1st Sep 2025 (Ph 1) & 31st Oct - 1st Nov 2025 (Ph 2)',
    location: 'DevOps MasterSprint',
    heroImage: '/dmsbanner.png',
    about: 'Handled Two Phases. Each Phase was 2 days long. In phase 1, explained Scrum and Kanban methodologies with real-world case studies. In phase 2, covered Git and GitHub commands in detail, trained students practically, and guided them in building their own projects.',
    solutionTitle: 'My Learning',
    solution: 'Significantly enhanced leadership and event management capabilities by organizing and guiding teams through structured hackathon phases. Developed strong communication and mentoring soft skills while training students to practically build their own projects.',
    videoUrl: '/dmsv.mp4',
    videoTitle: 'Clip of Explanation',
    gallery: [
      '/d1.jpeg',
      '/d2.jpeg',
      '/d3.jpeg',
      '/d7.jpeg',
      '/d4.jpeg',
      '/d5.jpeg',
      '/d6.jpeg'
    ],
    galleryTitle: 'Event Gallery'
  }
}

const AchievementDetail = () => {
  const { id } = useParams()
  const data = achievementData[id] || achievementData['ai-india-impact'] // Default fallback
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <div className="min-h-screen pb-24">
      {/* Navbar Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 py-4 px-6 sm:px-12">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <FiArrowLeft className="mr-2" /> Back to Portfolio
        </Link>
      </nav>

      {/* Hero Image Full Width */}
      <div className="w-full h-[50vh] relative mt-14 bg-[#050505]">
        <img 
          src={data.heroImage} 
          alt={data.title} 
          className={`w-full h-full ${
            data.heroImage.includes('logo') 
              ? 'bg-white object-contain p-8' 
              : data.heroImage.includes('banner') 
                ? 'object-contain' 
                : 'object-cover'
          }`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent border border-accent/50 rounded-full text-sm font-semibold mb-4">
              {data.tag}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{data.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm md:text-base font-medium">
              <span className="flex items-center gap-2"><FiCalendar /> {data.date}</span>
              <span className="flex items-center gap-2"><FiMapPin /> {data.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 pt-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Text */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-2xl font-bold mb-4 text-white">About the Achievement</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">{data.about}</p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">{data.solutionTitle || 'Our Solution'}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{data.solution}</p>
            
            {data.repos && (
              <div className="flex flex-wrap gap-3 mt-4">
                {data.repos.map((repo, idx) => (
                  <a 
                    key={idx}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm font-medium text-white transition-all group"
                  >
                    <FiGithub size={16} className="text-gray-400 group-hover:text-white transition-colors" /> {repo.name}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Video / Certification */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            {data.videoUrl ? (
              <>
                <h3 className="text-2xl font-bold mb-4 text-white">{data.videoTitle || 'Demo Video'}</h3>
                <div className="glass-panel p-2 rounded-2xl relative aspect-video group cursor-pointer overflow-hidden border border-white/10 bg-black">
                  {data.videoUrl.endsWith('.mp4') ? (
                    <video 
                      src={data.videoUrl} 
                      controls 
                      className="w-full h-full rounded-xl relative z-10"
                    />
                  ) : (
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={data.videoUrl} 
                      title="Video player" 
                      frameBorder="0" 
                      webkitallowfullscreen="true" 
                      mozallowfullscreen="true" 
                      allowFullScreen
                      className="rounded-xl relative z-10"
                    ></iframe>
                  )}
                </div>
              </>
            ) : data.certificationUrl ? (
              <>
                <h3 className="text-2xl font-bold mb-4 text-white">Certifications</h3>
                <a 
                  href={data.certificationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/5 transition-colors border border-white/10 h-64"
                >
                  <FiAward className="text-5xl text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-xl font-bold text-white mb-2">View Verified Badges</span>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">credly.com/users/bhuvan-mandala</span>
                </a>
              </>
            ) : null}
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">{data.galleryTitle || 'Event Gallery'}</h3>
          <div className={`grid ${data.gallery.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : data.gallery.length === 7 ? 'grid-cols-3' : 'grid-cols-2'} gap-4 sm:gap-6`}>
            {data.gallery.map((img, idx) => {
              const isD7 = img.includes('d7');
              const aspectClass = data.gallery.length === 1 ? 'aspect-[4/3]' : data.gallery.length === 7 ? (isD7 ? 'aspect-video' : 'aspect-[3/4]') : 'aspect-video';
              
              return (
                <div 
                  key={idx} 
                  className={`relative ${aspectClass} ${isD7 ? 'col-span-full' : ''} rounded-xl overflow-hidden cursor-pointer group glass-card border border-white/10`}
                  onClick={() => setSelectedImg(img)}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-[#0a0a0a]"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
              );
            })}
          </div>
          {data.galleryCaption && (
            <p className="text-center mt-6 text-2xl text-cyan-300" style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
              {data.galleryCaption}
            </p>
          )}
        </motion.div>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <FiX size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AchievementDetail
