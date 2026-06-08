import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-10 border-b border-slate-200">
          <div className="flex justify-center md:justify-start">
            <Link
              to="/"
              className="flex h-24 w-24 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105 md:h-28 md:w-28"
              aria-label="OTSEF home"
            >
              <img
                src="/logo.png"
                alt="OTSEF logo"
                width="500"
                height="500"
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-contain"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5 md:col-span-1">
            <nav
              className="flex flex-wrap items-center justify-center gap-6"
              aria-label="Footer"
            >
              <Link
                to="/"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Our Impact
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/donate"
                className="text-sm font-bold text-primary-strong hover:text-slate-900 transition-colors"
              >
                Donate
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <SocialLink
                icon={<FaTwitter className="w-4 h-4" />}
                href="#"
                label="Twitter"
              />
              <SocialLink
                icon={<FaLinkedinIn className="w-4 h-4" />}
                href="#"
                label="LinkedIn"
              />
              <SocialLink
                icon={<FaInstagram className="w-4 h-4" />}
                href="#"
                label="Instagram"
              />
              <SocialLink
                icon={<Mail className="w-4 h-4" />}
                href="mailto:contact@otsef.org"
                label="Email"
              />
            </div>
          </div>

          <div className="hidden md:block" />
        </div>

        <div className="pt-8 flex flex-col items-center text-center gap-2 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Off The Streets Educational
            Foundation. Lagos, Nigeria.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider">
            otsef.org
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  icon,
  href,
  label,
}: {
  icon: ReactNode
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
    >
      {icon}
    </a>
  )
}
