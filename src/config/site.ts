// All editable personal information, navigation and core skills live here.
export const site = {
  name: 'Nazeer Joseph',
  initials: 'NJ',
  title: 'Senior Power BI Developer / Data Engineer',
  location: 'Cape Town, South Africa',
  addressLocality: 'Cape Town',
  addressCountry: 'ZA',
  headline: 'Data Engineering\n& BI Projects',
  intro:
    'I build reliable data pipelines and Power BI reports that turn complex operational data into clear, useful reporting.',
  description:
    'Data engineering and Power BI projects by Nazeer Joseph, a Senior Power BI Developer and Data Engineer in Cape Town. View reports, source code and technical case studies.',
  githubUrl: 'https://github.com/NazeerJ',
  linkedinUrl: 'https://www.linkedin.com/in/nazeer-joseph',
  email: 'nazeer.joseph@gmail.com',
  cvPath: '/downloads/Nazeer_Joseph_CV.pdf',
  profilePhoto: '/images/nazeer-joseph.jpeg',
  introVideoUrl: '', // /videos/introduction.mp4, a YouTube URL, or a Vimeo URL
  introVideoPoster: '', // /images/introduction-poster.webp
  introVideoCaptions: '', // /videos/introduction.en.vtt (recommended for local MP4)
  navigation: [
    { label: 'Reports', href: '/#reports' },
    { label: 'Pipelines', href: '/#projects' },

    { label: 'Experience', href: '/#experience' },
  ],
  coreSkills: [
    {
      title: 'Data engineering',
      description:
        'Ingestion, transformation, warehouse design and validation.',
      skills: [
        'SQL Server',
        'Python',
        'PySpark',
        'Polars',
        'ETL / ELT',
        'Data warehousing',
      ],
    },
    {
      title: 'Analytics & BI',
      description:
        'Reports, semantic models, calculations and access controls.',
      skills: [
        'Power BI',
        'DAX',
        'Power Query',
        'Semantic modelling',
        'Star schemas',
        'Row-level security',
        'Tableau',
      ],
    },
    {
      title: 'Cloud & development',
      description: 'Cloud data platforms, APIs and development tools.',
      skills: [
        'Microsoft Fabric',
        'Azure',
        'REST APIs',
        'Git',
        'GitHub',
        'GitHub Actions',
      ],
    },
    {
      title: 'Data & AI',
      description: 'AI tools and SQL change-summary experiments.',
      skills: [
        'Azure OpenAI',
        'Microsoft Copilot',
        'GPT4All',
        'AI-assisted SQL change summaries',
      ],
    },
  ],
  about: [
    'I’m a Cape Town-based developer working across Power BI, SQL, Python and Microsoft Fabric. My experience spans data integration operations, team leadership and BI development.',
  ],
  contactHeading: 'Contact',
  contactText:
    'Contact me about Data Engineering, BI Engineering, Analytics Engineering or Data & AI Engineering roles.',
};
