import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const [visible, setVisible] = useState(false);

  const sx = useSpring(x, { stiffness: 120, damping: 25, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 25, mass: 0.6 });

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 mix-blend-screen hidden-on-touch"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,108,240,0.14) 0%, rgba(79,159,216,0.08) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}