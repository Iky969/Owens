import React, { useState } from 'react';
import Header from './components/Header.jsx';
import LiquidBackground from './components/LiquidBackground.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import GrainOverlay from './components/GrainOverlay.jsx';
import Hero from './components/Hero.jsx';
import TechMarquee from './components/TechMarquee.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactSection from './components/ContactSection.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import { defaultPalette } from './data/portfolio.js';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* 1. Dynamic Liquid Mesh & Blob Background (dengan parallax scroll) */}
      <LiquidBackground palette={defaultPalette} />

      {/* 2. Cursor spotlight yang mengikuti mouse */}
      <CursorGlow />

      {/* 3. Scroll progress bar tipis di atas */}
      <ScrollProgress />

      {/* 4. Grain film halus di atas seluruh halaman */}
      <GrainOverlay />

      {/* 4. Sticky Glass Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Hero palette={defaultPalette} />
        <TechMarquee />
        <About />
        <Projects onOpenProject={setSelectedProject} />
        <Experience />
        <Testimonials />
        <ContactSection />
      </main>

      {/* 5. Slide-over Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}