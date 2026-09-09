/**
 * Atur --mx/--my pada elemen berdasarkan posisi kursor,
 * dipakai oleh class CSS `.spotlight-card` untuk sheen yang mengikuti mouse.
 */
export function handleSpotlightMove(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}