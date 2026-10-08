# Pipeline showcase content sources

The two visible projects are Plant Incident Analytics Pipeline and NetSuite Sales Analytics Pipeline. The previous Fabric View Auditor and daily automation entries are retained as drafts and are excluded from public routes and navigation.

Cloud source: the user-provided folder `D:/Morea/Me/Remake/PBIP/Anonymised_Reports/PBIX/Mulitbase`. Inspected the executed ingestion notebook, configuration workbook, handover specification, source workbook, plant/fact exports and report documentation. Source 48 rows × four categories = 192 fact rows; both source and fact totals are 296 incidents. The saved notebook records a successful run and reconciliation. The supplied report imports Excel exports, so the public notes explicitly describe an export/import handoff and do not claim Direct Lake or scheduled refresh. The supplied PBIX matches the already generic report screenshot byte-for-byte.

Local source: https://github.com/NazeerJ/Netsuite-ETL-Full-Project . Inspected the README, Pipeline_Trigger.py, transaction load SQL and business-view SQL on 8 October 2026. Public claims cover the implemented snapshot loads, quality gate, SCD history, hash MERGE, transaction watermark and currency-normalised reporting views. No new execution of the local database or Fabric notebook was performed during this website update.

Only concise rewritten case-study text and previously approved generic report images are public. Raw notebook, configuration and documentation files are not copied into public assets. No source-company reference is included in public text, URLs, image labels or the cloud project name.
