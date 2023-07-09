import mobileIcon from '@/assets/images/icons/mobile.svg';
import webIcon from '@/assets/images/icons/web.svg';
import backendIcon from '@/assets/images/icons/backend.svg';
import cloudIcon from '@/assets/images/icons/cloud.svg';
import emergingIcon from '@/assets/images/icons/emerging.svg';
import questionIcon from '@/assets/images/icons/question.svg';

import appleIcon from '@/assets/images/stacks/Apple.svg';
import androidIcon from '@/assets/images/stacks/Android.svg';
import reactIcon from '@/assets/images/stacks/React.svg';
import angularIcon from '@/assets/images/stacks/Angular.svg';
import kotlinIcon from '@/assets/images/stacks/Kotlin.svg';
import javaIcon from '@/assets/images/stacks/Java.svg';
import cSharpIcon from '@/assets/images/stacks/CSharp.svg';
import AWSIcon from '@/assets/images/stacks/AWS.svg';
import GGCloudIcon from '@/assets/images/stacks/GGCloud.svg';
import azureIcon from '@/assets/images/stacks/Azure.svg';
import kubernetesIcon from '@/assets/images/stacks/Kubernetes.svg';
import chatGPTIcon from '@/assets/images/stacks/ChatGPT.svg';
import IOTIcon from '@/assets/images/stacks/IOT.svg';
import RTSIcon from '@/assets/images/stacks/RTS.svg';

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

export enum ServicesEnum {
  WEB = 'web',
  MOBILE = 'mobile',
  CLOUD = 'cloud',
  BACKEND = 'backend',
  EMERGING = 'emerging',
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
          "Craft Exceptional Apps with Kotlin's Expressive Syntax and Native Performance.",
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
          "Create dynamic and interactive web applications with the power of react's component-based architecture",
        icon: reactIcon,
      },
      {
        id: `${ServicesEnum.WEB}-content-4`,
        title: 'Angular',
        description:
          "Embrace angular's modular architecture and typeScript to develop modern and feature - rich web applications",
        icon: angularIcon,
      },
    ],
  },
  {
    id: `${ServicesEnum.BACKEND}-we-do-3`,
    title: 'Building Strong Foundations for Your Backend',
    type: ServicesEnum.BACKEND,
    description:
      "Our backend development services encompass Kotlin and Java, allowing us to create clean, efficient, and maintainable backend applications. We utilize the strengths of Kotlin's strong type system and Java's mature ecosystem to deliver reliable backend solutions.",
    content: [
      {
        id: `${ServicesEnum.BACKEND}-content-5`,
        title: 'Kotlin',
        description:
          "Leverage Kotlin's strong type system, null safety, and functional programming features to create clean, efficient, and highly maintainable backend applications",
        icon: kotlinIcon,
      },
      {
        id: `${ServicesEnum.BACKEND}-content-6`,
        title: 'Java',
        description:
          "Build robust, secure, and scalable backend architectures using Java's mature ecosystem, enterprise-level libraries, and battle-tested design patterns",
        icon: javaIcon,
      },
      {
        id: `${ServicesEnum.BACKEND}-content-7`,
        title: 'C#',
        description:
          'Create Robust, Secure, and Enterprise-Grade Backend Systems with the Versatility of C#',
        icon: cSharpIcon,
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
          'Leverage the Power of Amazon Web Services (AWS) to Build and Manage Your Cloud Infrastructure with Unmatched Scalability and Reliability',
        icon: AWSIcon,
      },
      {
        id: `${ServicesEnum.CLOUD}-content-9`,
        title: 'Google Cloud',
        description:
          "Drive Business Success with Secure and Flexible Cloud Solutions Powered by Google's Robust and Innovative Cloud Infrastructure.",
        icon: GGCloudIcon,
      },
      {
        id: `${ServicesEnum.CLOUD}-content-10`,
        title: 'Azure',
        description:
          "Tap into Microsoft Azure's Cutting-Edge Cloud Capabilities to Drive Innovation, Agility, and Scale in Your Organization's Digital Transformation Journey",
        icon: azureIcon,
      },
      {
        id: `${ServicesEnum.CLOUD}-content-11`,
        title: 'Kubernetes',
        description:
          'Harness Kubernetes to efficiently manage and scale your containerized applications, enabling seamless deployment and optimized resource utilization',
        icon: kubernetesIcon,
      },
    ],
  },
  {
    id: `${ServicesEnum.EMERGING}-we-do-5`,
    title: 'Transforming Industries with Emerging Tech',
    type: ServicesEnum.EMERGING,
    description:
      'Our emerging technologies expertise includes ChatGPT AI Integration, IoT solutions, and real-time data streaming using Flink. We empower businesses with smart automation, enhanced user experiences, and real-time actionable insights',
    content: [
      {
        id: `${ServicesEnum.EMERGING}-content-12`,
        title: 'ChatGPT AI',
        description:
          "Transform Your Applications with the Power of ChatGPT's Artificial Intelligence, Infusing Them with Smart Automation and Actionable Insights for Enhanced User Experiences and Business Efficiency.",
        icon: chatGPTIcon,
      },
      {
        id: `${ServicesEnum.EMERGING}-content-13`,
        title: 'IoT',
        description:
          'Empower Your Organization with Internet of Things (IoT) Solutions to Effortlessly Connect and Control Devices, Enabling Smart Automation and Enhanced Efficiency for a Connected Future.',
        icon: IOTIcon,
      },
      {
        id: `${ServicesEnum.EMERGING}-content-14`,
        title: 'Real-time data streaming',
        description:
          'Harness the Power of Flink for Seamless Processing and Analysis of Continuous Data Streams, Empowering Organizations with Instant, Actionable Insights for Real-time Decision-making',
        icon: RTSIcon,
      },
    ],
  },
];
