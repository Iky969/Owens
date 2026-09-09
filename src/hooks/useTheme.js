import { useState } from 'react';

/**
 * Hook tema: membaca data-theme dari <html>, toggle & simpan ke localStorage.
 * Nilai awal sudah di-set oleh script inline di index.html (anti-FOUC).
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || 'dark'
      : 'dark'
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('aura-theme', next);
    } catch (e) {
      /* localStorage tidak tersedia — abaikan */
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
}