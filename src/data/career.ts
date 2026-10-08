// Source: Nazeer_Joseph_CV.pdf, supplied October 2026. Keep dates explicit.
export const experience = [
  {
    company: 'Morae',
    role: 'Senior Power BI Developer / Data Engineer',
    period: 'Jul 2025 — Present',
    startMonth: '2025-07',
    endMonth: null,
    current: true,
    summary:
      'Building Power BI semantic models and Fabric / Azure pipelines with Python, PySpark and SQL. Connecting NetSuite, Salesforce and other business systems to centralised analytics.',
  },
  {
    company: 'CDW',
    role: 'Power BI Developer',
    period: 'Sep 2024 — Jun 2025',
    startMonth: '2024-09',
    endMonth: '2025-07',
    current: false,
    summary:
      'Delivered enterprise reports, semantic models and DAX measures, with SQL and Power Query supporting data preparation, validation and performance.',
  },
  {
    company: 'DataOrbis',
    role: 'Data Integration Team Lead',
    period: 'Jan 2023 — Aug 2024',
    startMonth: '2023-01',
    endMonth: '2024-09',
    current: false,
    summary:
      'Led regional integration operations, automated feeds and SQL databases. Guided source onboarding across APIs and RDBMS platforms, team development and delivery controls.',
  },
  {
    company: 'DataOrbis',
    role: 'From project delivery to data integration',
    period: 'Feb 2020 — Dec 2022',
    startMonth: '2020-02',
    endMonth: '2023-01',
    current: false,
    summary:
      'Progressed from Junior Project Analyst to Project Analyst and Data Integration Analyst: designing data flows, maintaining feeds and supporting BI delivery.',
  },
];
export const earlierExperience =
  'Earlier foundations: SharePoint development and team training at Knights Innovation Support Centre (Aug 2019–Jan 2020), following the DEDAT ICT CAPACITI learnership at EOH (Feb–Jul 2019).';
export const education = [
  {
    qualification: 'BCom Honours in Information Systems',
    institution: 'University of the Western Cape',
    year: '2022',
    detail:
      'Research applied machine learning and data analysis to South African Twitter data to investigate indicators of depression.',
  },
  {
    qualification: 'BCom in Information Systems, IT & Management',
    institution: 'University of the Western Cape',
    year: '2018',
    detail:
      'Cum laude · Dean’s Honours Award · First place in Digital Business Innovation.',
  },
  {
    qualification: 'National Certificate: IT (Systems Development)',
    institution: 'Proserv Learnership',
    year: '2020',
    detail: 'SAQA ID 48872',
  },
];

// Closed roles use the first month after the role ended, so all served months count.
// Current roles use the build month, without counting an incomplete extra month.
const asOf = new Date();
const buildMonth = asOf.getUTCFullYear() * 12 + asOf.getUTCMonth();
function monthIndex(value: string) {
  const [year, month] = value.split('-').map(Number);
  return year * 12 + month - 1;
}
export const experienceAsOf = new Intl.DateTimeFormat('en', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}).format(asOf);
export function roleDuration(start: string, end: string | null) {
  const months = Math.max(
    0,
    (end ? monthIndex(end) : buildMonth) - monthIndex(start),
  );
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  return (
    [
      years && `${years} ${years === 1 ? 'year' : 'years'}`,
      remainder && `${remainder} ${remainder === 1 ? 'month' : 'months'}`,
    ]
      .filter(Boolean)
      .join(' ') || 'Less than a month'
  );
}
export const experienceHighlights = [
  { value: '7 years', label: 'SQL & Python foundations' },
  { value: '4 years', label: 'Advanced BI & data work' },
  {
    value: `${Math.floor((buildMonth - monthIndex('2020-02')) / 12)}+ years`,
    label: 'BI & integration career',
  },
];
