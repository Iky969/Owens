import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'screenshots');
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SHOTS = [
  { id: 'home', file: 'portfolio_dark_hero.png', label: 'dark hero' },
  { id: 'projects', file: 'portfolio_dark_projects.png', label: 'dark projects' },
  { id: 'experience', file: 'portfolio_dark_experience.png', label: 'dark experience' },
  { id: 'testimonials', file: 'portfolio_dark_testimonials.png', label: 'dark testimonials' },
  { id: 'contact', file: 'portfolio_dark_contact.png', label: 'dark contact' },
];

async function captureSection(page, { id, file, label }) {
  console.log(`Capturing ${label}...`);
  await page.evaluate((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
  }, id);
  await sleep(2000); // tunggu reveal animation
  await page.screenshot({ path: path.join(OUT_DIR, file) });
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log('Launching browser...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });

  console.log(`Navigating to ${BASE_URL} ...`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });

  // Paksa dark theme agar hasil konsisten terlepas dari localStorage sebelumnya
  await page.evaluate(() => {
    localStorage.setItem('aura-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await page.reload({ waitUntil: 'networkidle' });
  await sleep(3000); // tunggu entrance animation selesai

  // Dark theme — semua section utama
  for (const shot of SHOTS) {
    await captureSection(page, shot);
  }

  // Light theme — Hero
  console.log('Switching to light theme...');
  await page.evaluate(() => document.getElementById('home')?.scrollIntoView({ block: 'start' }));
  await sleep(800);
  await page.click('[data-testid="theme-toggle"]');
  await sleep(2000); // tunggu transisi warna
  await page.screenshot({ path: path.join(OUT_DIR, 'portfolio_light_hero.png') });

  await browser.close();
  console.log(`Screenshots saved to ${OUT_DIR}`);
}

run().catch((err) => {
  console.error('Screenshot script error:', err);
  process.exit(1);
});