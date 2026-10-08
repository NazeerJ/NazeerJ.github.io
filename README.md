# Nazeer Joseph — Data Engineering Portfolio

A complete static Astro + TypeScript portfolio: homepage, project index, generated Markdown case studies, CV download, accessible video slot, responsive styling, metadata and GitHub Pages deployment. Light corporate styling, image-first project pages and local PBIX downloads. No backend, client framework, paid service, API key or runtime GitHub API dependency.

## Running locally

Install **Node.js 24 LTS** (minimum 22.18), then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open `http://localhost:4321`. Stop the server with Ctrl+C.

```sh
npm run validate  # Typecheck, video tests, production build, link/asset/SEO checks
npm run preview   # Serve the production build at http://localhost:4321
```

If an environment blocks Astro's telemetry config directory, set `ASTRO_TELEMETRY_DISABLED=1` before running a command. In PowerShell: `$env:ASTRO_TELEMETRY_DISABLED='1'`.

## Where things live

```text
src/config/site.ts          Personal details, links, intro/video settings, navigation, skills
src/data/career.ts          Employment timeline, role durations and education
src/data/skills.ts          Skill matrix, confirmed experience and evidence links
src/content/projects/      One Markdown file per project
src/content.config.ts      Validated project schema
src/components/            Reusable presentation components
src/layouts/Layout.astro   Shared navigation, footer and SEO
src/pages/                 Homepage, project routes, robots.txt and 404
src/styles/global.css      Design system and responsive layouts
public/images/projects/    Project screenshots
public/videos/             Optional local MP4 and WebVTT captions
public/downloads/          CV PDF and downloadable Power BI (.pbix) files
templates/project.md       Copyable project template (not published)
scripts/                   Build verification and generated social image
docs/content-sources.md    Evidence, source links and scope decisions
.github/workflows/         CI and GitHub Pages deployment
```

## Editing personal information

Edit **`src/config/site.ts`**. It controls name, role, location, headline, intro, GitHub, LinkedIn, email, CV path, profile photo, video URL, poster, captions, navigation, skills, about text and contact text. The email uses `mailto:`; there is no contact form or backend.

Edit **`src/data/career.ts`** for experience and education. The DataOrbis 2020–2022 roles are grouped to keep the homepage concise. The supplied CV remains the authoritative, fuller history. No phone number is printed in the webpage; the original CV includes its existing phone number.

The social sharing PNG is regenerated from the central config on every build. The favicon is `public/favicon.svg`.

## Adding a new project

1. Copy `templates/project.md` to `src/content/projects/my-new-project.md`.
2. Replace its metadata and Markdown body with real project information.
3. Set `draft: false` when ready. Set `featured: true` to include it on the homepage.
4. Run `npm run validate`, review it locally and push to `main`.

The filename creates the route **`/projects/my-new-project/`**. Cards and the page are generated automatically; there is no registry or layout to edit. Any number of published featured projects is supported. `order` controls card order (lower comes first). Projects with `draft: true` are excluded from all published pages and the sitemap. Removing a file removes its page on the next build.

Required frontmatter: `title`, `shortDescription`, `fullDescription`, `problem`, `status`, `githubUrl`, `technologies`, `category`. Optional fields include `featured`, `draft`, `order`, `date`, `liveDemoUrl`, `thumbnail`, `thumbnailAlt`, `screenshots`, `downloads`, `keyFeatures`, `challenges`, `architecture`, `architectureNote`, and `lessonsLearned`. The schema validates content at build time. No MDX dependency is needed.

## Editing an existing project

Open its file in `src/content/projects/`. Keep `shortDescription` to one sentence, `fullDescription` to one short paragraph and `keyFeatures` to roughly three bullets. The first screenshot is the main preview; additional screenshots open under “More screenshots”. Markdown and the architecture diagram sit in the optional “Technical notes” disclosure. Longer research belongs in the repository README. The schema retains challenges and lessons for content compatibility, but the short public layout does not display them.

Keep filename changes deliberate: renaming a file changes its URL. For old public links, keep a small redirect page if needed. External repository/demo links must be full HTTPS URLs. Local asset paths start with `/` and do **not** include your GitHub repository prefix; components add it automatically.

## Adding project screenshots

Place files under `public/images/projects/my-new-project/`. Prefer compressed WebP or PNG, sensible dimensions and meaningful alt text. Then add:

```yaml
thumbnail: /images/projects/my-new-project/overview.webp
thumbnailAlt: Sales model and reporting overview
screenshots:
  - src: /images/projects/my-new-project/overview.webp
    alt: Sales performance dashboard showing actual sales against budget
    caption: Explain what the screenshot demonstrates and whether data is synthetic.
    width: 1600
    height: 900
```

Use the image's real width/height to reserve space. The first case-study preview loads immediately; other images are lazy-loaded. Clicking opens the full image in a new tab. Cards without thumbnails stay text-only; their project pages show the architecture flow first. For images inside the Markdown body, prefer the `screenshots` field above: Markdown absolute URLs do not automatically receive a GitHub project prefix.

## Changing featured projects

Change `featured: true` or `false` in the project file. `false` keeps it on the project index and its own page; `draft: true` hides it everywhere. Edit `order` to reorder projects. The homepage currently features the NetSuite platform and Fabric auditor; reporting automation is on the project index.

## Showing reports and adding PBIX downloads

Reports are shown as real screenshots. Visitors can download the PBIX and open it in Power BI Desktop; no embed URL, sign-in flow or iframe is needed on the website.

1. Put a report screenshot in `public/images/projects/` and configure the `thumbnail` and `screenshots` fields above.
2. Put the PBIX file in `public/downloads/`.
3. Add this to the project's Markdown frontmatter:

```yaml
downloads:
  - label: Download PBIX
    path: /downloads/my-report.pbix
    size: 12.4 MB
```

The first download appears on the project card, and all downloads appear on the project page. Paths are automatically adjusted for GitHub Pages repository URLs. Use a factual file size and retain the `.pbix` extension. Only the image loads while browsing; the PBIX downloads when clicked. Replacing the local file updates the download on the next deployment.

The included NetSuite PBIX is an unchanged 60.3 MB copy from the user's public repository, checked against its GitHub blob SHA and validated as a ZIP archive. It includes a DataModel. Refreshing it requires the source setup in the repository README. It has not been opened in Power BI Desktop during website QA. The Fabric and automation projects have no PBIX in their source repositories, so they link to their notebooks/code instead.

For future files too large for a normal GitHub commit, use a GitHub Release download and extend the download schema deliberately; do not substitute a Git LFS pointer for the report. Current download paths intentionally accept local PBIX files only.

## Adding/replacing the introduction video

The homepage prioritises projects and hides the introduction section until a video is configured. Set `introVideoUrl` in `src/config/site.ts` to show it after the About section:

```ts
introVideoUrl: '', // Hidden on the homepage until configured
// Or: '/videos/introduction.mp4'
// Or: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
// Or: 'https://youtu.be/YOUR_VIDEO_ID'
// Or: 'https://vimeo.com/123456789'
introVideoPoster: '/images/introduction-poster.webp', // Optional
introVideoCaptions: '/videos/introduction.en.vtt', // Local MP4 captions
```

For MP4, put the file in `public/videos/`. The native player has controls, uses metadata-only preloading, supports captions and does not autoplay. Add captions or a transcript for accessibility. For YouTube or Vimeo, ensure embedding is allowed; native player thumbnails apply to MP4, while remote players manage their own poster images. An optional configured poster also styles the empty placeholder. YouTube uses the privacy-enhanced embed domain. Vimeo unlisted share hashes are preserved. All modes reserve the same aspect ratio. Invalid URLs fail at build time.

Compress video before committing; GitHub has repository/file limits. Hosting on YouTube or Vimeo avoids putting a large video in Git. No component edits are needed.

## Updating the CV

Replace `public/downloads/Nazeer_Joseph_CV.pdf` with your new PDF, retaining its filename. If you rename it, update `cvPath`. Download links use the HTML `download` attribute. Check the document itself for any details you do not want publicly downloadable. The existing PDF is an unchanged copy of the supplied CV.

## Deploying to GitHub Pages (free)

The workflow is configured but no remote repository has been selected or site published by this build.

1. Create a **public** GitHub repository, for example `portfolio`, or `NazeerJ.github.io` for the root profile site. A public repository supports free Pages hosting.
2. Push this project, including `package-lock.json`, to its `main` branch. Do not commit `node_modules`, `.npm-cache` or `dist`.

```sh
git add .
git commit -m "Build data engineering portfolio"
git branch -M main
git remote add origin https://github.com/NazeerJ/YOUR-REPOSITORY.git
git push -u origin main
```

If a remote already exists, use it or deliberately change its URL rather than adding a second `origin`.

3. In GitHub, open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Ensure **Settings → Actions → General** allows GitHub Actions and the official `actions/*` actions used by the workflow. The workflow grants only read access for builds and Pages/id-token write permissions for deployment; no personal token is needed.
5. In **Actions → Deploy portfolio to GitHub Pages**, run the workflow manually, or push a new commit to `main`.
6. If the `github-pages` environment has protection rules, allow `main` to deploy and approve any review rule you configured.

Pushes to `main` build, validate, upload and deploy automatically. Pull requests validate without publishing. The deployment job reports the live URL.

The workflow detects both repository types:

- `NazeerJ.github.io` → `https://nazeerj.github.io/`
- `portfolio` → `https://nazeerj.github.io/portfolio/`

The configured base applies to assets, navigation, CV, project links, canonical URLs, robots and sitemap. Nothing is fetched from GitHub at visitor runtime.

### Test a project subpath locally

PowerShell:

```powershell
$env:SITE_URL='https://nazeerj.github.io'
$env:BASE_PATH='/portfolio'
npm run validate
npm run preview
# Open http://localhost:4321/portfolio/
Remove-Item Env:BASE_PATH
Remove-Item Env:SITE_URL
```

Bash: `SITE_URL=https://nazeerj.github.io BASE_PATH=/portfolio npm run validate`.

## Connecting a custom domain later

1. Follow [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) to set DNS with your domain provider and configure **Settings → Pages → Custom domain**. Verify domain ownership and enable **Enforce HTTPS** once GitHub has issued the certificate.
2. In **Settings → Secrets and variables → Actions → Variables**, add `SITE_URL` with your HTTPS origin (for example `https://www.yourdomain.com`). The workflow then defaults `BASE_PATH` to `/`. Only set a `BASE_PATH` variable if your host intentionally serves a subdirectory.
3. Run the deployment workflow again. This rebuilds canonical URLs, the sitemap and social image URLs for the new domain. GitHub Actions Pages deployments do not require a `CNAME` file in the artifact.

## Design, accessibility and maintenance

White/light-grey surfaces, navy typography, restrained blue links and buttons, self-hosted Manrope, semantic landmarks, visible keyboard focus, skip link, no autoplay, reduced-motion support, responsive CSS and no client JavaScript for the default site. All navigation remains available on mobile without a JavaScript menu. Screenshot dimensions reserve layout space. Keep content concise and inspect long titles/tags on mobile after edits.

`npm run validate` checks Astro/TypeScript, the video resolver, production generation, base-path-safe local links, assets and metadata. For release QA also check keyboard navigation, video playback (once supplied), desktop/mobile rendering and external links. See `docs/content-sources.md` for the evidence behind existing claims.

Astro reference: [content collections](https://docs.astro.build/en/guides/content-collections/) and [GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/).

## Power BI report showcase

The homepage now starts its work section with six report designs. Each card opens a concise `/reports/<id>/` gallery with a large preview, one short description and optional additional report pages. The first view uses compressed WebP; “View full size” opens the PNG. This section contains images rather than embedded Power BI or additional PBIX downloads.

Edit `src/data/reports.ts` to change report titles, descriptions, highlights or page order. Report assets live in `public/images/reports/`. `ReportShowcase.astro` controls the homepage grid, and `src/pages/reports/[id].astro` creates the gallery routes. The existing engineering projects, CV and configured download links are retained.

## End-to-end pipeline showcase

The homepage shows six report designs, followed by two end-to-end pipeline projects. Their content lives in `src/content/projects/fabric-incidents-pipeline.md` and `src/content/projects/netsuite-etl.md`. Both report galleries link to the corresponding full project. Pipeline case studies open with a simple source-to-report flow and three highlights; detailed implementation and handoff notes are collapsed. The cloud project uses a generic company identity and no source-company filenames. `githubUrl` is optional, so projects without a published repository do not show placeholder links. The previous audit and automation entries are drafts.

## Profile photo and recruiter introduction

The homepage headshot lives at `public/images/nazeer-joseph-headshot.webp`, configured through `profilePhoto` in `src/config/site.ts`. The introduction video card is always visible near the top; leaving `introVideoUrl` empty shows an honest coming-soon placeholder. After recording, place the MP4 in `public/videos/` and set `introVideoUrl` to `/videos/introduction.mp4`, or provide a supported YouTube/Vimeo URL. Local captions can be configured through `introVideoCaptions`.

Career durations are calculated by month at build time. The skills matrix is maintained in `src/data/skills.ts`; experience claims should match confirmed tool history or explicitly identified CV roles. Evidence links should point to relevant reports and pipeline case studies.
