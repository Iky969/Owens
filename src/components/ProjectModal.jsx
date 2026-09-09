import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FolderOpen, Calendar, Wrench } from 'lucide-react';
import { Layout, LineChart, Activity, Cloud, Coins, SwatchBook } from 'lucide-react';

const iconMap = {
  layout: Layout,
  chart: LineChart,
  activity: Activity,
  cloud: Cloud,
  coins: Coins,
  swatch: SwatchBook,
};

export default function ProjectModal({ project, onClose }) {
  const Icon = project ? iconMap[project.icon] || Layout : Layout;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[28rem] p-3 sm:p-4"
          >
            <div className="w-full h-full flex flex-col rounded-3xl glass-panel overflow-hidden shadow-2xl border border-white/25 aurora-border">
              {/* Gradient header */}
              <div
                className="relative h-40 sm:h-48 flex-shrink-0 flex items-center justify-center overflow-hidden"
                style={{ background: project.gradient }}
              >
                <Icon className="w-16 h-16 drop-shadow-xl" style={{ color: '#ffffff' }} />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgb(var(--bg-base) / 0.85), transparent 60%)' }}
                />
                <span
                  className="absolute top-4 left-4 glass-pill px-3 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-lg"
                  style={{ color: '#ffffff' }}
                >
                  {project.category}
                </span>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 hover:bg-black/50 transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-white/45 font-mono flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed mb-5">{project.longDescription}</p>

                {/* Tech stack */}
                <div className="mb-5">
                  <p className="flex items-center gap-1.5 text-[11px] uppercase font-semibold tracking-widest text-white/45 mb-2.5">
                    <Wrench className="w-3.5 h-3.5" />
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-full glass-pill text-xs text-white/75">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white text-slate-900 text-sm font-semibold shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl glass-button text-sm font-semibold text-white"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}