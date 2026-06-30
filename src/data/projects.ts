export interface Project {
  id: string
  title: string
  description: string
  category: 'ai' | 'cloud' | 'fullstack' | 'data' | 'systems' | 'hardware'
  featured?: boolean
  status?: 'Completed' | 'Research' | 'In Progress'
  repo: string
  demo?: string
  tags: string[]
}

export const projects: Project[] = [
  // Featured Projects
  {
  id: 'athar',
  title: 'ATHAR — Multi-Camera Object Tracking & Re-Identification',
  category: 'ai',
  featured: true,
  status: 'Completed',
  repo: 'https://github.com/MRKDaGods/gp',
  description:
    'Graduation project ranked among the Top 3 Computer Engineering projects at Cairo University. Built a seven-stage AI pipeline for cross-camera vehicle and person tracking using YOLO, BoT-SORT, TransReID, CLIP, and FAISS, achieving state-of-the-art 93.3% mAP on VeRi-776 and 94.6% MTMC IDF1 on WILDTRACK. A research paper is currently in preparation.',
  tags: [
    'Python',
    'Computer Vision',
    'YOLO',
    'BoT-SORT',
    'TransReID',
    'CLIP',
    'FAISS',
    'FastAPI',
    'Next.js',
  ],
},
  {
  id: 'cloud-platform',
  title: 'Cloud-Native Social Platform',
  category: 'cloud',
  featured: true,
  status: 'Completed',
  repo: 'https://github.com/seifheakal/cloud',
  description:
    'Designed and deployed a cloud-native microservices social platform on AWS using Kubernetes. Implemented EKS, ALB Ingress, PostgreSQL, Valkey, SNS/SQS, GitHub OIDC CI/CD, and production-style load, resilience, and recovery testing while balancing scalability, reliability, and cost.',
  tags: [
    'AWS',
    'EKS',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'SNS',
    'SQS',
    'CI/CD',
    'Microservices',
    'System Design',
  ],
},
  {
    id: 'email-ai',
    title: 'AI Email Assistant',
    description:
    'AI-powered email assistant that summarizes emails and attachments, classifies messages, drafts intelligent replies, and automates inbox workflows using modern LLMs.',
    category: 'ai',
    featured: true,
    status: 'In Progress',
    repo: 'https://github.com/seifheakal/workflow',
    tags: [
'Python',
'LLMs',
'NLP',
'Automation',
'FastAPI'
],
  },
  {
    id: 'cvz',
    title: 'AI CV Optimizer',
    description:
      'ATS-aware resume optimizer that analyzes resumes against job descriptions, generates AI feedback, and exports optimized LaTeX resumes.',
    category: 'ai',
    featured: true,
    status: 'In Progress',
    repo: 'https://github.com/seifheakal/cvz',
    tags:[
'Next.js',
'TypeScript',
'OpenAI',
'GitHub Copilot SDK',
'LaTeX'
],
  },
  {
    id: 'ascend',
    title: 'Ascend',
    description:
      'Scalable LinkedIn-inspired social platform featuring authentication, messaging, jobs, notifications, payments, and a microservices architecture with web and mobile clients.',
    category: 'fullstack',
    featured: true,
    status: 'Completed',
    repo: 'https://github.com/seifheakal/ascend',
    tags: ['Next.js', 'Flutter', 'Microservices', 'TypeScript'],
  },

  // AI
  {
  id: 'ai-web-testing',
  title: 'AI Web Testing Platform',
  category: 'ai',
  status: 'Completed',
  repo: 'https://github.com/seifheakal/gennai',
  description:
    'AI-powered software testing platform that automatically explores web applications, detects UI and functional issues, generates detailed bug reports, identifies root causes, and recommends fixes. Built to automate quality assurance using LLM-driven reasoning and browser automation.',
  tags: [
    'Python',
    'LLMs',
    'Playwright',
    'Automation',
    'Software Testing',
    'AI',
    'QA',
  ],
},
  {
    id: 'crop-detection',
    title: 'Crop & Weed Detection',
    description:
      'Computer vision pipeline for crop and weed detection using image segmentation and classification, benchmarked against multiple deep learning models.',
    category: 'ai',
    status: 'Completed',
    repo: '',
    tags: ['Python', 'Computer Vision', 'Machine Learning'],
  },
  {
    id: 'nlp',
    title: 'NLP Experiments',
    description:
     'Collection of natural language processing experiments covering preprocessing, embeddings, feature engineering, and language understanding techniques.',
    category: 'ai',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/nlp',
    tags: ['Python', 'NLP'],
  },

  // Data
  {
    id: 'big-data',
    title: 'Big Data Analytics',
    description:
'Distributed analytics workflows using Hadoop and PySpark for processing and analyzing large-scale datasets.',
    category: 'data',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/big-data',
    tags: ['PySpark', 'Hadoop', 'Big Data'],
  },

  {
    id: 'alfa-labs',
    title: 'Medical Laboratory Management System',
    description:
      'Database-driven laboratory management platform with SQL-backed data management and a web frontend.',
    category: 'fullstack',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/Alfa-Labs-Frontend',
    tags: ['SQL Server', 'Database Design'],
  },

  // Systems
  {
    id: 'scheduler',
    title: 'CPU Scheduling Simulator',
    description:
      'Simulation of Round Robin, Priority Scheduling, and Shortest Remaining Time Next scheduling algorithms.',
    category: 'systems',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/OS-Project',
    tags: ['C', 'Operating Systems'],
  },
  {
    id: 'network',
    title: 'Reliable Data Transfer Simulator',
    description:
      'Implementation and simulation of the Go-Back-N protocol using OMNeT++.',
    category: 'systems',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/Computer-Networks',
    tags: ['C++', 'OMNeT++', 'Networking'],
  },

  // Hardware
  {
    id: 'cpu',
    title: 'Five-Stage Pipelined CPU',
    description:
'Five-stage pipelined processor implemented in VHDL featuring forwarding, hazard detection, and dynamic branch prediction.',
    category: 'hardware',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/Computer-Architecture',
    tags: ['VHDL', 'Pipeline', 'CPU Design'],
  },
  {
    id: 'raspberry-pi',
    title: 'Raspberry Pi Bare Metal',
    description:
'Bare-metal ARM development on Raspberry Pi featuring framebuffer graphics, custom bootloader, hardware programming, and an AI-powered Pong game.',
    category: 'hardware',
    status: 'Completed',
    repo: 'https://github.com/seifheakal/RaspberryPi-3B-BareMetal',
    tags: ['ARM Assembly', 'Bare Metal', 'Bootloader'],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const aiProjects = projects.filter((p) => p.category === 'ai')
export const cloudProjects = projects.filter((p) => p.category === 'cloud')
export const dataProjects = projects.filter((p) => p.category === 'data')
export const fullStackProjects = projects.filter((p) => p.category === 'fullstack')
export const systemsProjects = projects.filter((p) => p.category === 'systems')
export const hardwareProjects = projects.filter((p) => p.category === 'hardware')