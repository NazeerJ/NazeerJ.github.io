export interface ReportPage {
  title: string;
  src: string;
  fullSize: string;
  width: number;
  height: number;
  alt: string;
}
export interface Report {
  id: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  cover: string;
  pages: ReportPage[];
  projectUrl?: string;
}

export const reports: Report[] = [
  {
    title: 'Global Utilization',
    description:
      'A connected view of utilization, bench capacity and future allocations, combining clear KPI summaries with detailed resource planning.',
    category: 'Workforce analytics',
    highlights: ['Utilization KPIs', 'Bench visibility', 'Allocation planning'],
    id: 'global-utilization',
    cover: '/images/reports/global-utilization/Cover.webp',
    pages: [
      {
        title: 'Global Utilization',
        src: '/images/reports/global-utilization/01_Global_Utilization.webp',
        fullSize:
          '/images/reports/global-utilization/01_Global_Utilization.png',
        width: 2902,
        height: 1604,
        alt: 'Global Utilization — Global Utilization report page',
      },
      {
        title: 'Bench Management',
        src: '/images/reports/global-utilization/02_Bench_Management.webp',
        fullSize: '/images/reports/global-utilization/02_Bench_Management.png',
        width: 2902,
        height: 1604,
        alt: 'Global Utilization — Bench Management report page',
      },
      {
        title: 'Allocation Details',
        src: '/images/reports/global-utilization/03_Allocation_Details.webp',
        fullSize:
          '/images/reports/global-utilization/03_Allocation_Details.png',
        width: 2902,
        height: 1604,
        alt: 'Global Utilization — Allocation Details report page',
      },
    ],
  },
  {
    title: 'Customer Success & Risk',
    description:
      'A customer success report bringing service SLAs, satisfaction, revenue risk and engagement activity into one consistent visual experience.',
    category: 'Customer analytics',
    highlights: ['Service SLAs', 'Revenue at risk', 'Client engagement'],
    id: 'customer-success',
    cover: '/images/reports/customer-success/Cover.webp',
    pages: [
      {
        title: 'Halo Report',
        src: '/images/reports/customer-success/01_Halo_Report.webp',
        fullSize: '/images/reports/customer-success/01_Halo_Report.png',
        width: 2850,
        height: 1604,
        alt: 'Customer Success & Risk — Halo Report report page',
      },
      {
        title: 'Risk Register',
        src: '/images/reports/customer-success/02_Risk_Register.webp',
        fullSize: '/images/reports/customer-success/02_Risk_Register.png',
        width: 2850,
        height: 1604,
        alt: 'Customer Success & Risk — Risk Register report page',
      },
      {
        title: 'Engagements',
        src: '/images/reports/customer-success/03_Engagements.webp',
        fullSize: '/images/reports/customer-success/03_Engagements.png',
        width: 2850,
        height: 1604,
        alt: 'Customer Success & Risk — Engagements report page',
      },
    ],
  },
  {
    title: 'IT Service Operations',
    description:
      'An incident reporting experience that connects ticket volumes, service performance and operational detail through two complementary dashboard views.',
    category: 'Service analytics',
    highlights: [
      'Incident trends',
      'Service performance',
      'Operational detail',
    ],
    id: 'it-service-operations',
    cover: '/images/reports/it-service-operations/Cover.webp',
    pages: [
      {
        title: 'Client Service Overview',
        src: '/images/reports/it-service-operations/01_Client_Service_Overview.webp',
        fullSize:
          '/images/reports/it-service-operations/01_Client_Service_Overview.png',
        width: 2850,
        height: 1604,
        alt: 'IT Service Operations — Client Service Overview report page',
      },
      {
        title: 'Service Operations',
        src: '/images/reports/it-service-operations/02_Service_Operations.webp',
        fullSize:
          '/images/reports/it-service-operations/02_Service_Operations.png',
        width: 2850,
        height: 1604,
        alt: 'IT Service Operations — Service Operations report page',
      },
    ],
  },
  {
    title: 'Time & Allocation',
    description:
      'A time and allocation dashboard with custom KPI cards, weekly trends and resource-level detail for billable hours and planned capacity.',
    category: 'Resource analytics',
    highlights: ['Custom KPI cards', 'Weekly comparisons', 'Resource detail'],
    id: 'time-allocation',
    cover: '/images/reports/time-allocation/Cover.webp',
    pages: [
      {
        title: 'My Time',
        src: '/images/reports/time-allocation/01_My_Time.webp',
        fullSize: '/images/reports/time-allocation/01_My_Time.png',
        width: 2862,
        height: 1450,
        alt: 'Time & Allocation — My Time report with a September–October 2026 date filter',
      },
    ],
  },
  {
    title: 'Plant Incident Analytics',
    description:
      'A focused plant overview showing incident trends, internal and external events, plant comparisons and concise performance signals.',
    category: 'Operational analytics',
    highlights: ['KPI hierarchy', 'Plant comparisons', 'Trend signals'],
    id: 'plant-incidents',
    projectUrl: '/projects/fabric-incidents-pipeline/',
    cover: '/images/reports/plant-incidents/Cover.webp',
    pages: [
      {
        title: 'Plant Overview',
        src: '/images/reports/plant-incidents/01_Plant_Overview.webp',
        fullSize: '/images/reports/plant-incidents/01_Plant_Overview.png',
        width: 2850,
        height: 1604,
        alt: 'Plant Incident Analytics — Plant Overview report page',
      },
    ],
  },
  {
    title: 'NetSuite Sales Performance',
    description:
      'A sales performance overview unifying actual sales, open orders, opportunities and budget comparisons in a structured executive dashboard.',
    category: 'Commercial analytics',
    highlights: [
      'Executive KPI strip',
      'Pipeline composition',
      'Business-unit comparisons',
    ],
    id: 'sales-performance',
    cover: '/images/reports/sales-performance/Cover.webp',
    pages: [
      {
        title: 'Overview',
        src: '/images/reports/sales-performance/01_Overview.webp',
        fullSize: '/images/reports/sales-performance/01_Overview.png',
        width: 2533,
        height: 1473,
        alt: 'NetSuite Sales Performance — Overview report page',
      },
    ],
    projectUrl: '/projects/netsuite-etl/',
  },
];
