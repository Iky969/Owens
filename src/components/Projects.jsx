import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderOpen,
  ExternalLink,
  Github,
  Maximize2,
  Layout,
  LineChart,
  Activity,
  Cloud,
  Coins,
  SwatchBook,
} from 'lucide-react';
import { projects, projectCategories } from '../data/portfolio.js';
import useTilt from '../utils/useTilt.js';

const iconMap = {
  layout: Layout,
  chart: LineChart,
  activity: Activity,
  cloud: Cloud,
  coins: Coins,
  swatch: SwatchBook,
};

// Bento grid spans: some cards stretch across 2 columns for visual rhythm
const bentoSpans = ['lg:col-span-2', '', '', 'lg:col-span-2', '', ''];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectCard({ project, span, onOpenProject }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);
  const Icon = iconMap[project.icon] || Layout;

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onOpenProject(project)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative flex flex-col rounded-2xl glass-card cursor-pointer select-none overflow-hidden ${span}`}
    >
      {/* Gradient Thumbnail */}
      <div
        className="relative h-36 sm:h-40 w-full flex items-center justify-center overflow-hidden"
        style={{ background: project.gradient }}
      >
        <Icon
          className="w-12 h-12 drop-shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
          style={{ color: '#ffffff' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10 pointer-events-none" />

        {/* Hover overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-2.5 bg-black/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-button text-xs font-semibold text-white shadow-lg"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
        </div>

        {/* Category chip */}
        <span
          className="absolute top-3 left-3 glass-pill px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-lg"
          style={{ color: '#ffffff' }}
        >
          {project.category}
        </span>

        {/* Expand hint */}
        <span
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/30 opacity-0 group-hover:opacity-100 transition-all"
          style={{ color: 'rgba(255, 255, 255, 0.7)' }}
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Project Info */}
      <div className="flex flex-col flex-1 p-4 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-sm sm:text-base font-semibold tracking-tight text-white/95 group-hover:text-white">
            {project.title}
          </h4>
          <span className="text-[10px] text-white/40 font-mono flex-shrink-0">{project.year}</span>
        </div>
        <p className="text-xs text-white/55 leading-relaxed line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-white/8 border border-white/10 text-[10px] text-white/60">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ onOpenProject }) {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered =
    activeCategory === 'Semua' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <FolderOpen className="w-6 h-6 text-white/70" />
            <span>Featured Projects</span>
          </h3>
          <p className="text-sm text-white/50 mt-1">Pilih proyek untuk melihat detailnya.</p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-normal transition-all ${
                activeCategory === cat
                  ? 'bg-white/25 text-white border border-white/40 shadow-sm'
                  : 'glass-pill text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filtered.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            span={bentoSpans[idx % bentoSpans.length]}
            onOpenProject={onOpenProject}
          />
        ))}
      </motion.div>
    </section>
  );
}