import React from 'react';
import { Code2 } from 'lucide-react';
import { skills } from '../data/portfolio.js';

// Gabungkan semua skills jadi satu daftar unik untuk marquee
const items = [...new Set(skills.flatMap((g) => g.items))];
// Duplikat konten agar loop marquee terlihat seamless
const row = [...items, ...items];

export default function TechMarquee() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-2 overflow-hidden" aria-hidden>
      <div className="relative">
        <div className="marquee-track flex items-center gap-3 w-max">
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-3">
              <span className="glass-pill px-4 py-2 text-xs text-white/70 whitespace-nowrap">{item}</span>
              <Code2 className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
            </span>
          ))}
        </div>

        {/* Edge fades agar masuk/keluar dari layar terlihat halus (tema-aware) */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[rgb(var(--bg-base))] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[rgb(var(--bg-base))] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}