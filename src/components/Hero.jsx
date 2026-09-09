import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Mail, Github, FolderOpen, MapPin } from 'lucide-react';
import { profile, socials } from '../data/portfolio.js';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { value: 4, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 25, suffix: '+', label: 'Proyek Selesai' },
  { value: 12, suffix: '+', label: 'Klien Puas' },
  { value: 100, suffix: '%', label: 'Komitmen' },
];

function useCountUp(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [target, start]);

  return value;
}

function StatItem({ stat, start }) {
  const value = useCountUp(stat.value, start);
  return (
    <div className="flex flex-col items-center px-4 py-3 min-w-[110px]">
      <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {Math.round(value)}
        <span className="text-white/60">{stat.suffix}</span>
      </span>
      <span className="text-[11px] text-white/50 mt-1">{stat.label}</span>
    </div>
  );
}

export default function Hero({ palette }) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const github = socials.find((s) => s.icon === 'github');

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-10 sm:py-14 px-4 text-center select-none scroll-mt-24"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        {/* Avatar with Liquid Glow Behind */}
        <motion.div variants={itemVariants} className="relative group mb-7">
          {/* Glowing blurred backdrop (matches palette) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.75, scale: 1.08 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute -inset-6 rounded-3xl filter blur-3xl transition-all duration-1000 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${palette?.glow || 'rgba(140, 120, 200, 0.5)'} 20%, ${palette?.primary || 'rgba(90, 80, 150, 0.3)'} 70%, transparent 95%)`,
            }}
          />

          {/* Main avatar card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl group-hover:scale-[1.03] transition-transform duration-500"
          >
            <div
              className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center"
              style={{ background: profile.avatarGradient }}
            >
              <span
                className="text-5xl sm:text-6xl font-bold drop-shadow-lg tracking-tight"
                style={{ color: 'rgba(255, 255, 255, 0.95)' }}
              >
                {profile.initials}
              </span>

              {/* Subtle glass sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20 pointer-events-none" />

              {/* Specular ring */}
              <div
                className="absolute inset-0 rounded-2xl border pointer-events-none"
                style={{ borderColor: 'rgba(255, 255, 255, 0.25)' }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Name, Role & Tagline */}
        <motion.div variants={itemVariants} className="max-w-2xl flex flex-col items-center">
          <span className="text-[11px] uppercase font-semibold tracking-widest text-white/50 glass-pill px-3 py-1 mb-3">
            {profile.role}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 drop-shadow-sm">
            <span className="text-white">Halo, saya </span>
            <span className="text-shine">{profile.name}</span>
          </h1>

          <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed mb-2">
            {profile.tagline}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-white/45 mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>{profile.location}</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-slate-900 text-sm font-medium shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-button text-sm font-medium text-white/90 hover:text-white"
          >
            <FolderOpen className="w-4 h-4" />
            Lihat Proyek
          </a>
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-button text-sm font-medium text-white/90 hover:text-white"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </motion.div>

        {/* Stats with count-up */}
        <motion.div
          ref={statsRef}
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 mt-9 rounded-2xl glass-card px-2 py-3"
        >
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <StatItem stat={stat} start={statsInView} />
              {i < stats.length - 1 && <span className="w-px h-8 bg-white/10 hidden sm:block" />}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}