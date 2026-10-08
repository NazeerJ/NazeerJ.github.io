---
title: Daily Reporting Automation
shortDescription: Python automation for Citrix downloads, CSV checks and Excel updates.
fullDescription: A desktop workflow that downloads daily reports, checks the reporting date and updates Excel workbooks.
problem: Repetitive daily report processing.
featured: false
draft: true
order: 3
status: Public project
githubUrl: https://github.com/NazeerJ/Automated-Report-Download-and-Excel-Update
technologies: [Python, pandas, xlwings, PyAutoGUI]
category: Python / Automation
keyFeatures:
  - Report downloads with retry handling.
  - CSV encoding conversion and reporting-date validation.
  - Workbook updates with monthly backups.
architecture:
  - name: Citrix
    detail: Download reports
  - name: CSV
    detail: Validate dates and encoding
  - name: Backup
    detail: Monthly workbook copy
  - name: Excel
    detail: Append report data
---

The notebook uses screen-based automation, so Citrix image assets, paths and display settings must match the target environment. Excel must be installed and workbooks closed during updates.

[Setup instructions and notebook](https://github.com/NazeerJ/Automated-Report-Download-and-Excel-Update).
