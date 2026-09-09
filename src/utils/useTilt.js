import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Hook tilt 3D untuk kartu: kartu miring mengikuti posisi mouse.
 * Menggunakan spring agar pergerakan terasa halus & natural.
 */
export default function useTilt(max = 6) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 22,
  });

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}