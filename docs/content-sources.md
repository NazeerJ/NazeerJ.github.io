# Content provenance

Reviewed on 6 October 2026. Personal history, skills and education come from the user-supplied `Nazeer_Joseph_CV.pdf`. LinkedIn was supplied directly by the user. Email comes from the CV. The original CV is copied unchanged to `public/downloads/`; the phone number appears only inside that document.

## Project selection

The public profile API returned five repositories. Selected:

1. [Netsuite-ETL-Full-Project](https://github.com/NazeerJ/Netsuite-ETL-Full-Project): README, file tree, `Pipeline_Trigger.py`, `7.incrementalloadsp.sql`, and `img/Report Overview.png` inspected. SQL and Python substantiate the layered architecture, transaction watermark logic, SCD history, validation and audits. The source input is CSV, not a live NetSuite connector. Report values are project data, not measured business benefits.
2. [microsoft_fabric_view_auditor](https://github.com/NazeerJ/microsoft_fabric_view_auditor): README, file tree and both notebooks inspected. The main notebook writes a Delta audit table; the README calls it a SQL audit table. Case study follows implementation. The README describes daily pipeline scheduling but the public tree has no pipeline export. AI summaries are listed as future work in the README, while a separate GPT4All notebook exists; the site explains this distinction. Dropped-object detection, notifications and Git integration are not claimed.
3. [Automated-Report-Download-and-Excel-Update](https://github.com/NazeerJ/Automated-Report-Download-and-Excel-Update): README and repository tree inspected. Case study follows documented behaviour and environment limitations; no quantified savings or production certification are claimed.

Excluded `Image_Host` (asset storage) and `storage-file-browser-demo` (less relevant PyQt demonstration).

## Assets

`public/images/projects/netsuite-overview.png` is the user's screenshot from `Netsuite-ETL-Full-Project/img/Report Overview.png`. No stock photos, invented screenshots or fabricated metrics are used. The Fabric card is a conceptual HTML/CSS flow of the documented system, not a screenshot of a deployed service.

Dates on project frontmatter are omitted because a repository modification date is not a reliable project completion date. Employment dates are taken from the CV. Azure OpenAI and Copilot appear in the CV; the Fabric example specifically uses GPT4All, not Azure OpenAI.

## Report downloads and additional screenshots

The October 6 corporate redesign adds an unchanged local copy of `Netsuite-ETL-Full-Project/Netsuite Project.pbix`, plus its report home screenshot. Fabric previews use `images/SqlTable.png` and `images/AI_Summary_Output.png`. The website uses these original outputs, not recreated report visuals. PBIX file verification is recorded in `verification.md`.

## Recruiter profile update — 8 October 2026

The portrait is the user's supplied `Nazeer_Joseph_Pic.jpeg`, copied unchanged to `public/images/nazeer-joseph.jpeg`; presentation cropping is CSS only. It appears with descriptive alt text, declared dimensions and priority loading.

The introduction component is visible at the top even without a video URL. The coming-soon card has no interactive play button. Existing local MP4, YouTube and Vimeo support is retained; set `introVideoUrl` in `src/config/site.ts` when the recording is ready.

Role durations use CV month ranges. Completed roles include the final served month; the current role stops at the build month. On 8 October 2026 the owner confirmed approximately 7 years with basic SQL, Python and database design, and 4 years with advanced BI/data work. The homepage highlights distinguish those self-reported figures from the overall CV-supported BI/integration career.

The matrix lists tools and languages, as the owner requested. SQL/Python figures refer to foundational work; Power BI, DAX and Power Query are shown in the owner-confirmed advanced BI work category. Modern cloud tools show the CV-supported current role context rather than applying the broad 4-year estimate to every platform. Git and GitHub show public project use. Polars and SQLAlchemy are supporting tools without separately invented tenure. SCD Type 2, incremental loading and validation are described in project implementation, not listed as standalone skills. No self-scored proficiency ratings are used.

## Headshot framing update — 8 October 2026

At the owner's request, the homepage now uses a head-and-shoulders edit of the supplied portrait, made with the built-in image editing tool. The prompt requested framing only and preservation of identity, expression, clothing and garden background. This is an AI-edited headshot, not a byte-identical crop of the original. The original photograph remains unchanged.

`public/images/nazeer-joseph-headshot.webp` is a WebP encoding of the selected 1086 × 1448 edit. The image dimensions are reflected in the homepage markup. Desktop and mobile portrait frames are retained. The original PNG edit and exact prompt are saved in the PBIP workspace under `Portfolio_Site_Integration/nazeer-joseph-headshot.png` and `Portfolio_Site_Integration/headshot-edit.txt`.
