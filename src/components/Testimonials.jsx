import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/portfolio.js';
import { handleSpotlightMove } from '../utils/spotlight.js';
import WordReveal from './WordReveal.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 scroll-mt-24">
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
          <Quote className="w-6 h-6 text-white/70" />
          <WordReveal text="Testimoni Klien" />
        </h3>
        <p className="text-sm text-white/50 mt-1">Apa kata mereka tentang bekerja bersama saya.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={itemVariants}
            onMouseMove={handleSpotlightMove}
            className="glass-card rounded-2xl p-6 spotlight-card flex flex-col"
          >
            <Quote className="w-5 h-5 text-white/30 mb-3" />
            {t.rating ? (
              <div className="flex items-center gap-0.5 mb-3" aria-label={`Rating ${t.rating} dari 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-white/20 fill-white/20'
                    }`}
                  />
                ))}
              </div>
            ) : null}
            <p className="text-sm text-white/70 leading-relaxed mb-5 flex-1">“{t.quote}”</p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: t.gradient }}
              >
                {t.initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white/90 truncate">{t.name}</p>
                <p className="text-xs text-white/50 truncate">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}