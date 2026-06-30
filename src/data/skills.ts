export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      'Python',
      'C++',
      'C',
      'VHDL',
      'TypeScript',
      'JavaScript',
      'C#',
      'SQL',
      'R',
      'ARM Assembly',
      
    ],
  },
  {
    category: 'Frontend & Mobile',
    skills: [
      'React.js',
      'HTML',
      'CSS',
      'Flutter',
      'BLoC',
      'Provider',
    ],
  },
  
  {
    category: 'Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Supabase',
      'Database Design',
      'FAISS',
    ],
  },
  {
    category: 'Data Science & AI',
    skills: [
      'Machine Learning',
      'Kaggle',
      'NLP',
      'Computer Vision',
      'PySpark',
      'Hadoop',
      'Power BI',
      'Data Visualization',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Virtualization',
    ],
  },
  {
    category: 'Hardware & EDA',
    skills: [
      'Synopsys Custom Compiler',
      'Analog Layout',
      'SCADA',
      'DRC / LVS Verification',
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      'Git',
      'Vite',
      'GitHub',
      'Visual Studio Code',
      'Visual Studio',
      'IntelliJ IDEA',
    ],
  },
];