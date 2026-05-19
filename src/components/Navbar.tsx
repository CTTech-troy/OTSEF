import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
const navLinks = [
{
  name: 'About',
  path: '/about'
},
{
  name: 'Programs',
  path: '/programs'
},
{
  name: 'Impact',
  path: '/impact'
},
{
  name: 'Partners',
  path: '/partners'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const closeMobileMenu = () => setMobileMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      
      <div
        className={`absolute inset-0 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`} />
      

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex items-center justify-between">
        <Link
          to="/"
          aria-label="OTSEF home"
          className="flex items-center gap-2 group">
          <BrandLogo
            size="header"
            imageClassName="transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2">
            
              {link.name}
              {location.pathname === link.path &&
            <motion.div
              layoutId="navbar-indicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-strong rounded-full"
              initial={false}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }} />

            }
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/get-involved"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            
            Get Involved
          </Link>
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-ink rounded-full overflow-hidden transition-all hover:scale-105 shadow-glow">
            
            <span className="relative">Partner With Us</span>
            <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}>
          
          {mobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-6 flex flex-col gap-4 md:hidden">
          
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            onClick={closeMobileMenu}
            className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary-strong' : 'text-slate-600'}`}>
            
                {link.name}
              </Link>
          )}
            <div className="h-px bg-slate-100 my-2" />
            <Link
            to="/get-involved"
            onClick={closeMobileMenu}
            className="text-lg font-medium text-slate-600">
            
              Get Involved
            </Link>
            <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 mt-2 text-sm font-medium text-white bg-ink rounded-full">
            
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
