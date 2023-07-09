export type ProcessType = {
  id: string;
  title: string;
  content: string;
};

export const HiringProcessData = [
  {
    id: 'hiring-1',
    title: 'Resume Review',
    content:
      "We meticulously review each candidate's resume, paying attention to their skills, experiences, and achievements. We go beyond the surface level and dive deep into understanding their potential to contribute to our team.",
  },
  {
    id: 'hiring-2',
    title: 'Coding Interview',
    content:
      'The interview will last at least 1+ hour, including a mix of coding exercises, problem-solving challenges, and technical questions. The interview consists of only four categories, each with four possible scores. These categories are algorithms, coding, communication, and problem-solving.',
  },
  {
    id: 'hiring-3',
    title: 'Behavioral Interview',
    content:
      'We place great emphasis on the behavioral aspect of our candidates. We assess their alignment with our company values, teamwork skills, and ability to adapt to our dynamic work environment. This interview allows us to evaluate their cultural fit within our organization.',
  },
  {
    id: 'hiring-4',
    title: 'Decision Making',
    content:
      'Following the interviews, we provide constructive feedback to the candidate, highlighting their strengths and areas for improvement. If the outcome is positive, we extend an offer letter.',
  },
];

export const WorkingProcessData = [
  {
    id: 'working-1',
    title: 'Requirements',
    content:
      'We begin by closely collaborating with your team to thoroughly understand your project requirements. We gather all necessary information and document your specific needs, goals, and expectations.',
  },
  {
    id: 'working-2',
    title: 'Design, Development & Test',
    content:
      'Our experienced team of designers, developers, and testers work together to create a robust solution. We follow industry best practices and leverage cutting-edge technologies to design and develop your project. Throughout the process, we conduct rigorous testing to ensure the functionality, performance, and quality of the solution.',
  },
  {
    id: 'working-3',
    title: 'Deployment',
    content:
      'We work closely with your team to seamlessly deploy your project, ensuring a smooth transition and minimal disruption to your operations. Our deployment strategies prioritize stability, scalability, and security.',
  },
  {
    id: 'working-4',
    title: 'Support and Maintenance',
    content:
      "Our commitment to your success doesn't end with the deployment. We provide ongoing support and maintenance services to ensure your project continues to perform optimally. We promptly address any issues, implement updates and enhancements, and provide technical assistance as needed.",
  },
];

export const SubWorkingProcessData = [
  {
    id: 'sub-working-1',
    title: 'Requirements',
    content: "Understand your app's vision and objectives.",
  },
  {
    id: 'sub-working-2',
    title: 'Design',
    content: 'Create intuitive and visually appealing app interfaces.',
  },
  {
    id: 'sub-working-3',
    title: 'Development & Test',
    content: 'Build and test robust mobile app features.',
  },
  {
    id: 'sub-working-4',
    title: 'Deployment',
    content: 'Launch your app to the desired platforms and app stores.',
  },
  {
    id: 'sub-working-5',
    title: 'Maintain & Support',
    content: 'Provide ongoing support and updates for your app.',
  },
];
