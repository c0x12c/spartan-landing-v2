type EmploymentType = 'full-time' | 'part-time';
export type ExperienceLevel = 'junior' | 'trainee' | 'middle' | 'senior';

export interface Job {
  id: string;
  position: string;
  salary: string;
  tags: string;
  experience_level: ExperienceLevel[];
  employment_type: EmploymentType;
}

export const vacancies: Job[] = [
  {
    id: '1',
    position: 'Software Engineer',
    salary: '8000',
    tags: 'backend',
    experience_level: ['junior'],
    employment_type: 'full-time',
  },
  {
    id: '2',
    position: 'Frontend Developer',
    salary: '3000',
    tags: 'frontend',
    experience_level: ['trainee', 'junior'],
    employment_type: 'part-time',
  },
  {
    id: '3',
    position: 'Data Analyst',
    salary: '7500',
    tags: 'analytics',
    experience_level: ['junior'],
    employment_type: 'full-time',
  },
  {
    id: '4',
    position: 'UX/UI Designer',
    salary: '8500',
    tags: 'design',
    experience_level: ['trainee', 'middle'],
    employment_type: 'full-time',
  },
  {
    id: '5',
    position: 'Backend Developer',
    salary: '9000',
    tags: 'backend',
    experience_level: ['senior'],
    employment_type: 'full-time',
  },
  {
    id: '6',
    position: 'Product Manager',
    salary: '9500',
    tags: 'management',
    experience_level: ['senior', 'middle'],
    employment_type: 'full-time',
  },
  {
    id: '7',
    position: 'QA Engineer',
    salary: '6500',
    tags: 'testing',
    experience_level: ['junior'],
    employment_type: 'part-time',
  },
];
