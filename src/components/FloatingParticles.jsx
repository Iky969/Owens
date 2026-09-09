import React from 'react';

// Partikel kaca melayang — posisi & timing di-fix agar konsisten tiap render
const PARTICLES = [
  { size: 10, left: '8%', top: '18%', dx: 50, dy: -70, delay: 0, dur: 19, opacity: 0.5 },
  { size: 16, left: '85%', top: '12%', dx: -40, dy: -60, delay: 2.5, dur: 22, opacity: 0.4 },
  { size: 7, left: '18%', top: '70%', dx: 60, dy: 40, delay: 1.2, dur: 17, opacity: 0.45 },
  { size: 12, left: '72%', top: '62%', dx: -50, dy: 55, delay: 4, dur: 21, opacity: 0.35 },
  { size: 9, left: '42%', top: '30%', dx: 35, dy: -45, delay: 3.1, dur: 18, opacity: 0.5 },
  { size: 14, left: '30%', top: '85%', dx: -55, dy: -35, delay: 5.4, dur: 24, opacity: 0.3 },
  { size: 6, left: '60%', top: '8%', dx: 45, dy: 60, delay: 0.8, dur: 16, opacity: 0.4 },
  { size: 11, left: '5%', top: '45%', dx: 70, dy: 30, delay: 6.2, dur: 20, opacity: 0.35 },
  { size: 8, left: '93%', top: '40%', dx: -40, dy: -50, delay: 2, dur: 18, opacity: 0.45 },
  { size: 13, left: '50%', top: '92%', dx: 30, dy: -60, delay: 7.5, dur: 23, opacity: 0.3 },
  { size: 5, left: '78%', top: '82%', dx: -30, dy: 45, delay: 3.8, dur: 15, opacity: 0.4 },
  { size: 10, left: '12%', top: '92%', dx: 40, dy: -40, delay: 8.9, dur: 19, opacity: 0.3 },
];

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
            '--delay': `${p.delay}s`,
            '--dur': `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}