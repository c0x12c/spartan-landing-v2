import mobileIcon from '@/assets/images/icons/mobile.svg';
import webIcon from '@/assets/images/icons/web.svg';
import backendIcon from '@/assets/images/icons/backend.svg';
import cloudIcon from '@/assets/images/icons/cloud.svg';
import emergingIcon from '@/assets/images/icons/emerging.svg';
import questionIcon from '@/assets/images/icons/question.svg';
import { StaticImageData } from 'next/image';

export type ServiceType = {
  id: string;
  label: string;
  href: string;
  content: string;
  icon: StaticImageData;
  detail: {
    id: string;
    name: string;
    content: string;
  }[];
};

export const Services: ServiceType[] = [
  {
    id: 'service-2',
    label: 'Web Development',
    href: '/services/web-development',
    content: 'We help enterprises navigating the best of the digital',
    icon: webIcon,
    detail: [
      {
        id: 'service-detail-2.1',
        name: 'ReactJS',
        content:
          'Create dynamic and interactive web applications with React’s component-based architecture.',
      },
      {
        id: 'service-detail-2.2',
        name: 'Angular',
        content:
          'Develop modern and feature-rich web applications with Angular’s modular architecture and TypeScript.',
      },
    ],
  },
  {
    id: 'service-1',
    label: 'Mobile App Development',
    href: '/services/mobile-app',
    content: 'We help enterprises navigating the best of the digital',
    icon: mobileIcon,
    detail: [
      {
        id: 'service-detail-1.1',
        name: 'IOS',
        content:
          'Exceptional iOS experiences powered by elegant and high-performance Swift language.',
      },
      {
        id: 'service-detail-1.2',
        name: 'Android',
        content: 'Craft exceptional apps with Kotlin’s expressive syntax and native performance.',
      },
    ],
  },
  {
    id: 'service-4',
    label: 'Cloud Solutions',
    href: '/services/cloud',
    content: 'We help enterprises navigating the best of the digital',
    icon: cloudIcon,
    detail: [
      {
        id: 'service-detail-4.1',
        name: 'AWS',
        content:
          'Build and manage scalable and reliable cloud infrastructure with the power of Amazon Web Services (AWS)',
      },
      {
        id: 'service-detail-4.2',
        name: 'Google Cloud',
        content:
          'Drive business success with secure and flexible cloud solutions powered by Google’s robust infrastructure.',
      },
      {
        id: 'service-detail-4.3',
        name: 'Azure',
        content:
          'Tap into Microsoft Azure’s cutting-edge capabilities for innovation, agility, and scale in digital transformation.',
      },
      {
        id: 'service-detail-4.4',
        name: 'Kubernetes',
        content:
          'Efficiently manage and scale containerized applications with Kubernetes for optimized resource utilization',
      },
    ],
  },
  {
    id: 'service-5',
    label: 'Emerging Technologies',
    href: '/services/emerging-technologies',
    content: 'We help enterprises navigating the best of the digital',
    icon: emergingIcon,
    detail: [
      {
        id: 'service-detail-5.1',
        name: 'ChatGPT AI Integration',
        content:
          'Transform applications with the power of ChatGPT’s AI for intelligent automation and enhanced user experiences.',
      },
      {
        id: 'service-detail-5.2',
        name: 'IoT',
        content:
          'Empower organizations with IoT solutions for effortless device connectivity and smart automation',
      },
      {
        id: 'service-detail-5.3',
        name: 'Real-time data streaming',
        content:
          'Harness the power of Flink for seamless processing and analysis of continuous data streams, enabling real-time decision-making ',
      },
    ],
  },
  {
    id: 'service-3',
    label: 'Backend Development',
    href: '/services/backend',
    content: 'We help enterprises navigating the best of the digital',
    icon: backendIcon,
    detail: [
      {
        id: 'service-detail-3.1',
        name: 'Kotlin',
        content:
          'Clean, efficient, and maintainable backend applications with Kotlin’s strong type system and functional programming features.',
      },
      {
        id: 'service-detail-3.2',
        name: 'Java',
        content:
          'Robust and scalable backend architectures using Java’s mature ecosystem and battle-tested design patterns.',
      },
      {
        id: 'service-detail-3.3',
        name: 'C#',
        content: 'Enterprise-grade backend systems with the versatility of C#.',
      },
    ],
  },
  {
    id: 'service-6',
    label: 'How Spartan operates',
    href: '/spartan-operates',
    content: 'We help enterprises navigating the best of the digital',
    icon: questionIcon,
    detail: [],
  },
];
