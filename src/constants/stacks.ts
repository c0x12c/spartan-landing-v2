import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import Java from '@/assets/images/stacks/Java.svg';
import Swift from '@/assets/images/stacks/Swift.svg';
import Go from '@/assets/images/stacks/Go.svg';
import JavaScript from '@/assets/images/stacks/JavaScript.svg';
import Typescript from '@/assets/images/stacks/Typescript.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import Python from '@/assets/images/stacks/Python.svg';
import Micronaut from '@/assets/images/stacks/Micronaut.svg';
import Echo from '@/assets/images/stacks/Echo.svg';
import LangChain from '@/assets/images/stacks/LangChain.svg';
import RxSwift from '@/assets/images/stacks/Rxjs.svg';
import Agora from '@/assets/images/stacks/Agora.svg';
import Twillio from '@/assets/images/stacks/Twillio.svg';
import SendGrid from '@/assets/images/stacks/SendGrid.svg';
import Alibaba from '@/assets/images/stacks/Alibaba.svg';
import Stripe from '@/assets/images/stacks/Stripe.svg';
import Alchemy from '@/assets/images/stacks/Alchemy.svg';
import Solid from '@/assets/images/stacks/Solid.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
import MongoDB from '@/assets/images/stacks/MongoDB.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import AWS from '@/assets/images/stacks/AWS.svg';
import Azure from '@/assets/images/stacks/Azure.svg';
import GGCloud from '@/assets/images/stacks/GGCloud.svg';
import Jenkins from '@/assets/images/stacks/Jenkins.svg';
import GithubAction from '@/assets/images/stacks/Github.svg';

import { StaticImageData } from 'next/image';

export type StackType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
};

export type FieldType = {
  id: string;
  name: string;
  stacks: StackType[];
};

export const Fields: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Language',
    stacks: [
      { id: 'stack-1', name: 'Java', imgSrc: Java },
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-3', name: 'Swift', imgSrc: Swift },
      { id: 'stack-4', name: 'Golang', imgSrc: Go },
      { id: 'stack-5', name: 'JavaScript', imgSrc: JavaScript },
      { id: 'stack-6', name: 'Typescript', imgSrc: Typescript },
      { id: 'stack-7', name: 'HCL', imgSrc: HCL },
      { id: 'stack-8', name: 'Python', imgSrc: Python },
    ],
  },
  {
    id: 'field-2',
    name: 'Framework',
    stacks: [
      { id: 'stack-9', name: 'Micronaut', imgSrc: Micronaut },
      { id: 'stack-10', name: 'Echo', imgSrc: Echo },
      { id: 'stack-11', name: 'LangChain', imgSrc: LangChain },
      { id: 'stack-13', name: 'RxSwift', imgSrc: RxSwift },
    ],
  },
  {
    id: 'field-3',
    name: 'Platform',
    stacks: [
      { id: 'stack-14', name: 'Agora', imgSrc: Agora },
      { id: 'stack-15', name: 'Twillio', imgSrc: Twillio },
      { id: 'stack-16', name: 'SendGrid', imgSrc: SendGrid },
      { id: 'stack-17', name: 'Alibaba', imgSrc: Alibaba },
      { id: 'stack-18', name: 'Stripe', imgSrc: Stripe },
      { id: 'stack-19', name: 'Alchemy', imgSrc: Alchemy },
      { id: 'stack-20', name: 'Solid', imgSrc: Solid },
    ],
  },
  {
    id: 'field-4',
    name: 'Databases',
    stacks: [
      { id: 'stack-21', name: 'PostgreSQL', imgSrc: PostgreSQL },
      { id: 'stack-22', name: 'Redis', imgSrc: Redis },
      { id: 'stack-23', name: 'MongoDB', imgSrc: MongoDB },
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
      { id: 'stack-31', name: 'Azure', imgSrc: Azure },
      { id: 'stack-28', name: 'Google Cloud', imgSrc: GGCloud },
    ],
  },
  {
    id: 'field-6',
    name: 'CI/CD',
    stacks: [
      { id: 'stack-29', name: 'Jenkins', imgSrc: Jenkins },
      { id: 'stack-30', name: 'GithubAction', imgSrc: GithubAction },
    ],
  },
];
