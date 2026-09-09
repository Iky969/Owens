import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reveal teks kata-per-kata: setiap kata muncul dengan slide-up + blur
 * saat elemen masuk viewport.
 */
export default function WordReveal({ text, className = '' }) {
  const words = text.split(' ');

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {word + (i < words.length - 1 ? '\u00A0' : '')}
          </motion.span>
        </span>
      ))}
    </span>
  );
}