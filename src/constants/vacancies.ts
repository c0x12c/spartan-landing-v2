export enum EnrollmentStatus {
  FULL_TIME = 'full-time',
  PART_TIME = 'part-time',
  ALL_TYPE = 'all-type',
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
  { id: 'job-tag-5', name: 'Testing', value: JobTag['TESTING'] },
  { id: 'job-tag-6', name: 'Management', value: JobTag['MANAGEMENT'] },
  { id: 'job-tag-7', name: 'All level', value: JobTag['ALL_JOB'] },
];

export interface Job {
  id: string;
  position: string;
  salary: string;
  tag: JobTag;
  experienceLevel: ExperienceLevel[];
  enrollmentStatus: EnrollmentStatus;
}

export const vacancies: Job[] = [
  {
    id: 'job-1',
    position: 'Software Engineer',
    salary: '2000',
    tag: JobTag['BACKEND'],
    experienceLevel: [ExperienceLevel['JUNIOR']],
    enrollmentStatus: EnrollmentStatus['FULL_TIME'],
  },
  {
    id: 'job-2',
    position: 'Frontend Developer',
    salary: '2000',
    tag: JobTag['FRONTEND'],
    experienceLevel: [ExperienceLevel['FRESHER'], ExperienceLevel['JUNIOR']],
    enrollmentStatus: EnrollmentStatus['PART_TIME'],
  },
  {
    id: 'job-3',
    position: 'Data Analyst',
    salary: '2000',
    tag: JobTag['ANALYTICS'],
    experienceLevel: [ExperienceLevel['JUNIOR']],
    enrollmentStatus: EnrollmentStatus['FULL_TIME'],
  },
  {
    id: 'job-4',
    position: 'UX/UI Designer',
    salary: '2000',
    tag: JobTag['DESIGN'],
    experienceLevel: [ExperienceLevel['FRESHER'], ExperienceLevel['MIDDLE']],
    enrollmentStatus: EnrollmentStatus['FULL_TIME'],
  },
  {
    id: 'job-5',
    position: 'Backend Developer',
    salary: '2000',
    tag: JobTag['BACKEND'],
    experienceLevel: [ExperienceLevel['SENIOR']],
    enrollmentStatus: EnrollmentStatus['FULL_TIME'],
  },
  {
    id: 'job-6',
    position: 'Product Manager',
    salary: '2000',
    tag: JobTag['MANAGEMENT'],
    experienceLevel: [ExperienceLevel['SENIOR'], ExperienceLevel['MIDDLE']],
    enrollmentStatus: EnrollmentStatus['FULL_TIME'],
  },
  {
    id: 'job-7',
    position: 'QA Engineer',
    salary: '2000',
    tag: JobTag['TESTING'],
    experienceLevel: [ExperienceLevel['JUNIOR']],
    enrollmentStatus: EnrollmentStatus['PART_TIME'],
  },
];
