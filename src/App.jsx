import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AchievementDetail from './pages/AchievementDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-gray-200 font-sans selection:bg-primary/30 selection:text-white">
        {/* Background Gradients */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="bg-gradient-glow w-[800px] h-[800px] bg-primary/20 -top-[400px] -left-[400px]"></div>
          <div className="bg-gradient-glow w-[600px] h-[600px] bg-secondary/20 top-1/2 -right-[300px]"></div>
          <div className="bg-gradient-glow w-[800px] h-[800px] bg-accent/20 -bottom-[400px] left-1/4"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievement/:id" element={<AchievementDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
