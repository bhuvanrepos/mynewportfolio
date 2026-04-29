import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Certifications from '../components/Certifications'
import Experience from '../components/Experience'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 space-y-32 pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
