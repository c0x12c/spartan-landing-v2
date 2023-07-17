import AWS from '@/assets/images/stacks/AWS.svg';
import JavaScript from '@/assets/images/stacks/JavaScript.svg';
import Jenkins from '@/assets/images/stacks/Jenkins.svg';
import Coinmarketcap from '@/assets/images/stacks/Coinmarketcap.svg';
import MongoDB from '@/assets/images/stacks/MongoDB.svg';
import Alchemy from '@/assets/images/stacks/Alchemy.svg';
import Micronaut from '@/assets/images/stacks/Micronaut.svg';
import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import TypeScript from '@/assets/images/stacks/Typescript.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import Go from '@/assets/images/stacks/Go.svg';
import Swift from '@/assets/images/stacks/Swift.svg';
import React from '@/assets/images/stacks/React.svg';
import Echo from '@/assets/images/stacks/Echo.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
import { StaticImageData } from 'next/image';
import { FieldType } from './stacks';

export const DataWeDo = [
  {
    id: 'we-do-1',
    title: 'Defined requirements and architecture',
    content:
      'Defined the requirements by conducting meetings with Volta to understand their needs. Proposed a suitable architecture for the crypto wallet application, including the mobile applications (iOS and Android) and the backend platform.',
  },
  {
    id: 'we-do-2',
    title: 'Developed a solid backend and infrastructure for Volta Wallet',
    content:
      'Developed secure iOS and Android applications with top security measures. Implemented functionality for creating and backing up cryptocurrency wallets using encryption techniques. Built the AppClip and Instant App feature:',
  },
  {
    id: 'we-do-3',
    title: 'Implemented the appclip and Instant app feature for Volta Wallet.',
    content:
      'Enabled users to create a new account without installing the full app. Utilized during promotional campaigns, providing users with a free Skin NFT for their app. Built backend and infrastructure:',
  },
  {
    id: 'we-do-4',
    title: ' Developed a solid backend and infrastructure for Volta Wallet.',
    content:
      'Implemented a system that is easily monitored, maintained, and scalable. Used technologies like Kotlin, Go, Swift, JavaScript, TypeScript, HCL.',
  },
];

export type StackType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
};

export const VoltaStacks: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Language',
    stacks: [
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-1', name: 'Golang', imgSrc: Go },
      { id: 'stack-3', name: 'Swift', imgSrc: Swift },
      { id: 'stack-6', name: 'Typescript', imgSrc: TypeScript },
      { id: 'stack-8', name: 'Javascript', imgSrc: JavaScript },
      { id: 'stack-7', name: 'HCL', imgSrc: HCL },
    ],
  },
  {
    id: 'field-2',
    name: 'Framework',
    stacks: [
      { id: 'stack-9', name: 'Micronaut', imgSrc: Micronaut },
      { id: 'stack-10', name: 'Echo', imgSrc: Echo },
      { id: 'stack-11', name: 'React', imgSrc: React },
    ],
  },
  {
    id: 'field-3',
    name: 'Platform',
    stacks: [
      { id: 'stack-14', name: 'Alchemy', imgSrc: Alchemy },
      { id: 'stack-15', name: 'Coinmarketcap', imgSrc: Coinmarketcap },
    ],
  },
  {
    id: 'field-4',
    name: 'Databases',
    stacks: [
      { id: 'stack-21', name: 'PostgreSQL', imgSrc: PostgreSQL },
      { id: 'stack-23', name: 'MongoDB', imgSrc: MongoDB },
      { id: 'stack-22', name: 'Redis', imgSrc: Redis },
    ],
  },
  {
    id: 'field-5',
    name: 'Infrastructure',
    stacks: [
      { id: 'stack-24', name: 'Docker', imgSrc: Docker },
      { id: 'stack-25', name: 'Kubernetes', imgSrc: Kubernetes },
      { id: 'stack-26', name: 'TerraForm', imgSrc: TerraForm },
      { id: 'stack-27', name: 'AWS', imgSrc: AWS },
    ],
  },
  {
    id: 'field-6',
    name: 'CI/CD',
    stacks: [{ id: 'stack-29', name: 'Jenkins', imgSrc: Jenkins }],
  },
];

export const DataVoltaResult = [
  {
    id: 'result-1',
    text: 'Established a robust backend and infrastructure that is easily monitored and maintained',
  },
  {
    id: 'result-2',
    text: 'Created attractive and user-friendly mobile applications with responsive performance.',
  },
  {
    id: 'result-3',
    text: 'Developed a tool for conducting promotional campaigns and collaborating with sponsors or partners',
  },
];
