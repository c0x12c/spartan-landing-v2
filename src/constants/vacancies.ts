export enum EnrollmentStatus {
  FULL_TIME = 'full-time',
  PART_TIME = 'part-time',
  ALL_TYPE = 'all-type',
}
export enum Location {
  REMOTE = 'remote',
  OFFICE = 'office',
}
export enum ExperienceLevel {
  FRESHER = 'fresher',
  JUNIOR = 'junior',
  MIDDLE = 'middle',
  SENIOR = 'senior',
  ALL_LEVEL = 'all-level',
}
export enum JobTag {
  FRONTEND = 'front-end',
  ANDROID = 'android',
  BACKEND = 'backend',
  ANALYTICS = 'analytics',
  DESIGN = 'design',
  TESTING = 'testing',
  MANAGEMENT = 'management',
  ALL_JOB = 'all-job',
}

export const listEmploymentType = [
  { id: 'employment-type-1', name: 'Full time', value: EnrollmentStatus['FULL_TIME'] },
  { id: 'employment-type-2', name: 'Part time', value: EnrollmentStatus['PART_TIME'] },
  { id: 'employment-type-3', name: 'All', value: EnrollmentStatus['ALL_TYPE'] },
];

export const listExperienceLevel = [
  { id: 'employment-level-1', name: 'Fresher', value: ExperienceLevel['FRESHER'] },
  { id: 'employment-level-2', name: 'Junior', value: ExperienceLevel['JUNIOR'] },
  { id: 'employment-level-3', name: 'Middle', value: ExperienceLevel['MIDDLE'] },
  { id: 'employment-level-4', name: 'Senior', value: ExperienceLevel['SENIOR'] },
  { id: 'employment-level-5', name: 'All level', value: ExperienceLevel['ALL_LEVEL'] },
];

export const listJobTag = [
  { id: 'job-tag-1', name: 'Frontend', value: JobTag['FRONTEND'] },
  { id: 'job-tag-2', name: 'Backend', value: JobTag['BACKEND'] },
  { id: 'job-tag-3', name: 'Analytics', value: JobTag['ANALYTICS'] },
  { id: 'job-tag-4', name: 'Design', value: JobTag['DESIGN'] },
  { id: 'job-tag-8', name: 'Android', value: JobTag['ANDROID'] },
  { id: 'job-tag-5', name: 'Testing', value: JobTag['TESTING'] },
  { id: 'job-tag-6', name: 'Management', value: JobTag['MANAGEMENT'] },
  { id: 'job-tag-7', name: 'All level', value: JobTag['ALL_JOB'] },
];

export interface Job {
  id: string;
  position: string;
  salary: string;
  tag: JobTag;
  location: Location[];
  requirements: string[];
  aboutJob: string;
  responsibilities: string[];
  technologies: string[];
  skills: string[];
  experienceLevel: ExperienceLevel;
  enrollmentStatus: EnrollmentStatus[];
}

export const vacancies: Job[] = [
  {
    id: 'job-6',
    position: 'Android Engineer',
    salary: '2000',
    tag: JobTag['ANDROID'],
    skills: ['Kotlin', 'Java'],
    requirements: [
      'Bachelor`s degree in Computer Science or related field',
      '3+ years of experience with native Android development.',
      'Excellent understanding of computer science fundamentals, data structures, and algorithms.',
      'Experience developing native Android applications in Java/Kotlin.',
      'Deep understanding of the value of dependency injection and testing.',
      'Experience with one of the following Android architecture patterns: MVP, MVVM, MVI.',
    ],
    technologies: [
      'Java/Kotlin',
      'RxJava/RxKotlin or Kotlin Coroutines for reactive paradigm.',
      'Dagger for DI.',
    ],
    responsibilities: [
      'Be part of the engineering team where we architecture and implement new features.',
      'Build Android applications for various startups.',
      'Strong focus on high-quality mobile UI.',
      'Work closely with various business partners (backend, UI/UX).',
      'Writing functional and integration tests.',
    ],
    aboutJob:
      'We are looking for an experienced Senior Android Engineer to join our Spartan Team. Who is passionate about building, testing, and working closely with various stakeholders to deliver top-notch software. You will be able to solve challenging problems, work with the latest tech stack, and work with talented engineers to contribute meaningfully.',
    location: [Location['REMOTE']],
    experienceLevel: ExperienceLevel['SENIOR'],
    enrollmentStatus: [EnrollmentStatus['FULL_TIME'], EnrollmentStatus['PART_TIME']],
  },
  {
    id: 'job-7',
    position: 'QA Engineer',
    salary: '2000',
    requirements: [
      'Bachelor`s degree in Computer Science or related field',
      '3+ years of experience with native Android development.',
      'Excellent understanding of computer science fundamentals, data structures, and algorithms.',
      'Experience developing native Android applications in Java/Kotlin.',
      'Deep understanding of the value of dependency injection and testing.',
      'Experience with one of the following Android architecture patterns: MVP, MVVM, MVI.',
    ],
    technologies: [
      'Java/Kotlin',
      'RxJava/RxKotlin or Kotlin Coroutines for reactive paradigm.',
      'Dagger for DI.',
    ],
    responsibilities: [
      'Be part of the engineering team where we architecture and implement new features.',
      'Build Android applications for various startups.',
      'Strong focus on high-quality mobile UI.',
      'Work closely with various business partners (backend, UI/UX).',
      'Writing functional and integration tests.',
    ],
    aboutJob:
      'We are looking for an experienced Senior Android Engineer to join our Spartan Team. Who is passionate about building, testing, and working closely with various stakeholders to deliver top-notch software. You will be able to solve challenging problems, work with the latest tech stack, and work with talented engineers to contribute meaningfully.',
    tag: JobTag['TESTING'],
    location: [Location['REMOTE']],
    skills: ['Symfony', 'Lavarel', 'PHP'],
    experienceLevel: ExperienceLevel['JUNIOR'],
    enrollmentStatus: [EnrollmentStatus['PART_TIME'], EnrollmentStatus['PART_TIME']],
  },
];
