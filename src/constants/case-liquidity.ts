import AWS from '@/assets/images/stacks/AWS.svg';
import React from '@/assets/images/stacks/React.svg';
import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import Micronaut from '@/assets/images/stacks/Micronaut.svg';
import Go from '@/assets/images/stacks/Go.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import TypeScript from '@/assets/images/stacks/Typescript.svg';
import Twillio from '@/assets/images/stacks/Java.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import SendGrid from '@/assets/images/stacks/SendGrid.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import Agora from '@/assets/images/stacks/Agora.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
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

export const LiquidityStack: StackType[] = [
  { id: 'tech-1', name: 'Kotlin', imgSrc: Kotlin },
  { id: 'tech-6', name: 'TypeScript', imgSrc: TypeScript },
  { id: 'tech-5', imgSrc: HCL },
  { id: 'tech-2', name: 'JavaScript', imgSrc: Go },
  { id: 'tech-3', name: 'Micronaut', imgSrc: Micronaut },
  { id: 'tech-7', name: 'Twillio', imgSrc: Twillio },
  { id: 'tech-9', imgSrc: Agora },
  { id: 'tech-8', name: 'PostgreSQL', imgSrc: PostgreSQL },
  { id: 'tech-11', name: 'AWS', imgSrc: AWS },
  { id: 'tech-10', name: 'Docker', imgSrc: Docker },
  { id: 'tech-12', name: 'ReacJS', imgSrc: React },
  { id: 'tech-13', name: 'Terraform', imgSrc: TerraForm },
  { id: 'tech-14', name: 'SendGrid', imgSrc: SendGrid },
  { id: 'tech-15', name: 'Redis', imgSrc: Redis },
];

export const items = [
  {
    id: '1',
    title: 'Backend System',
    additionalText: [
      'Rewrote the entire backend system from Go to Kotlin to enhance stability and performance.',
      'Improved the infrastructure to ensure robustness and scalability.',
      "Implemented DataDog monitoring for better visibility into the system's health.",
    ],
  },
  {
    id: '2',
    title: 'Mobile Application',
    additionalText: [
      'Resolved critical bugs and improved the overall stability of the mobile applications.',
      'Achieved a high level of stability with a close to 99.5% crash-free user rate.',
      'Developed a new mobile product called PrideCard.',
    ],
  },
  {
    id: '3',
    title: 'Websites and Web Admin Dashboard',
    additionalText: [
      "Built websites for Liquidity Financial's products.",
      'Developed web admin dashboard for efficient account management and user support.',
    ],
  },
  {
    id: '4',
    title: 'Tools for Support Team',
    additionalText: [
      'Built tools to assist the support team in resolving users complaints more efficiently.',
    ],
  },
];
