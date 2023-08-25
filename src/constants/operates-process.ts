import { primary } from '@/styles/colors';
import StandUpImage from '@/assets/images/spartan-operates/stand-up.webp';
import IterativeDevelopmentImage from '@/assets/images/spartan-operates/iterative-development.webp';
import RetrospectiveImage from '@/assets/images/spartan-operates/retrospective.webp';
import TestDDImage from '@/assets/images/spartan-operates/test-dd.webp';
import { StaticImageData } from 'next/image';

export type OperatesProcessType = {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  sideBgColor: string;
  imgSrc: StaticImageData;
};

export const OperatesProcesses = [
  {
    id: 'process-1',
    title: 'Stand-Up',
    description:
      "We use Slack for our daily stand-up meetings and bi-weekly catch-up meetings. The daily stand-ups facilitate experience sharing among projects, addressing challenges, and seeking solutions. It's a collaborative platform where our engineers can share updates and seek technical advice. The bi-weekly catch-ups provide a broader opportunity to discuss project progress, share insights, and address any issues. By leveraging Slack for these meetings, we ensure effective communication, collaboration, and knowledge exchange within our team.",
    bgColor: 'rgba(12, 86, 239, 0.10)',
    sideBgColor: primary[400],
    imgSrc: StandUpImage,
  },
  {
    id: 'process-2',
    title: 'Iterative Development',
    description:
      'Our development process follows iterative cycles lasting approximately two weeks, allowing us to refine and improve our applications continuously. \n We prioritize avoiding deployments before non-work days to ensure timely resolution of any issues during regular working hours. \n The Product Owner plays a pivotal role in making decisions that maximize immediate business value. Meanwhile, the engineering team assesses challenges and potential engineering risks, proposing prioritization of tasks that need to be addressed first or in the near future, with the understanding that they should not be left until the end of the development cycle. By aligning priorities and addressing risks early on, we enhance efficiency and ensure the successful delivery of our applications.',

    bgColor: 'rgba(13, 178, 117, 0.10)',
    sideBgColor: '#0DB275',
    imgSrc: IterativeDevelopmentImage,
  },
  {
    id: 'process-3',
    title: 'Retrospective',
    description:
      'The team convenes daily to identify and address challenges, fostering an environment of iterative development. Through collaborative discussions, we work together to find effective solutions to these problems. Additionally, our engineering team engages in a weekly iteration call with the client. This call serves as an opportunity to review completed tasks, gather feedback, and plan the upcoming tasks for the next iteration. By maintaining regular communication and involving the client in the process, we ensure alignment, adaptability, and successful progression towards project goals.',
    bgColor: 'rgba(251, 192, 92, 0.10)',
    sideBgColor: '#FBC05C',
    imgSrc: RetrospectiveImage,
  },
  {
    id: 'process-4',
    title: 'Test-Driven Development',
    description:
      'Our engineers adopt a proactive approach by building tests before and during the software development process. This strategy allows us to seamlessly integrate new features into applications, even in production, without significant challenges, increased costs, or additional effort. By implementing automated and continuous testing practices, we ensure that our applications maintain a high level of quality. Our comprehensive test coverage validates a substantial majority, typically ranging from 80% to 100%, of the implemented features and capabilities. This thorough testing process enhances the reliability, stability, and overall performance of our applications, resulting in an exceptional user experience.',
    bgColor: 'rgba(239, 71, 111, 0.10)',
    sideBgColor: '#EF476F',
    imgSrc: TestDDImage,
  },
];
