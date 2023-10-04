import AWS from '@/assets/images/stacks/AWS.svg';
import JavaScript from '@/assets/images/stacks/JavaScript.svg';
import Jenkins from '@/assets/images/stacks/Jenkins.svg';
import Micronaut from '@/assets/images/stacks/Micronaut.svg';
import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import Go from '@/assets/images/stacks/Go.svg';
import Swift from '@/assets/images/stacks/Swift.svg';
import Python from '@/assets/images/stacks/Python.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
import Echo from '@/assets/images/stacks/Echo.svg';
import React from '@/assets/images/stacks/React.svg';
import LangChain from '@/assets/images/stacks/LangChain.svg';
import Solid from '@/assets/images/stacks/Solid.svg';
import ZeroHash from '@/assets/images/stacks/ZeroHash.svg';
import Coinmarketcap from '@/assets/images/stacks/Coinmarketcap.svg';
import ChatGPT from '@/assets/images/stacks/ChatGPT.svg';

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

export const LiquidityStack: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Languages',
    stacks: [
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-1', name: 'Golang', imgSrc: Go },
      { id: 'stack-3', name: 'Swift', imgSrc: Swift },
      { id: 'stack-6', name: 'Python', imgSrc: Python },
      { id: 'stack-8', name: 'Javascript', imgSrc: JavaScript },
      { id: 'stack-7', name: 'HCL', imgSrc: HCL },
    ],
  },
  {
    id: 'field-2',
    name: 'Frameworks',
    stacks: [
      { id: 'stack-9', name: 'Micronaut', imgSrc: Micronaut },
      { id: 'stack-10', name: 'Echo', imgSrc: Echo },
      { id: 'stack-11', name: 'React', imgSrc: React },
      { id: 'stack-13', name: 'LangChain', imgSrc: LangChain },
    ],
  },
  {
    id: 'field-3',
    name: 'Platforms',
    stacks: [
      { id: 'stack-14', name: 'Solid', imgSrc: Solid },
      { id: 'stack-15', name: 'Coinmarketcap', imgSrc: Coinmarketcap },
      { id: 'stack-16', name: 'ZeroHash', imgSrc: ZeroHash },
      { id: 'stack-17', name: 'OpenAI ChatGPT', imgSrc: ChatGPT },
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
      'Achieved a high level of stability with close to a 99.5% crash-free user rate.',
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
