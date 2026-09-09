import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Efek magnetik: elemen tertarik halus ke arah kursor (dengan spring),
 * kembali ke posisi semula saat kursor keluar.
 */
export default function useMagnetic(strength = 0.28) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: sx, y: sy, onMouseMove, onMouseLeave };
}