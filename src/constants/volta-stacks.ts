/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type StackType = {
  id: string;
  name: string;
  imgSrc: any;
};

export const voltaStacks: StackType[] = [
  { id: 'tech-1', name: '[kotlin]', imgSrc: Kotlin },
  { id: 'tech-2', name: '[GOLANG]', imgSrc: Go },
  { id: 'tech-3', name: '[Swift]', imgSrc: Swift },
  { id: 'tech-5', name: '[HCL]', imgSrc: HCL },
  { id: 'tech-6', name: '[TypeScript]', imgSrc: TypeScript },
  { id: 'tech-7', name: '[Java]', imgSrc: Java },
  { id: 'tech-8', name: '[PostgreSQL]', imgSrc: PostgreSQL },
  { id: 'tech-9', name: '[MoNG0DB]', imgSrc: MongoDB },
  { id: 'tech-11', name: '[redis]', imgSrc: Redis },
  { id: 'tech-10', name: '[Docker]', imgSrc: Docker },
  { id: 'tech-12', name: '[Kubernetes]', imgSrc: Kubernetes },
  { id: 'tech-13', name: '[Terraform]', imgSrc: TerraForm },
];
