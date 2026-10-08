---
title: NetSuite Sales Analytics Pipeline
shortDescription: Sales, orders, opportunities and budgets come together in a local warehouse for one consistent Power BI view.
fullDescription: I built the Python ingestion and SQL transformations that check source extracts, keep customer and item history, and update transaction data before feeding Power BI sales reporting.
problem: Separate CSV extracts, changing customer and item details, and multiple currencies make sales and budget comparisons difficult to keep consistent.
featured: true
order: 2
status: Public project
githubUrl: https://github.com/NazeerJ/Netsuite-ETL-Full-Project
reportUrl: /reports/sales-performance/
downloads:
  - label: Download PBIX
    path: /downloads/netsuite-sales-analytics.pbix
    size: 60.3 MB
technologies: [Python, SQL Server, Polars, SQLAlchemy, Power BI]
category: Local · Python & SQL Server
thumbnail: /images/reports/sales-performance/01_Full_Overview.webp
thumbnailAlt: Sales dashboard produced by the local Python and SQL Server pipeline
screenshots:
  - src: /images/reports/sales-performance/01_Full_Overview.png
    alt: Sales performance dashboard with actual sales, open orders, opportunities and budget comparisons
    caption: Reporting outcome · Portfolio sample data
    width: 1439
    height: 799
keyFeatures:
  - Checks source keys, duplicates and relationships before loading.
  - Preserves customer and item history as records change.
  - Brings sales and budget into a consistent reporting view.
architecture:
  - name: CSV extracts
    detail: Sales, budgets and exchange rates
  - name: Python ETL
    detail: Read, check and audit
  - name: SQL Server
    detail: Keep history and update facts
  - name: Power BI
    detail: Review sales against budget
designDecisions:
  - title: Separate the processing stages
    description: Raw snapshots keep the current input inspectable; SQL layers standardise and prepare it. Quality gates block critical source issues before warehouse loading.
  - title: Keep history and updates reliable
    description: Customer and item changes retain their history. Transaction headers and lines are updated together, and a saved progress marker advances only after a successful load.
  - title: Compare like with like
    description: Monthly exchange rates and reporting views align sales with budget by month, customer and business unit, so dashboard comparisons use consistent definitions.
reportingOutcome: Sales teams can review actual sales, open orders and opportunities against budget, with consistent views by customer, business unit and reporting period.
---

## Ingestion and quality gates

The Python trigger reads recognised CSV extracts with Polars, reshapes monthly FX columns into rows, adds source and run metadata and loads full snapshots into SQL Server’s raw layer. Each table load reconciles the inserted row count. The raw replacement and its audit write share a database transaction.

Staging views standardise values, and an intermediate layer prepares reusable joins and business logic. Before the historical and warehouse loads, the trigger checks primary keys, duplicates, parent–child relationships and business rules. Critical failures block those downstream loads and are recorded in the pipeline audit.

## History and incremental warehouse loading

Customer and item attributes retain history through SCD Type 2. Hash comparisons distinguish changed records from unchanged records. Current reference tables use hash-based MERGE operations.

Transactions use a locked watermark to identify changed or deleted transaction IDs. Their headers and lines are reloaded together so the current warehouse stays consistent. The watermark advances only after the transaction load succeeds. These controls apply to their respective load steps; the complete multi-stage run is not one database transaction.

## Reporting and project handover

Business views classify actual sales, open sales orders and opportunities; apply effective monthly exchange rates; and join sales with budget at month, customer and business-unit grain. These views feed the Power BI model and dashboard.

The public repository includes the SQL setup sequence, recurring Python trigger, project specification and completed report documentation. The PBIX download contains the model and report. A refresh requires the local SQL Server setup described in the [repository README](https://github.com/NazeerJ/Netsuite-ETL-Full-Project#readme).
