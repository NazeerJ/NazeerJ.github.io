---
title: Fabric View Auditor
shortDescription: SQL view version history in Microsoft Fabric, with an AI-assisted change summary notebook.
fullDescription: A Fabric notebook that captures new or changed SQL view definitions in a Delta audit table for review.
problem: Tracking changes to SQL views.
featured: false
draft: true
order: 2
status: Public project
githubUrl: https://github.com/NazeerJ/microsoft_fabric_view_auditor
technologies: [Microsoft Fabric, Python, SQL, PySpark, Delta, GPT4All]
category: Microsoft Fabric / Automation
thumbnail: /images/projects/fabric-audit.png
thumbnailAlt: Actual SQL view audit history and version comparison output
screenshots:
  - src: /images/projects/fabric-audit.png
    alt: SQL results showing stored view definitions, hashes and capture timestamps
    caption: Captured view history and version comparison
    width: 932
    height: 292
  - src: /images/projects/fabric-summary.png
    alt: AI-assisted summary describing a manager ID field being cast to varchar
    caption: Output from the separate AI summary notebook
    width: 822
    height: 72
keyFeatures:
  - SHA-256 comparison identifies new and modified views.
  - Full definitions and timestamps retained for each captured version.
  - Separate GPT4All notebook summarises SQL differences.
architecture:
  - name: SQL views
    detail: Read definitions
  - name: Compare
    detail: SHA-256 hashes
  - name: Capture
    detail: Delta audit history
  - name: Review
    detail: SQL and AI summaries
---

The audit notebook compares each schema and object with its latest captured hash, appending only new or changed definitions. The AI summary notebook is a separate experiment, not part of an exported pipeline.

The repository includes both notebooks and sample outputs. Dropped-view detection and notifications are not implemented. [View the notebooks](https://github.com/NazeerJ/microsoft_fabric_view_auditor).
