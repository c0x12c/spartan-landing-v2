import mobileIcon from '@/assets/images/icons/mobile.svg';
import webIcon from '@/assets/images/icons/web.svg';
import backendIcon from '@/assets/images/icons/backend.svg';
import cloudIcon from '@/assets/images/icons/cloud.svg';
import emergingIcon from '@/assets/images/icons/emerging.svg';

import appleIcon from '@/assets/images/stacks/Apple.svg';
import androidIcon from '@/assets/images/stacks/Android.svg';
import reactIcon from '@/assets/images/stacks/React.svg';
import angularIcon from '@/assets/images/stacks/Angular.svg';
import kotlinIcon from '@/assets/images/stacks/Kotlin.svg';
import AWSIcon from '@/assets/images/stacks/AWS.svg';
import GGCloudIcon from '@/assets/images/stacks/GGCloud.svg';
import azureIcon from '@/assets/images/stacks/Azure.svg';
import kubernetesIcon from '@/assets/images/stacks/Kubernetes.svg';
import chatGPTIcon from '@/assets/images/stacks/ChatGPT.svg';
import IOTIcon from '@/assets/images/stacks/IOT.svg';
import RTSIcon from '@/assets/images/stacks/RTS.svg';
import GoIcon from '@/assets/images/stacks/GoV2.svg';
import RustIcon from '@/assets/images/stacks/RustV2.svg';

import backend from '@/assets/images/services/backend.png';
import web from '@/assets/images/services/web.png';
import mobile from '@/assets/images/services/mobile.png';
import cloud from '@/assets/images/services/cloud.png';
import emerging from '@/assets/images/services/emerging.png';

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
    content: 'Your one-stop web development agency',
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
    content: 'Disruptive and customized mobile solution for all',
    icon: mobileIcon,
    detail: [
      {
        id: 'service-detail-1.1',
        name: 'iOS',
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
    id: 'service-3',
    label: 'Backend Development',
    href: '/services/backend',
    content: 'We build robust and scalable backend systems',
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
    id: 'service-4',
    label: 'Cloud Solutions',
    href: '/services/cloud',
    content: 'Migrate your offline business to the cloud',
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
    content: 'Empower your business with futuristic technology',
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
];

export enum ServicesEnum {
  WEB = 'web',
  MOBILE = 'mobile',
  CLOUD = 'cloud',
  BACKEND = 'backend',
  EMERGING = 'emerging',
  INFRA = 'infrastructure',
  QA = 'QA',
}

export type ServiceContentType = {
  id: string;
  title: string;
  type: ServicesEnum;
  description: string;
  content: { id: string; title: string; description: string; icon: StaticImageData }[];
};

export const ServiceWeDoContent = [
  {
    id: `${ServicesEnum.MOBILE}-we-do-1`,
    title: 'Exceptional mobile experiences, crafted with precision',
    type: ServicesEnum.MOBILE,
    description:
      'We specialize in iOS and Android app development, using Swift and Kotlin to create elegant, high-performance applications. Our expertise also extends to React Native and Flutter for cross-platform development.',
    content: [
      {
        id: `${ServicesEnum.MOBILE}-content-1`,
        title: 'IOS',
        description:
          'Empower your mobile app with the elegant, expressive, and high-performance Swift language for building exceptional iOS experiences.',
        icon: appleIcon,
      },
      {
        id: `${ServicesEnum.MOBILE}-content-2`,
        title: 'Android',
        description:
          'Craft exceptional apps with Kotlin’s expressive syntax and native performance.',
        icon: androidIcon,
      },
    ],
  },
  {
    id: `${ServicesEnum.WEB}-we-do-2`,
    title: 'Dynamic web solutions, powered by innovation',
    type: ServicesEnum.WEB,
    description:
      "Our web development services cover ReactJS and Angular, enabling us to build dynamic and interactive web applications. We leverage React's component-based architecture and Angular's modular approach to deliver modern, feature-rich web solutions.",
    content: [
      {
        id: `${ServicesEnum.WEB}-content-3`,
        title: 'ReactJS',
        description:
          "Create dynamic and interactive web applications with the power of react's component-based architecture.",
        icon: reactIcon,
      },
      {
        id: `${ServicesEnum.WEB}-content-4`,
        title: 'Angular',
        description:
          "Embrace Angular's modular architecture and typeScript to develop modern and feature-rich web applications.",
        icon: angularIcon,
      },
    ],
  },
  {
    id: `${ServicesEnum.BACKEND}-we-do-3`,
    title: 'Building Strong Foundations for Your Backend',
    type: ServicesEnum.BACKEND,
    description:
      "Our backend development services encompass Kotlin, Go, and Rust, allowing us to craft clean, efficient, and maintainable backend applications. We utilize Kotlin's strong type system, Go's efficiency, and Rust's robustness to deliver reliable backend solutions.",
    content: [
      {
        id: `${ServicesEnum.BACKEND}-content-5`,
        title: 'Kotlin',
        description:
          "Leverage Kotlin's strong type system, null safety, and functional programming features to create clean, efficient, and highly maintainable backend applications.",
        icon: kotlinIcon,
      },
      {
        id: `${ServicesEnum.BACKEND}-content-6`,
        title: 'Go',
        description:
          'Build efficient, scalable, and high-performance backend systems with the simplicity and power of Go.',
        icon: GoIcon,
      },
      {
        id: `${ServicesEnum.BACKEND}-content-7`,
        title: 'Rust',
        description:
          "Develop robust and secure backend architectures using Rust's safety features and high-level performance.",
        icon: RustIcon,
      },
    ],
  },
  {
    id: `${ServicesEnum.CLOUD}-we-do-4`,
    title: 'Harness the Power of Cloud Innovation',
    type: ServicesEnum.CLOUD,
    description:
      'Our cloud solutions expertise covers AWS, Google Cloud, Azure, and Kubernetes. We help businesses build and manage scalable cloud infrastructures, ensuring unmatched scalability, reliability, and innovation.',
    content: [
      {
        id: `${ServicesEnum.CLOUD}-content-8`,
        title: 'AWS',
        description:
          'Leverage the power of Amazon Web Services (AWS) to build and manage your cloud infrastructure with unmatched scalability and reliability.',
        icon: AWSIcon,
      },
      {
        id: `${ServicesEnum.CLOUD}-content-9`,
        title: 'Google Cloud',
        description:
          "Drive business success with secure and flexible cloud solutions powered by Google's robust and innovative cloud infrastructure.",
        icon: GGCloudIcon,
      },
      {
        id: `${ServicesEnum.CLOUD}-content-10`,
        title: 'Azure',
        description:
          "Tap into Microsoft Azure's cutting-edge cloud capabilities to drive innovation, agility, and scale in your organization's digital transformation journey.",
        icon: azureIcon,
      },
      {
        id: `${ServicesEnum.CLOUD}-content-11`,
        title: 'Kubernetes',
        description:
          'Harness Kubernetes to efficiently manage and scale your containerized applications, enabling seamless deployment and optimized resource utilization.',
        icon: kubernetesIcon,
      },
    ],
  },
  {
    id: `${ServicesEnum.EMERGING}-we-do-5`,
    title: 'Transforming Industries with Emerging Tech',
    type: ServicesEnum.EMERGING,
    description:
      'Our emerging technologies expertise includes ChatGPT AI integration, IoT solutions, and real-time data streaming using Flink. We empower businesses with smart automation, enhanced user experiences, and real-time actionable insights.',
    content: [
      {
        id: `${ServicesEnum.EMERGING}-content-12`,
        title: 'ChatGPT AI',
        description:
          "Transform your applications with the power of ChatGPT's artificial intelligence, infusing them with smart automation and actionable insights for enhanced user experiences and business efficiency.",
        icon: chatGPTIcon,
      },
      {
        id: `${ServicesEnum.EMERGING}-content-13`,
        title: 'IoT',
        description:
          'Empower your organization with Internet of Things (IoT) solutions to effortlessly connect and control devices, enabling smart automation and enhanced efficiency for a connected future.',
        icon: IOTIcon,
      },
      {
        id: `${ServicesEnum.EMERGING}-content-14`,
        title: 'Real-time data streaming',
        description:
          'Harness the power of Flink for seamless processing and analysis of continuous data streams, empowering organizations with instant, actionable insights for real-time decision-making.',
        icon: RTSIcon,
      },
    ],
  },
];

export type ServiceChooseContentType = {
  id: string;
  title: string;
  type: ServicesEnum;
  imgSrc: StaticImageData;
  content: { id: string; description: string; icon: StaticImageData }[];
};

export const ServiceChooseUsContent = [
  {
    id: `${ServicesEnum.MOBILE}-choose-1`,
    title: 'Trust the experts in mobile app development',
    type: ServicesEnum.MOBILE,
    imgSrc: mobile,
    content: [
      {
        id: `${ServicesEnum.MOBILE}-choose-content-1`,
        description: 'Top-notch engineers skilled in iOS and Android app development.',
      },
      {
        id: `${ServicesEnum.MOBILE}-choose-content-2`,
        description:
          'Expertise in leveraging cutting-edge technologies to create standout mobile apps.',
      },
      {
        id: `${ServicesEnum.MOBILE}-choose-content-3`,
        description:
          'Commitment to delivering exceptional performance, user-centric design, and innovative features.',
      },
    ],
  },
  {
    id: `${ServicesEnum.WEB}-choose-2`,
    title: 'Unleash the potential of web development',
    type: ServicesEnum.WEB,
    imgSrc: web,
    content: [
      {
        id: `${ServicesEnum.WEB}-choose-content-1`,
        description: 'Skilled web developers are proficient in ReactJS and Angular.',
      },
      {
        id: `${ServicesEnum.WEB}-choose-content-2`,
        description:
          'Ability to deliver visually stunning, user-friendly, and scalable web solutions.',
      },
      {
        id: `${ServicesEnum.WEB}-choose-content-3`,
        description:
          'Dedication to staying up-to-date with the latest web development trends and best practices.',
      },
    ],
  },
  {
    id: `${ServicesEnum.BACKEND}-choose-3`,
    title: 'Reliable and scalable backend solutions',
    type: ServicesEnum.BACKEND,
    imgSrc: backend,
    content: [
      {
        id: `${ServicesEnum.BACKEND}-choose-content-1`,
        description: 'Experienced backend developers proficient in Kotlin, Go, and Rust.',
      },
      {
        id: `${ServicesEnum.BACKEND}-choose-content-2`,
        description: 'Focus on creating highly maintainable and scalable backend systems.',
      },
      {
        id: `${ServicesEnum.BACKEND}-choose-content-3`,
        description:
          'Commitment to ensuring robustness, security, and scalability in backend solutions.',
      },
    ],
  },
  {
    id: `${ServicesEnum.CLOUD}-choose-4`,
    title: 'Empowering businesses with cloud excellence',
    type: ServicesEnum.CLOUD,
    imgSrc: cloud,
    content: [
      {
        id: `${ServicesEnum.CLOUD}-choose-content-1`,
        description:
          'Expertise in utilizing industry-leading cloud platforms for unmatched scalability, reliability, and innovation.',
      },
      {
        id: `${ServicesEnum.CLOUD}-choose-content-2`,
        description:
          'Commitment to guiding businesses in harnessing the full potential of cloud technologies.',
      },
      {
        id: `${ServicesEnum.CLOUD}-choose-content-3`,
        description: 'Dedication to ensuring secure and efficient cloud infrastructure management.',
      },
    ],
  },
  {
    id: `${ServicesEnum.EMERGING}-choose-5`,
    title: 'Leading the way in emerging technologies',
    type: ServicesEnum.EMERGING,
    imgSrc: emerging,
    content: [
      {
        id: `${ServicesEnum.EMERGING}-choose-content-1`,
        description:
          'Expertise in integrating emerging technologies to enhance user experiences and business efficiency.',
      },
      {
        id: `${ServicesEnum.EMERGING}-choose-content-2`,
        description:
          'Ability to leverage AI, IoT, and real-time data streaming for innovative and transformative solutions.',
      },
      {
        id: `${ServicesEnum.EMERGING}-choose-content-3`,
        description:
          'Commitment to driving digital innovation and staying at the forefront of emerging technologies.',
      },
    ],
  },
];
