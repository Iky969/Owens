import React, { useEffect, useState } from 'react';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';
import { profile } from '../data/portfolio.js';
import useTheme from '../hooks/useTheme.js';

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Scroll-spy: sorot link nav sesuai section yang sedang terlihat
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full sticky top-0 z-30 px-4 sm:px-8 pt-4">
      <div className="max-w-7xl mx-auto rounded-3xl glass-panel px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl glass-button">
            <div className="absolute inset-0 rounded-2xl bg-white/10 blur-sm group-hover:bg-white/20 transition-all" />
            <Code2 className="w-6 h-6 text-white/90 group-hover:rotate-12 transition-transform duration-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight brand-gradient">
                {profile.initials}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded-full glass-pill text-white/70">
                Portfolio
              </span>
            </div>
            <p className="text-[11px] text-white/50 tracking-wide">{profile.role}</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl text-sm transition-all ${
                  isActive
                    ? 'text-white bg-glass-highlight shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indicator" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right controls: status pill + theme toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2 text-xs text-white/60 glass-pill px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{profile.availability}</span>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            data-testid="theme-toggle"
            className="p-2.5 rounded-xl glass-button text-white/80 hover:text-white"
            aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            title={theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-button text-white/80"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl glass-panel p-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}