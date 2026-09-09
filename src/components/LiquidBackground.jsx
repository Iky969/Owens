import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import FloatingParticles from './FloatingParticles.jsx';

export default function LiquidBackground({ palette }) {
  // Parallax: blob bergerak dengan kecepatan berbeda saat halaman di-scroll
  const { scrollY } = useScroll();
  const y1 = useSpring(useTransform(scrollY, [0, 900], [0, -90]), {
    stiffness: 60,
    damping: 20,
  });
  const y2 = useSpring(useTransform(scrollY, [0, 900], [0, 70]), {
    stiffness: 60,
    damping: 20,
  });
  const y3 = useSpring(useTransform(scrollY, [0, 900], [0, -50]), {
    stiffness: 60,
    damping: 20,
  });
  const fade = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-1000"
      style={{ background: 'rgb(var(--bg-ambient))' }}
    >
      {/* Base subtle pastel mesh gradient (opacity dikontrol CSS var agar tema-aware) */}
      <motion.div className="absolute inset-0" style={{ opacity: fade }}>
        <div
          className="w-full h-full transition-all duration-1000 ease-out"
          style={{
            opacity: 'var(--mesh-opacity)',
            background: `
              radial-gradient(at 15% 20%, ${palette.primary} 0px, transparent 60%),
              radial-gradient(at 85% 25%, ${palette.secondary} 0px, transparent 55%),
              radial-gradient(at 50% 80%, ${palette.tertiary} 0px, transparent 65%),
              radial-gradient(at 10% 90%, ${palette.primary} 0px, transparent 50%)
            `,
          }}
        />
      </motion.div>

      {/* Blob 1 - Organic liquid shape 1 (parallax naik) */}
      <motion.div style={{ y: y1 }} className="absolute -top-24 -left-20 w-[520px] h-[520px]">
        <div
          className="w-full h-full rounded-[45%_55%_65%_35%/50%_60%_40%_50%] mix-blend-screen filter blur-[100px] animate-blob-1 transition-colors duration-1000"
          style={{
            backgroundColor: palette.primary,
            opacity: 'var(--blob-opacity-1)',
          }}
        />
      </motion.div>

      {/* Blob 2 - Organic liquid shape 2 (parallax turun) */}
      <motion.div style={{ y: y2 }} className="absolute top-1/3 -right-24 w-[600px] h-[600px]">
        <div
          className="w-full h-full rounded-[55%_45%_40%_60%/45%_50%_55%_50%] mix-blend-screen filter blur-[120px] animate-blob-2 transition-colors duration-1000"
          style={{
            backgroundColor: palette.secondary,
            opacity: 'var(--blob-opacity-2)',
          }}
        />
      </motion.div>

      {/* Blob 3 - Organic liquid shape 3 (parallax naik) */}
      <motion.div style={{ y: y3 }} className="absolute -bottom-32 left-1/4 w-[650px] h-[550px]">
        <div
          className="w-full h-full rounded-[60%_40%_50%_50%/50%_40%_60%_50%] mix-blend-screen filter blur-[110px] animate-blob-3 transition-colors duration-1000"
          style={{
            backgroundColor: palette.tertiary,
            opacity: 'var(--blob-opacity-3)',
          }}
        />
      </motion.div>

      {/* Floating glass particles — kedalaman ekstra */}
      <FloatingParticles />

      {/* Frosted Glass Depth Vignette & Noise Sheen (theme-aware) */}
      <div className="absolute inset-0 mesh-vignette pointer-events-none" />
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />
    </div>
  );
}