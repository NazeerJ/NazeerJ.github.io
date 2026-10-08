import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { site } from '../src/config/site.ts';
const escape = (value) =>
  value.replace(
    /[<>&"]/g,
    (character) =>
      ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[character],
  );
const lines = site.headline.split('\n');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f7f8fa"/><path d="M70 110h1060M70 532h1060" stroke="#dce2ea"/><text x="70" y="80" fill="#2456a6" font-family="sans-serif" font-size="24">${escape(site.name)}</text><text x="70" y="245" fill="#17283e" font-family="sans-serif" font-size="64" font-weight="600">${escape(lines[0])}</text><text x="70" y="325" fill="#17283e" font-family="sans-serif" font-size="64" font-weight="600">${escape(lines[1] || '')}</text><text x="70" y="420" fill="#526174" font-family="sans-serif" font-size="25">${escape(site.title)}</text><text x="70" y="575" fill="#2456a6" font-family="sans-serif" font-size="20">${escape(site.location)}</text><text x="950" y="575" fill="#526174" font-family="sans-serif" font-size="20">PORTFOLIO ↗</text></svg>`;
await mkdir('public/images', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/images/social-card.png');
