// ============================================================
// Data Portofolio — ubah konten di file ini sesuai kebutuhanmu
// ============================================================

export const profile = {
  name: 'M.Rizky Santosa',
  initials: 'MR',
  role: 'Creative Developer & UI Engineer',
  roles: [
    'Creative Developer & UI Engineer',
    'Frontend Engineer',
    'UI/UX Enthusiast',
    'Problem Solver',
  ],
  tagline:
    'Saya merancang dan membangun pengalaman digital modern — dari interface yang elegan hingga produk web yang cepat, responsif, dan penuh detail.',
  location: 'Indonesia · Remote-ready',
  email: 'hello@example.com',
  avatarGradient: 'linear-gradient(135deg, #7c6cf0 0%, #4f9fd8 50%, #7ad7c8 100%)',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Iky969', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' },
];

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Next.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST API', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Design',
    items: ['Git & GitHub', 'Figma', 'Adobe XD', 'Vercel', 'Playwright', 'UI/UX Design'],
  },
];

export const projects = [
  {
    id: 'aura-portfolio',
    title: 'Aura Portfolio',
    category: 'Web',
    description:
      'Website portofolio interaktif dengan estetika liquid glass: mesh gradient dinamis, blob organik, bento grid, dan animasi halus berbasis React & Framer Motion.',
    longDescription:
      'Proyek ini adalah template portofolio modern yang dibangun dengan React, Vite, dan Tailwind CSS. Menampilkan sistem desain glassmorphism dengan background pastel mesh dinamis dan tiga blob cair yang bergerak perlahan, grid proyek ala bento, serta modal detail proyek. Desain responsif mobile-first tanpa mengorbankan presisi layout.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #7c6cf0 0%, #4f9fd8 100%)',
    icon: 'layout',
    liveUrl: '#',
    githubUrl: 'https://github.com/Iky969/Mweb',
    year: '2026',
  },
  {
    id: 'ecommerce-dashboard',
    title: 'Commerce Analytics Dashboard',
    category: 'Web',
    description:
      'Dashboard analitik penjualan real-time dengan grafik interaktif, filter multi-dimensi, dan mode gelap yang nyaman di mata.',
    longDescription:
      'Panel admin untuk memantau performa toko online: revenue, konversi, dan perilaku pelanggan divisualisasikan dalam grafik interaktif. Dibangun dengan React dan dioptimalkan untuk kecepatan rendering data dalam jumlah besar.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #4f9fd8 0%, #7ad7c8 100%)',
    icon: 'chart',
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    category: 'Mobile',
    description:
      'Aplikasi mobile pencatat latihan dan progres kebugaran dengan sinkronisasi cloud dan widget ringkas.',
    longDescription:
      'Aplikasi mobile-first yang membantu pengguna mencatat rutinitas olahraga, melacak progres mingguan, dan menerima rekomendasi latihan personal. Responsive dan nyaman digunakan satu tangan.',
    tech: ['React Native', 'Redux', 'Firebase'],
    gradient: 'linear-gradient(135deg, #f07c6c 0%, #f0b46c 100%)',
    icon: 'activity',
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
  {
    id: 'weather-visualizer',
    title: 'Weather Visualizer',
    category: 'Web',
    description:
      'Visualisasi cuaca global dengan peta interaktif, animasi transisi kondisi langit, dan prediksi 7 hari.',
    longDescription:
      'Aplikasi cuaca yang menampilkan data meteorologi dalam visualisasi menarik: peta interaktif, transisi animasi antar kondisi langit, dan grafik suhu 7 hari ke depan. Data diambil dari API cuaca publik.',
    tech: ['React', 'D3.js', 'OpenWeather API'],
    gradient: 'linear-gradient(135deg, #6cb4f0 0%, #7c6cf0 100%)',
    icon: 'cloud',
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
  {
    id: 'crypto-portfolio',
    title: 'Crypto Portfolio Tracker',
    category: 'Tools',
    description:
      'Pelacak portofolio kripto dengan harga real-time, alert threshold, dan laporan performa bulanan.',
    longDescription:
      'Alat untuk memantau aset kripto: harga real-time, notifikasi saat harga melewati batas tertentu, serta laporan performa yang bisa diekspor. Fokus pada kejelasan informasi dan kecepatan.',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #f0c86c 0%, #7ad77a 100%)',
    icon: 'coins',
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
  {
    id: 'design-system',
    title: 'Liquid Glass UI Kit',
    category: 'UI/UX',
    description:
      'Sistem desain komponen glassmorphism yang dapat dipakai ulang: tombol, kartu, pill, hingga slider.',
    longDescription:
      'UI Kit berisi komponen-komponen bergaya liquid glass yang konsisten dan siap pakai: tombol, kartu kaca, pill, form, dan slider. Dilengkapi dokumentasi varian serta pedoman aksesibilitas.',
    tech: ['React', 'Tailwind CSS', 'Storybook'],
    gradient: 'linear-gradient(135deg, #7ad7c8 0%, #7c6cf0 100%)',
    icon: 'swatch',
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
];

export const projectCategories = ['Semua', ...new Set(projects.map((p) => p.category))];

export const defaultPalette = {
  primary: 'rgb(88, 80, 141)',
  secondary: 'rgb(120, 105, 168)',
  tertiary: 'rgb(62, 85, 120)',
  glow: 'rgba(120, 105, 168, 0.45)',
  rawHex: '#58508d',
};