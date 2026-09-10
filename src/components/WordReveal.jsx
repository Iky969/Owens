import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal teks kata-per-kata: setiap kata muncul dengan slide-up + blur.
 * IO-nya manual terhadap elemen pembungkus (clip), BUKAN anak ber-transform —
 * Chromium melaporkan intersectionRatio 0 untuk elemen yang di-offset
 * translateY(110%) oleh `initial`, sehingga whileInView tidak pernah fire
 * dan judul tetap transparan selamanya.
 */
export default function WordReveal({ text, className = '' }) {
  const words = text.split(' ');
  const wrapRefs = useRef([]);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView) return;
    const targets = wrapRefs.current.filter(Boolean);
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [inView]);

  const shown = inView || reduceMotion;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => (wrapRefs.current[i] = el)}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={false}
            animate={shown ? { y: '0%', opacity: 1, filter: 'blur(0px)' } : { y: '110%', opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.55, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {word + (i < words.length - 1 ? '\u00A0' : '')}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
