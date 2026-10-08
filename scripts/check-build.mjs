import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { site } from '../src/config/site.ts';
const root = path.resolve('dist');
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
async function walk(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((entry) =>
        entry.isDirectory()
          ? walk(path.join(dir, entry.name))
          : path.join(dir, entry.name),
      ),
    )
  ).flat();
}
const files = await walk(root);
const errors = [];
for (const file of files.filter((file) => file.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const url = decodeURIComponent(value.split(/[?#]/)[0]);
    if (base && url !== base && !url.startsWith(`${base}/`)) {
      errors.push(`${file}: link misses base: ${url}`);
      continue;
    }
    let target = path.join(root, url.slice(base.length));
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, 'index.html');
      await stat(target);
    } catch {
      errors.push(`${file}: missing ${value}`);
    }
  }
  if (!html.includes('rel="canonical"')) errors.push(`${file}: no canonical`);
  if (!html.includes('property="og:image"'))
    errors.push(`${file}: no social image`);
}
for (const required of [
  'robots.txt',
  'sitemap-index.xml',
  '404.html',
  site.cvPath.replace(/^\//, ''),
  'images/social-card.png',
])
  if (!files.includes(path.join(root, required)))
    errors.push(`Missing ${required}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(
  `Verified local links, assets and SEO across ${files.filter((f) => f.endsWith('.html')).length} HTML pages (base: ${base || '/'}).`,
);
