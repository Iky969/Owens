# 💧 Aura — Portofolio Modern & Interaktif

**Aura** adalah template website portofolio modern dengan estetika **Liquid Glass** (glassmorphism): mesh gradient pastel dinamis, tiga blob cair organik yang bergerak perlahan, grid proyek ala **Bento**, modal detail proyek, dan animasi halus berbasis Framer Motion.

Dibangun dengan React, Vite, dan Tailwind CSS — responsif mobile-first dan mudah dikustomisasi melalui satu file data terpusat.

---

## 📸 Preview

### Mode Gelap — Hero
![Dark Hero](./screenshots/portfolio_dark_hero.png)

### Mode Gelap — Featured Projects
![Dark Projects](./screenshots/portfolio_dark_projects.png)

### Mode Terang — Hero
![Light Hero](./screenshots/portfolio_light_hero.png)

---

## ✨ Fitur

- **Dark/Light Toggle**:
  - Tombol toggle di header untuk berpindah mode terang/gelap, tersimpan di `localStorage`.
  - Mengikuti preferensi sistem `prefers-color-scheme` saat pertama kali dibuka.
  - Tanpa flash (FOUC) — tema di-set sebelum halaman dirender.
  - Estetika liquid glass tetap terjaga di kedua mode.

- **Liquid Glass Aesthetic**:
  - Panel kaca frosted (`backdrop-blur`, `bg-white/10`, `border-white/20`, specular glow lembut).
  - Background ambient mesh gradient dengan tiga blob organik yang bergerak lambat.
  - Tipografi Inter dengan animasi halus — tanpa neon, grid cyberpunk, atau font monospace.

- **Hero Section**:
  - Avatar dengan glow radial dan sheen kaca, nama, role, tagline, serta CTA (Contact Me / Lihat Proyek / GitHub).

- **About Me & Skills**:
  - Kartu biografi singkat + Skills & Tech Stack dalam pill-pill kaca yang dikelompokkan per kategori.

- **Featured Projects (Bento Grid)**:
  - Grid proyek ala bento dengan filter kategori interaktif.
  - Hover menampilkan aksi **Live Demo** dan **GitHub**.
  - Klik kartu membuka **slide-over modal detail** (deskripsi, tech stack, tautan).

- **Contact Section**:
  - Panel "Let's Work Together" dengan tombol email, ikon sosial (GitHub, LinkedIn, Email), dan navigasi kembali ke atas.

- **Responsive & Mobile-First**:
  - Layout presisi di layar HP hingga desktop; navigasi berubah menjadi menu hamburger di layar kecil.

- **Screenshot Preview**:
  - Jalankan `npm run screenshot` (butuh dev server aktif di `localhost:5173`) untuk mengambil ulang gambar preview di `screenshots/` menggunakan Playwright.

- **Animasi Lanjutan**:
  - **Scroll progress bar** tipis bergaya glass di bagian atas halaman.
  - **Cursor spotlight** — glow pastel yang mengikuti mouse (otomatis tersembunyi di perangkat sentuh).
  - **Parallax background** — blob liquid bergerak dengan kecepatan berbeda saat scroll.
  - **3D tilt** pada kartu proyek yang mengikuti posisi mouse.
  - **Count-up stats** di hero dengan animasi angka.
  - **Tech stack marquee** — strip teknologi berjalan tak berujung (pause saat hover).
  - **Scroll-spy nav** — link navigasi tersorot mengikuti section yang sedang dilihat.
  - **Entrance & reveal stagger** — hero, kartu, dan skill pills muncul berurutan.
  - **Rotating role text** — role di hero berganti kata setiap 2,8 detik dengan slide + blur.
  - **Aurora border** — cincin conic-gradient berputar mengelilingi avatar, panel kontak, dan modal.
  - **Spotlight sheen** — kilau radial yang mengikuti kursor di dalam kartu proyek, About, dan panel kontak.
  - **Magnetic buttons** — tombol CTA tertarik halus ke arah kursor (spring).
  - **Floating glass particles** — partikel kaca melayang pelan di latar belakang.
  - **Film grain** — tekstur noise halus bergerak di atas halaman untuk kesan premium.
  - **Word-reveal headings** — judul section muncul kata-per-kata dengan blur + slide-up.
  - Menghormati preferensi `prefers-reduced-motion` pengguna.

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Glassmorphism & Custom Keyframe Blobs) |
| **Motion & Animasi** | [Framer Motion](https://www.framer.com/motion/) |
| **Ikon** | [Lucide React](https://lucide.dev/) |

---

## 📁 Struktur Proyek

```
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigasi kaca sticky (desktop & hamburger mobile)
│   │   ├── LiquidBackground.jsx   # Pastel mesh gradient & 3 liquid blob
│   │   ├── Hero.jsx               # Hero: avatar, nama, role, CTA
│   │   ├── About.jsx              # Tentang Saya + Skills & Tech Stack
│   │   ├── Projects.jsx           # Bento grid showcase + filter kategori
│   │   ├── ProjectModal.jsx       # Slide-over detail proyek
│   │   └── ContactSection.jsx     # Kontak, sosial, dan footer
│   ├── data/
│   │   └── portfolio.js           # ⭐ Semua konten: profil, skills, proyek, sosial
│   ├── App.jsx                    # Root komponen
│   ├── index.css                  # Tailwind & glass utility classes
│   └── main.jsx                   # React entry point
├── index.html                     # Template HTML dengan font Inter
├── package.json
├── tailwind.config.js             # Tailwind config & keyframes blob
└── vite.config.js                 # Vite config
```

---

## ✏️ Cara Mengkustomisasi

Semua konten (nama, role, tagline, email, skills, proyek, sosial) berada di satu file:

```
src/data/portfolio.js
```

Cukup ubah data di file tersebut — tampilan dan layout otomatis menyesuaikan.

---

## 🚀 Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Build produksi:

```bash
npm run build
npm run preview
```

---

## 📄 Lisensi

MIT.