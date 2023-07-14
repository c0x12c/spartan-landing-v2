import AWS from '@/assets/images/stacks/AWS.svg';
import JavaScript from '@/assets/images/stacks/JavaScript.svg';
import Jenkins from '@/assets/images/stacks/Jenkins.svg';
import SendGrid from '@/assets/images/stacks/SendGrid.svg';
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
import { FieldType } from './stacks';
import { StaticImageData } from 'next/image';

export type StackType = {
  id: string;
  name?: string;
  imgSrc: StaticImageData;
};
export type GeneralStackType = {
  id: string;
  name: string;
};

export const GeneraLiquiditylStack: GeneralStackType[] = [
  { id: 'general-1', name: 'Programing language' },
  { id: 'general-6', name: 'Framework' },
  { id: 'general-5', name: 'Platfrom' },
  { id: 'general-2', name: 'Database' },
  { id: 'general-3', name: 'Infrastructure' },
];

export const LiquidityStack: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Language',
    stacks: [
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-6', name: 'Typescript', imgSrc: TypeScript },
      { id: 'stack-8', name: 'Javascript', imgSrc: JavaScript },
      { id: 'stack-7', name: 'HCL', imgSrc: HCL },
    ],
  },
  {
    id: 'field-2',
    name: 'Framework',
    stacks: [{ id: 'stack-9', name: 'Micronaut', imgSrc: Micronaut }],
  },
  {
    id: 'field-3',
    name: 'Platform',
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
