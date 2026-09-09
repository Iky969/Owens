import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, ArrowRight, Download } from 'lucide-react';
import { profile, skills } from '../data/portfolio.js';
import { handleSpotlightMove } from '../utils/spotlight.js';
import WordReveal from './WordReveal.jsx';

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

const pillContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* About Me Card */}
        <motion.div
          variants={cardVariants}
          onMouseMove={handleSpotlightMove}
          className="glass-card rounded-3xl p-6 sm:p-8 relative spotlight-card"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              <WordReveal text="Tentang Saya" />
            </h3>
          </div>

          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-white/75 mb-4">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors group"
            >
              Lihat karya saya
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            )}
          </div>
        </motion.div>

        {/* Skills & Tech Stack */}
        <motion.div
          variants={cardVariants}
          onMouseMove={handleSpotlightMove}
          className="glass-card rounded-3xl p-6 sm:p-8 relative spotlight-card"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              <WordReveal text="Skills & Tech Stack" />
            </h3>
          </div>

          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-[11px] uppercase font-semibold tracking-widest text-white/45 mb-2">
                  {group.category}
                </p>
                <motion.div
                  variants={pillContainerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={pillVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-full glass-pill text-xs text-white/75 hover:text-white hover:bg-white/20 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}