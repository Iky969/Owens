import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUp, Sparkles } from 'lucide-react';
import { profile, socials } from '../data/portfolio.js';
import { handleSpotlightMove } from '../utils/spotlight.js';
import useMagnetic from '../utils/useMagnetic.js';
import WordReveal from './WordReveal.jsx';

function MagneticLink({ href, target, rel, className, children }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.28);
  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 pb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleSpotlightMove}
        className="rounded-3xl glass-panel p-8 sm:p-12 text-center relative overflow-hidden spotlight-card aurora-border"
      >
        {/* Subtle top sheen */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-white/60" />
          <span className="text-[11px] uppercase font-semibold tracking-widest text-white/50">
            Let's Work Together
          </span>
          <Sparkles className="w-4 h-4 text-white/60" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          <WordReveal text="Punya proyek menarik? Mari berdiskusi." />
        </h3>
        <p className="text-sm text-white/60 max-w-md mx-auto mb-7 leading-relaxed">
          Saya terbuka untuk kolaborasi, proyek freelance, maupun posisi full-time.
          Kirim pesan — saya akan segera membalas.
        </p>

        {/* Contact CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <MagneticLink
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 text-sm font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
        >
          <Send className="w-4 h-4" />
          {profile.email}
        </MagneticLink>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon] || Github;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="p-3 rounded-2xl glass-button text-white/70 hover:text-white"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {profile.name} — Dibangun dengan React, Tailwind & Liquid Glass.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 glass-pill px-3 py-1.5 text-white/60 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Kembali ke atas
          </a>
        </div>
      </motion.div>
    </section>
  );
}