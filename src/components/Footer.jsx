import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#060911] text-gray-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                DK
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-400 text-xs">
              Software Developer | AI/ML Engineer · B.Tech CSE (2023–Present)
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>

        {/* Bottom Bar: Copyright & Verified Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-gray-500">
          <div>
            © {currentYear} {personalInfo.name}. All verified portfolio projects and code rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-gray-300 transition-colors"
            >
              {personalInfo.email}
            </a>
            <span>·</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
