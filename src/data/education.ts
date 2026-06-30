export interface EducationEntry {
  id: string
  school: string
  degree: string
  period?: string
}

export const education: EducationEntry[] = [
  {
    id: 'cu',
    school: 'Cairo University',
    degree: 'B.Sc. Computer and Communication Engineering',
    period: '2021 - 2026',
  },
]

export const certifications: EducationEntry[] = [
  {
    id: 'ibm-cyber',
    school: 'IBM',
    degree: 'Cybersecurity Analyst Professional Certificate',
  },
  {
    id: 'istqb',
    school: 'ISTQB',
    degree: 'Foundation Level',
  },
  {
    id: 'google-marketing',
    school: 'Google',
    degree: 'Digital Marketing Certificate',
  },
]
