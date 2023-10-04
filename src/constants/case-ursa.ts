import AWS from '@/assets/images/stacks/AWS.svg';
import JavaScript from '@/assets/images/stacks/JavaScript.svg';
import Jenkins from '@/assets/images/stacks/Jenkins.svg';
import SendGrid from '@/assets/images/stacks/SendGrid.svg';
import React from '@/assets/images/stacks/React.svg';
import Twillio from '@/assets/images/stacks/Twillio.svg';
import Agora from '@/assets/images/stacks/Agora.svg';
import Micronaut from '@/assets/images/stacks/Micronaut.svg';
import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import TypeScript from '@/assets/images/stacks/Typescript.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
import infraIcon from '@/assets/images/icons/infra.svg';
import backendIcon from '@/assets/images/icons/db.svg';
import feIcon from '@/assets/images/icons/fe.svg';

import { FieldType } from './stacks';

export const DataWeDoUrsa = [
  {
    id: 'ursa-we-do-1',
    title: 'Infrastructure',
    bgIcon: '#FB8189',
    description:
      'Our team handles the setup and configuration of the necessary infrastructure components, ensuring a strong and scalable foundation.',
    icon: infraIcon,
  },
  {
    id: 'ursa-we-do-2',
    title: 'Backend Development',
    bgIcon: '#FBB37D',
    description:
      'Our experienced developers use Kotlin to build a robust backend that covers essential functionalities like user management, authentication, video streaming logic, and API integrations.',
    icon: backendIcon,
  },
  {
    id: 'ursa-we-do-3',
    title: 'Frontend Development',
    bgIcon: '#A744DB',
    description:
      'With React, we create a visually appealing and user-friendly interface for your streaming website, focusing on delivering an immersive experience across devices.',
    icon: feIcon,
  },
];

export const UrsaStacks: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Languages',
    stacks: [
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-6', name: 'Typescript', imgSrc: TypeScript },
      { id: 'stack-8', name: 'Javascript', imgSrc: JavaScript },
      { id: 'stack-7', name: 'HCL', imgSrc: HCL },
    ],
  },
  {
    id: 'field-2',
    name: 'Frameworks',
    stacks: [
      { id: 'stack-9', name: 'Micronaut', imgSrc: Micronaut },
      { id: 'stack-10', name: 'React', imgSrc: React },
    ],
  },
  {
    id: 'field-3',
    name: 'Platforms',
    stacks: [
      { id: 'stack-14', name: 'Agora', imgSrc: Agora },
      { id: 'stack-15', name: 'Twillio', imgSrc: Twillio },
      { id: 'stack-16', name: 'SendGrid', imgSrc: SendGrid },
    ],
  },
  {
    id: 'field-4',
    name: 'Databases',
    stacks: [
      { id: 'stack-21', name: 'PostgreSQL', imgSrc: PostgreSQL },
      { id: 'stack-22', name: 'Redis', imgSrc: Redis },
    ],
  },
  {
    id: 'field-5',
    name: 'Infrastructures',
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

export const DataURSAResult = [
  {
    id: 'ursa-result-1',
    text: 'The streaming website was successfully launched and underwent multiple significant updates.',
  },
  {
    id: 'ursa-result-2',
    text: 'Numerous livestream events featuring talented artists were hosted, attracting a dedicated fan base.',
  },
  {
    id: 'ursa-result-3',
    text: 'The website provided a seamless and immersive streaming experience.',
  },
  {
    id: 'ursa-result-4',
    text: 'An app version of the platform is scheduled to be launched later this year.',
  },
];
