import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Actions supplies these automatically. Set them locally to preview a project URL.
const site = process.env.SITE_URL || 'https://nazeerj.github.io';
const base = process.env.BASE_PATH || '/';
export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
