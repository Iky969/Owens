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
  // Nomor WhatsApp dalam format internasional tanpa '+' (mis. '628123456789').
  // Kosongkan ('') untuk menyembunyikan tombol WhatsApp.
  whatsapp: '',
  // Status ketersediaan — tampil di header & section kontak dengan titik hijau.
  availability: 'Open to work',
  avatarGradient: 'linear-gradient(135deg, #7c6cf0 0%, #4f9fd8 50%, #7ad7c8 100%)',
  // Foto asli untuk avatar — isi dengan URL (mis. '/avatar.jpg' atau tautan eksternal).
  // Kosongkan ('') untuk memakai inisial di atas gradient.
  avatarImage: '',
  // Tautan file CV (mis. '/cv.pdf'). Kosongkan ('') untuk menyembunyikan tombol Download CV.
  cvUrl: '',
  // Paragraf section "Tentang Saya"
  about: [
    'Saya seorang developer yang fokus pada pengalaman pengguna dan detail visual. Berawal dari ketertarikan pada desain dan teknologi, saya kini membangun produk web yang menggabungkan keduanya — antarmuka yang indah, interaksi yang halus, dan performa yang andal.',
    'Saya terbiasa bekerja dengan tim lintas fungsi, menerjemahkan kebutuhan menjadi solusi teknis, dan selalu belajar teknologi baru untuk menjaga kualitas karya tetap relevan.',
  ],
};

// Statistik hero — nilai, label spesifik, dan konteks singkat agar tidak terkesan generik
export const stats = [
  { value: 4, suffix: '+', label: 'Tahun Pengalaman', note: 'frontend & UI engineering' },
  { value: 25, suffix: '+', label: 'Proyek Selesai', note: 'web app, dashboard & mobile' },
  { value: 12, suffix: '+', label: 'Klien Kolaborasi', note: 'startup hingga enterprise' },
  { value: 100, suffix: '%', label: 'Tepat Waktu', note: 'delivery sesuai deadline' },
];

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
      'Template portofolio liquid glass dengan mesh gradient dinamis, blob organik, dan animasi halus berbasis React & Framer Motion.',
    longDescription:
      'Proyek ini adalah template portofolio modern yang dibangun dengan React, Vite, dan Tailwind CSS. Menampilkan sistem desain glassmorphism dengan background pastel mesh dinamis dan tiga blob cair yang bergerak perlahan, grid proyek ala bento, serta modal detail proyek. Desain responsif mobile-first tanpa mengorbankan presisi layout.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #7c6cf0 0%, #4f9fd8 100%)',
    icon: 'layout',
    // Screenshot/mockup asli proyek — isi dengan URL gambar (mis. '/projects/aura.png').
    // Kosongkan ('') untuk memakai gradient + ikon.
    image: '',
    liveUrl: '#',
    githubUrl: 'https://github.com/Iky969/Mweb',
    year: '2026',
  },
  {
    id: 'ecommerce-dashboard',
    title: 'Commerce Analytics Dashboard',
    category: 'Web',
    description:
      'Dashboard analitik penjualan real-time dengan grafik interaktif dan mode gelap yang nyaman di mata.',
    longDescription:
      'Panel admin untuk memantau performa toko online: revenue, konversi, dan perilaku pelanggan divisualisasikan dalam grafik interaktif. Dibangun dengan React dan dioptimalkan untuk kecepatan rendering data dalam jumlah besar.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #4f9fd8 0%, #7ad7c8 100%)',
    icon: 'chart',
    image: '',
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    category: 'Mobile',
    description:
      'Aplikasi mobile pencatat latihan dengan sinkronisasi cloud dan widget ringkas.',
    longDescription:
      'Aplikasi mobile-first yang membantu pengguna mencatat rutinitas olahraga, melacak progres mingguan, dan menerima rekomendasi latihan personal. Responsive dan nyaman digunakan satu tangan.',
    tech: ['React Native', 'Redux', 'Firebase'],
    gradient: 'linear-gradient(135deg, #f07c6c 0%, #f0b46c 100%)',
    icon: 'activity',
    image: '',
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
  {
    id: 'weather-visualizer',
    title: 'Weather Visualizer',
    category: 'Web',
    description:
      'Visualisasi cuaca global dengan peta interaktif dan prediksi 7 hari.',
    longDescription:
      'Aplikasi cuaca yang menampilkan data meteorologi dalam visualisasi menarik: peta interaktif, transisi animasi antar kondisi langit, dan grafik suhu 7 hari ke depan. Data diambil dari API cuaca publik.',
    tech: ['React', 'D3.js', 'OpenWeather API'],
    gradient: 'linear-gradient(135deg, #6cb4f0 0%, #7c6cf0 100%)',
    icon: 'cloud',
    image: '',
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
  {
    id: 'crypto-portfolio',
    title: 'Crypto Portfolio Tracker',
    category: 'Tools',
    description:
      'Pelacak portofolio kripto dengan harga real-time dan alert threshold.',
    longDescription:
      'Alat untuk memantau aset kripto: harga real-time, notifikasi saat harga melewati batas tertentu, serta laporan performa yang bisa diekspor. Fokus pada kejelasan informasi dan kecepatan.',
    tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #f0c86c 0%, #7ad77a 100%)',
    icon: 'coins',
    image: '',
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
    image: '',
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
];

// Pengalaman kerja — tampil di section timeline. Tambah/hapus entri sesuai kebutuhan.
// highlights: 2–3 poin singkat (lebih mudah dibaca daripada satu paragraf panjang).
// description opsional; logo opsional (mis. '/companies/acme.png') — kosong untuk inisial kotak.
export const experience = [
  {
    role: 'Frontend Engineer',
    company: 'PT Digital Kreatif Nusantara',
    period: '2024 — Sekarang',
    logo: '',
    highlights: [
      'Membangun sistem desain internal untuk aplikasi web klien enterprise.',
      'Optimasi performa: skor Lighthouse naik ke 95+ di halaman utama.',
      'Kolaborasi erat dengan tim produk & desain dari riset hingga rilis.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    role: 'UI Engineer',
    company: 'Studio Desain Inovasi',
    period: '2022 — 2024',
    logo: '',
    highlights: [
      'Menerjemahkan desain Figma menjadi komponen React yang konsisten dan reusable.',
      'Membangun prototipe interaktif untuk presentasi pitch klien.',
    ],
    tech: ['React', 'Figma', 'Framer Motion'],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2021 — 2022',
    logo: '',
    highlights: [
      'Mengerjakan landing page, dashboard, dan toko online untuk klien UMKM.',
      'Menangani proyek penuh: dari briefing, development, hingga deployment.',
    ],
    tech: ['JavaScript', 'Vue', 'REST API'],
  },
];

// Testimoni klien — tampil di section testimoni.
// rating (1–5) opsional: kosongkan/hapus field jika tidak ada data, bintang tidak akan tampil.
export const testimonials = [
  {
    quote:
      'Detail visual dan kecepatan delivery-nya luar biasa. Hasilnya jauh melampaui ekspektasi.',
    name: 'Andi Pratama',
    role: 'Product Manager, Startup Fintech',
    initials: 'AP',
    gradient: 'linear-gradient(135deg, #7c6cf0 0%, #4f9fd8 100%)',
    rating: 5,
  },
  {
    quote:
      'Selalu komunikatif dan proaktif. Dari mockup sampai produksi, hasilnya berkualitas tinggi.',
    name: 'Siti Rahma',
    role: 'Founder, Agency Kreatif',
    initials: 'SR',
    gradient: 'linear-gradient(135deg, #f07c6c 0%, #f0b46c 100%)',
    rating: 5,
  },
  {
    quote:
      'Kode yang rapi, dokumentasi yang jelas, dan mudah diajak diskusi. Sangat direkomendasikan untuk proyek frontend.',
    name: 'Budi Hartono',
    role: 'CTO, SaaS Company',
    initials: 'BH',
    gradient: 'linear-gradient(135deg, #7ad7c8 0%, #7c6cf0 100%)',
    rating: 4,
  },
];

// Pendidikan — tampil di tab "Pendidikan" pada section pengalaman. Tambah/hapus sesuai kebutuhan.
export const education = [
  {
    degree: 'S1 Informatika',
    school: 'Universitas Teknologi Nusantara',
    period: '2017 — 2021',
    logo: '',
    highlights: [
      'Fokus pada pengembangan web dan interaksi manusia-komputer.',
      'Aktif di organisasi mahasiswa dan beberapa proyek riset kecil.',
    ],
    tech: ['Struktur Data', 'Pemrograman Web', 'UI/UX Design'],
  },
  {
    degree: 'Bootcamp Frontend Engineering',
    school: 'Platform Kursus Online',
    period: '2021',
    logo: '',
    highlights: [
      'Kurikulum intensif 16 minggu dengan studi kasus nyata.',
      'Mencakup JavaScript modern, React, pengujian, dan deployment.',
    ],
    tech: ['React', 'Testing', 'CI/CD'],
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