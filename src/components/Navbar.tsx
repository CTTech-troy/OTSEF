import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Our Impact',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'}`}
      />

      <div className="site-container relative z-10 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex h-14 w-14 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
          aria-label="OTSEF home"
        >
          <img
            src="/logo.png"
            alt="OTSEF logo"
            width="500"
            height="500"
            loading="eager"
            decoding="async"
            className="block h-full w-full object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium px-4 py-2 rounded-full transition-colors ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 32,
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/donate"
          className={`hidden md:inline-flex group items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-full transition-all hover:scale-105 shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-strong focus:ring-offset-2 ${
            location.pathname === '/donate'
              ? 'bg-primary-strong'
              : 'bg-ink hover:bg-primary-strong'
          }`}
        >
          Donate Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-6 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium px-4 py-3 rounded-xl ${location.pathname === link.path ? 'bg-slate-100 text-slate-900' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 mt-4 text-sm font-bold text-white bg-ink rounded-full shadow-glow"
            >
              Donate Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
