---
title: Plant Incident Analytics Pipeline
shortDescription: Monthly incident spreadsheets become checked, traceable reporting data for comparing plants and tracking change.
fullDescription: I built a Fabric notebook that reshapes monthly spreadsheets into consistent incident records, validates them, and prepares lakehouse reporting tables for Power BI.
problem: Incident categories arrive in separate spreadsheet columns. Comparing plants and months requires consistent records, clear category definitions and confidence that the totals are correct.
featured: true
order: 1
status: Public project
githubUrl: https://github.com/NazeerJ/Plant-Incident-Analytics-Pipeline
technologies: [Microsoft Fabric, PySpark, SQL, Delta Lake, Power BI]
category: Cloud · Microsoft Fabric
reportUrl: /reports/plant-incidents/
downloads:
  - label: Download PBIX
    path: /downloads/plant-incident-analytics.pbix
    size: 0.2 MB
thumbnail: /images/reports/plant-incidents/01_Plant_Overview.webp
thumbnailAlt: Generic company plant incident dashboard with trends and plant comparisons
screenshots:
  - src: /images/reports/plant-incidents/01_Plant_Overview.png
    alt: Generic company plant incident dashboard with incident KPIs, monthly trends and plant comparisons
    caption: Reporting outcome · Generic company sample
    width: 2850
    height: 1604
keyFeatures:
  - Checks dates, counts and categories before loading.
  - Updates incident records and tracks each file’s progress.
  - Shows trends, plant comparisons and monthly changes.
architecture:
  - name: Excel files
    detail: Monthly plant incident counts
  - name: Fabric notebook
    detail: Reshape, map and check
  - name: Delta Lakehouse
    detail: Store incidents and run history
  - name: Power BI
    detail: Compare trends and plants
architectureNote: Power BI uses Excel exports of the lakehouse reporting tables.
designDecisions:
  - title: Make the rules configurable
    description: Folders, table names and category mappings live in one workbook, so changes do not require rewriting the ingestion logic.
  - title: Check before loading
    description: Invalid values, duplicate records and unmapped categories stop the load. Reconciliation then confirms that stored records match the validated input.
  - title: Make reruns traceable
    description: New or changed records are merged into the fact table. Run audits and separate archive and failed-file folders support investigation and controlled reruns.
reportingOutcome: Plant managers can compare internal and external incidents, see where counts are concentrated, and track changes over time.
---

## Ingestion and transformation

A configuration workbook defines the landing, archive and failed-file folders, worksheet, destination tables and category mappings. The notebook reads matching workbooks, validates their headers and unpivots incident-category columns into a consistent plant–month–category grain.

Bronze stores the current raw processing snapshot with file and run lineage. Silver is validated through Spark SQL views: plant codes are standardised, reporting months must start on the first day, counts must be non-negative whole numbers, and duplicate keys or unmapped categories stop the load.

## Loading and recovery controls

Delta MERGE inserts new plants and new incident keys, and updates changed incident counts or category attributes. Unchanged fact rows are preserved; absent source rows are not deleted. The process compares the loaded fact values with validated input and checks that every fact has a matching plant.

Every file has a run audit with its stage, status, row counts and error detail. Successful files move to an archive folder after reconciliation. Failed files move to a separate folder where possible, and the notebook records the failure and stops. These controls support investigation and controlled reruns; the multi-step workflow is not a single atomic transaction.

## Evidence and reporting handoff

The supplied notebook contains a successful sample run: 48 source rows with four categories became 192 validated incident rows, with no missing values, invalid months or duplicate keys reported. The supplied source workbook contains 296 incidents; the exported fact table reconciles to that total.

The Power BI model uses exported plant and monthly incident tables with a calendar table. The dashboard shows incident totals, internal and external trends, plant comparisons and month-over-month signals. The current portfolio report imports the Excel exports; a direct lakehouse connection and scheduled refresh are not claimed here.
