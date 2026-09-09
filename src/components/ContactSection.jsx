import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUp, Sparkles, MessageCircle, User, PenLine, CheckCircle2, AlertCircle } from 'lucide-react';
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

// Label footer → id section yang benar (bukan hasil lowercase label).
const FOOTER_NAV_TARGETS = {
  Beranda: 'home',
  Tentang: 'about',
  Proyek: 'projects',
  Pengalaman: 'experience',
  Testimoni: 'testimonials',
  Kontak: 'contact',
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // Status submit: 'idle' | 'sent' | 'error' — pesan inline di bawah tombol.
  const [status, setStatus] = useState('idle');

  // Form statis tanpa backend: kirim lewat mailto dengan subjek & isi pesan.
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const subject = encodeURIComponent(`Pesan dari ${form.name || 'pengunjung situs'}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

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
        <p className="text-sm text-white/60 max-w-md mx-auto mb-6 leading-relaxed">
          Saya terbuka untuk kolaborasi, proyek freelance, maupun posisi full-time.
          Kirim pesan — saya akan segera membalas.
        </p>

        {/* Status ketersediaan dengan indikator titik hijau */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-white/70">{profile.availability}</span>
        </div>

        {/* Contact form — nama, email, pesan (label kecil di atas field agar aksesibel) */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-white/60 mb-1.5 ml-1">
                Nama
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => { set('name')(e); setStatus('idle'); }}
                  placeholder="Nama Anda"
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-button text-[15px] text-white placeholder-white/40 outline-none focus:border-white/50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-white/60 mb-1.5 ml-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => { set('email')(e); setStatus('idle'); }}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-button text-[15px] text-white placeholder-white/40 outline-none focus:border-white/50"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="contact-message" className="block text-xs font-medium text-white/60 mb-1.5 ml-1">
              Pesan
            </label>
            <div className="relative">
              <PenLine className="absolute left-3.5 top-4 w-4 h-4 text-white/40 pointer-events-none" />
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => { set('message')(e); setStatus('idle'); }}
                placeholder="Ceritakan proyek Anda..."
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-button text-[15px] text-white placeholder-white/40 outline-none focus:border-white/50 resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-900 text-sm font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Send className="w-4 h-4" />
            Kirim Pesan
          </button>

          {/* State sukses/error setelah submit */}
          {status === 'sent' && (
            <p role="status" className="mt-3 flex items-center justify-center gap-2 text-[15px] text-emerald-300">
              <CheckCircle2 className="w-4 h-4" />
              Aplikasi email Anda terbuka — terima kasih sudah menghubungi!
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="mt-3 flex items-center justify-center gap-2 text-[15px] text-rose-300">
              <AlertCircle className="w-4 h-4" />
              Gagal membuka aplikasi email. Kirim langsung ke{' '}
              <a href={`mailto:${profile.email}`} className="underline hover:text-white">{profile.email}</a>.
            </p>
          )}
        </form>

        {/* Kontak langsung — email & WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <MagneticLink
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-button text-sm font-medium text-white/90 hover:text-white"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
          </MagneticLink>
          {profile.whatsapp && (
            <MagneticLink
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-button text-sm font-medium text-white/90 hover:text-white"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </MagneticLink>
          )}
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

        <div className="mt-8 pt-6 border-t border-white/10">
          {/* Navigasi cepat + ikon sosial agar footer tidak terasa "putus" */}
          <nav aria-label="Navigasi footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-4">
            {['Beranda', 'Tentang', 'Proyek', 'Pengalaman', 'Testimoni', 'Kontak'].map((label) => (
              <a
                key={label}
                href={`#${FOOTER_NAV_TARGETS[label]}`}
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-3 mb-5">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon] || Github;
              return (
                <a
                  key={`footer-${s.label}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="p-2 rounded-xl glass-button text-white/60 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
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
        </div>
      </motion.div>
    </section>
  );
}