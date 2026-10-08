# Verification — current design

The current site uses a light corporate theme, screenshot-first project pages, brief summaries and PBIX downloads. The previous experimental Power BI iframe support was removed at the user's request. Earlier embed checks do not describe the current site.

## File verification

- NetSuite PBIX fetched from the user's public repository: 60,327,656 bytes.
- Git blob SHA-1 matched `af3868ba92a3f35d6adbf2f07bf7dc117c6032b2`.
- ZIP integrity check passed; Report/Layout and DataModel entries are present.
- No change was made to the report or data model. Power BI Desktop execution and data refresh were not tested.
- Source report screenshots, Fabric audit output and AI summary output come from the same user-owned public repositories.

## Browser and build checks

- Astro/TypeScript: no errors, warnings or hints. Video URL tests pass.
- Production builds at `/` and `/portfolio/`: all local links, preview images, downloads and metadata checks pass.
- Chromium: five pages at 1440, 1024, 768, 390 and 320 pixels (25 views); no overflow, broken images or missing/duplicate H1s.
- axe-core: ten scans covering the five pages at desktop/mobile widths, with no automated WCAG A/AA violations reported. This is not a full accessibility certification.
- Downloaded the PBIX through its homepage button. Its byte count and Git blob hash matched the original repository file.
- CV download, keyboard skip link, project navigation, full-size image opening, keyboard-operated technical disclosures and reduced-motion behaviour pass.
- Verified no PBIX request occurs during normal page browsing; downloads are click-triggered.
- Desktop/mobile homepage and NetSuite project screenshots visually reviewed. Large previews precede concise summaries; secondary screenshots and technical notes are collapsed.

GitHub Pages deployment remains untested remotely because the checkout has no GitHub remote. The PBIX was validated and downloaded, but not opened or refreshed in Power BI Desktop.

## Power BI report showcase — 8 October 2026

- Added six report cards immediately after the homepage introduction, plus six individual screenshot galleries. Each gallery has a short description, three highlights and full-size image links; additional pages are collapsed.
- Copied six WebP covers and eleven report previews with full-size PNG versions from the approved Portfolio_Showcase package. Existing projects, CV, experience and the NetSuite PBIX download are preserved.
- `npm run validate` passed: Astro/TypeScript reported no errors, warnings or hints; all five existing tests passed; the production build and local link/asset checks passed for all twelve HTML pages.
- A separate production build and link/asset check passed with the `/portfolio` GitHub Pages base path.
- Browser checks passed for 23 responsive layouts across the homepage and six galleries, with no horizontal overflow, broken images or H1 issues. Fourteen automated accessibility scans reported zero WCAG A/AA violations.
- Verified report navigation, keyboard-operated additional-page disclosures, full-size PNG opening, return links and the existing 60,327,656-byte PBIX download endpoint.
- Desktop and mobile screenshots were visually reviewed. Detailed results and captures are in `.qa/report-showcase-results.json` and `.qa/report-*.png`.
- Update remains local. No GitHub remote is configured, and no public deployment was performed.

Maintain report content in `src/data/reports.ts`, card layout in `src/components/ReportShowcase.astro`, gallery layout in `src/pages/reports/[id].astro` and images in `public/images/reports`.

## Updated report captures and thumbnails — 8 October 2026

All eleven selected report pages were recaptured from the updated PBIX files using the Desktop bridge report-only capture method. Thumbnails now use the same first-page WebP as each gallery, without editorial overlays; the complete page is fitted without cropping. Width/height metadata was updated. The existing NetSuite engineering project overview uses the fresh framed image too. All six source PBIX hashes remain unchanged by this screenshot task. The source package, contact sheet and ZIP were refreshed.

The independent screenshot review passed after replacing an IT overview capture that had loading spinners. All six package covers are byte-identical to their primary page exports. Existing report limitations, including the My Time Monday billable headline rule and native table/slicer truncation, remain visible in the screenshots.

## Two end-to-end pipeline projects — 8 October 2026

- Report gallery remains first. Selected work is now End-to-end data pipelines, containing only the Fabric cloud incident project and the local Python/SQL Server sales project.
- Both cases show a four-stage workflow, a short summary, three highlights, a reporting outcome and collapsed technical notes. Plant and sales report galleries link to their corresponding full pipeline pages.
- Public plant-project text, URLs, image labels and screenshot pixels use a generic company identity. No source-company name, workspace name, filename or raw documentation was published. Source evidence and the current export/import reporting handoff are recorded in docs/pipeline-content-sources.md.
- Previous audit and daily reporting automation entries are retained as drafts, excluded from public listings, routes and sitemap. Their former routes return 404.
- npm run validate passed with zero Astro/TypeScript diagnostics, all five existing tests passing, and eleven production HTML pages passing local asset/link and SEO checks.
- Chromium checks passed across 30 layouts at 1440, 1024, 768, 390 and 320 pixels. Twelve automated WCAG A/AA scans found zero violations. No horizontal overflow, missing images or H1 issues were found.
- Pipeline navigation, report/project cross-links, keyboard-operated technical notes and the existing NetSuite PBIX download endpoint passed. Desktop and mobile previews were visually reviewed.
- No Fabric or local SQL pipeline execution, report source edits, remote deployment or Git changes were performed as part of this portfolio update.
