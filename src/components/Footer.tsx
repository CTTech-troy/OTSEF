import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  MessageCircle,
  BriefcaseBusiness,
  Camera,
  Mail,
  ArrowRight } from
'lucide-react';
import { BrandLogo } from './BrandLogo';
export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 bg-white border-t border-slate-200 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              to="/"
              aria-label="OTSEF home"
              className="flex items-center mb-6 group">
              <BrandLogo
                size="footer"
                imageClassName="transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Empowering young people through education, mentorship, and
              structured pathways from the streets to purposeful futures.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink icon={<MessageCircle className="w-5 h-5" />} href="#" />
              <SocialLink icon={<BriefcaseBusiness className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Camera className="w-5 h-5" />} href="#" />
              <SocialLink
                icon={<Mail className="w-5 h-5" />}
                href="mailto:contact@otsef.org" />
              
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-mono text-xs text-slate-900 font-semibold mb-6 uppercase tracking-wider">
              Organization
            </h4>
            <ul className="space-y-4">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/programs">Programs</FooterLink>
              <FooterLink to="/impact">Impact</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs text-slate-900 font-semibold mb-6 uppercase tracking-wider">
              Engage
            </h4>
            <ul className="space-y-4">
              <FooterLink to="/partners">Partners</FooterLink>
              <FooterLink to="/get-involved">Volunteer</FooterLink>
              <FooterLink to="/get-involved">Donate</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs text-slate-900 font-semibold mb-6 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-slate-600 text-sm mb-4">
              Subscribe to our newsletter for updates on our impact and
              programs.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-background-soft border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary-strong focus:ring-1 focus:ring-primary-strong transition-all" />
              
              <button
                type="submit"
                className="bg-ink text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center">
                
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Off The Streets Educational
            Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link to="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
function FooterLink({
  to,
  children



}: {to: string;children: ReactNode;}) {
  return (
    <li>
      <Link
        to={to}
        className="text-slate-600 hover:text-primary-strong transition-colors inline-flex items-center gap-1 group text-sm font-medium">
        
        {children}
        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>);

}
function SocialLink({ icon, href }: {icon: ReactNode;href: string;}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-ink hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
      
      {icon}
    </a>);

}
