import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { experience, education } from '../data/portfolio.js';
import { handleSpotlightMove } from '../utils/spotlight.js';
import WordReveal from './WordReveal.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  const [tab, setTab] = useState('kerja');
  const items = tab === 'kerja' ? experience : education;

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Briefcase className="w-6 h-6 text-white/70" />
          <WordReveal text="Pengalaman & Pendidikan" />
        </h2>
        <p className="text-sm text-muted mt-1">Perjalanan karier dan pendidikan yang membentuk cara saya bekerja.</p>

        {/* Tab toggle */}
        <div className="flex items-center gap-1 mt-4 glass-pill p-1 w-max">
          <button
            type="button"
            onClick={() => setTab('kerja')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              tab === 'kerja'
                ? 'bg-slate-900 text-white shadow-md ring-1 ring-white/20'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Pengalaman
          </button>
          <button
            type="button"
            onClick={() => setTab('pendidikan')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              tab === 'pendidikan'
                ? 'bg-slate-900 text-white shadow-md ring-1 ring-white/20'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Pendidikan
          </button>
        </div>
      </div>

      {/* Timeline — garis gradient ungu–biru menyambung dengan warna hero */}
      <motion.div
        key={tab}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative space-y-4"
      >
        {items.map((item) => {
          const title = item.role || item.degree;
          const org = item.company || item.school;
          return (
            <motion.div
              key={`${org}-${item.period}`}
              variants={itemVariants}
              onMouseMove={handleSpotlightMove}
            >
              <div className="glass-card rounded-2xl p-5 sm:p-6 spotlight-card overflow-hidden before:absolute before:top-4 before:bottom-4 before:left-0 before:w-[3px] before:rounded-r before:bg-gradient-to-b before:from-[#7c6cf0] before:via-[#4f9fd8] before:to-[#7ad7c8]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-base font-semibold text-white/95">{title}</h4>
                  <span className="flex items-center gap-1.5 text-xs text-muted-soft font-mono flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>
                {/* Baris organisasi + slot logo perusahaan kecil (fallback: inisial) */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span
                    className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7c6cf0]/40 to-[#4f9fd8]/40 border border-white/15 flex items-center justify-center text-[10px] font-bold text-white/80 flex-shrink-0 overflow-hidden"
                    aria-hidden="true"
                  >
                    {item.logo ? (
                      <img src={item.logo} alt="" className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      org.charAt(0)
                    )}
                  </span>
                  <p className="text-base font-medium text-white/70">{org}</p>
                </div>
                {/* Poin singkat (highlights), fallback ke paragraf description lama */}
                {item.highlights ? (
                  <ul className="space-y-1.5 mb-3">
                    {item.highlights.map((h) => (
                      <li key={h} className="text-base text-muted-strong leading-relaxed flex gap-2">
                        <span className="mt-[0.55em] w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base text-muted-strong leading-relaxed mb-3">{item.description}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/8 border border-white/10 text-[13px] text-muted-strong"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}