const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 mt-12 bg-dark/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Mandala Bhuvan. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  )
}

export default Footer
