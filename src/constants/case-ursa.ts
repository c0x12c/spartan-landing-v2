import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import Swift from '@/assets/images/stacks/Swift.svg';
import Go from '@/assets/images/stacks/Go.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import TypeScript from '@/assets/images/stacks/Typescript.svg';
import Java from '@/assets/images/stacks/Java.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import MongoDB from '@/assets/images/stacks/MongoDB.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
import infraIcon from '@/assets/images/icons/infra.svg';
import backendIcon from '@/assets/images/icons/db.svg';
import feIcon from '@/assets/images/icons/fe.svg';

import { StaticImageData } from 'next/image';

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

export type StackType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
};

export const UrsaStacks: StackType[] = [
  { id: 'tech-1', name: '[Kotlin]', imgSrc: Kotlin },
  { id: 'tech-2', name: '[Golang]', imgSrc: Go },
  { id: 'tech-3', name: '[Swift]', imgSrc: Swift },
  { id: 'tech-5', name: '[HCL]', imgSrc: HCL },
  { id: 'tech-6', name: '[TypeScript]', imgSrc: TypeScript },
  { id: 'tech-7', name: '[Java]', imgSrc: Java },
  { id: 'tech-8', name: '[PostgreSQL]', imgSrc: PostgreSQL },
  { id: 'tech-9', name: '[MongoDB]', imgSrc: MongoDB },
  { id: 'tech-11', name: '[Redis]', imgSrc: Redis },
  { id: 'tech-10', name: '[Docker]', imgSrc: Docker },
  { id: 'tech-12', name: '[Kubernetes]', imgSrc: Kubernetes },
  { id: 'tech-13', name: '[Terraform]', imgSrc: TerraForm },
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
