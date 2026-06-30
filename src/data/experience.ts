export interface ExperienceEntry {
  id: string
  title: string
  organization: string
  description: string
  category: 'formal' | 'extras'
}

export const experiences: ExperienceEntry[] = [
  // Professional Experience
  {
    id: 'tagaddod',
    title: 'Full-Stack Intern',
    organization: 'Tagaddod',
    description:
      'Built a React-based CRM with PostgreSQL supporting ~3,000 daily orders and 1,000+ outreach calls. Developed SLA workflows with automated email notifications, reducing complaint response delays by up to 65%, and optimized performance using PostgreSQL stored procedures.',
    category: 'formal',
  },
  {
    id: 'siemens-gamesa',
    title: 'Data Analytics Intern',
    organization: 'Siemens Gamesa',
    description:
      'Worked with Power BI dashboards and SCADA operational data to analyze KPIs, explore industrial analytics, and support data-driven decision making.',
    category: 'formal',
  },
  {
    id: 'si-vision',
    title: 'Analog Layout Design Intern',
    organization: 'Si-Vision',
    description:
      'Designed analog layouts using Synopsys Custom Compiler, applying matching techniques under production constraints. Achieved clean DRC/LVS sign-off and contributed to an active chip design workflow.',
    category: 'formal',
  },
  {
    id: 'huawei',
    title: 'Cloud Computing & Virtualization Intern',
    organization: 'Huawei',
    description:
      'Configured enterprise virtual infrastructure, deployed virtual machines and storage resources, performed live VM migrations, monitored KPIs, and participated in disaster recovery planning.',
    category: 'formal',
  },
  {
    id: 'echem',
    title: 'Engineering Consulting Intern',
    organization: 'Echem',
    description:
      'Gained exposure to feasibility studies, tendering processes, and engineering contract structures within a consulting environment.',
    category: 'formal',
  },

  // Leadership, Competitions & Activities
  {
    id: 'softwaregeya',
    title: '2nd Place — Softwaregeya 2024',
    organization: 'Softwaregeya',
    description:
      'Won second place in a national low-level programming competition by developing an x86 bootloader as part of a team.',
    category: 'extras',
  },
  {
    id: 'tedx',
    title: 'Fundraising Team Member',
    organization: 'TEDx Cairo University',
    description:
      'Secured two corporate sponsorships through outreach, proposal development, and negotiations while supporting event planning and execution.',
    category: 'extras',
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Challenge 2024',
    organization: 'NASA Space Apps',
    description:
      'Built a community mapping platform featuring demographic statistics and accessibility heatmaps using open datasets.',
    category: 'extras',
  },
  {
    id: 'teaching-assistant',
    title: 'Teaching Assistant',
    organization: 'Faculty of Engineering',
    description:
      'Mentored students in mathematics and computer science courses, simplifying complex concepts and supporting problem-solving sessions.',
    category: 'extras',
  },
  {
    id: 'ryla',
    title: 'RYLA Leadership Program',
    organization: 'Rotary International',
    description:
      'Completed an intensive leadership program focused on communication, teamwork, and community impact.',
    category: 'extras',
  },
  {
    id: 'mun',
    title: 'Model United Nations',
    organization: 'AUC',
    description:
      'Developed public speaking, negotiation, and structured debate skills through committee simulations.',
    category: 'extras',
  },
  {
    id: 'british-council',
    title: 'Your World Competition',
    organization: 'British Council',
    description:
      'Strengthened presentation and public speaking skills by communicating ideas effectively to diverse audiences.',
    category: 'extras',
  },
]

export const formalExperience = experiences.filter(
  (e) => e.category === 'formal'
)

export const extrasExperience = experiences.filter(
  (e) => e.category === 'extras'
)