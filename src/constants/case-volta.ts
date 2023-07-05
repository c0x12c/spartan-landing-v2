import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import Swift from '@/assets/images/stacks/swift.svg';
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
import { StaticImageData } from 'next/image';

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

export const VoltaStacks: StackType[] = [
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
