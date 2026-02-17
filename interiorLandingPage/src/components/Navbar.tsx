import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'HOME' },
  { to: '/gallery', label: 'GALLERY' },
  { to: '/offers', label: 'OFFERS' },
  { to: '/company', label: 'COMPANY' },
  { to: '/services', label: 'SERVICES' },
  { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [visible, setVisible] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => setIsMenuOpen(false), [location.pathname])

  const isHomeAtTop = location.pathname === '/' && !isScrolled
  // Make navbar background solid when not at top
  const bgClass = isHomeAtTop ? 'bg-transparent' : 'bg-white shadow-md'

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-[40px] left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className={`font-bold text-xl md:text-2xl ${isHomeAtTop ? 'text-white' : 'text-gray-900'}`}>
              APRAITECH
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium transition-colors hover:text-amber-600 ${
                  isHomeAtTop ? 'text-white' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-amber-600 text-white text-base font-semibold rounded-lg hover:bg-amber-700 transition-colors shadow-md"
            >
              Free Estimate
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded ${isHomeAtTop ? 'text-white' : 'text-gray-900'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block py-2 text-gray-700 font-medium hover:text-amber-600 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block py-2 text-amber-600 font-semibold text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}