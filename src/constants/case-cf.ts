import GGCloud from '@/assets/images/stacks/GGCloud.svg';
import JavaScript from '@/assets/images/stacks/JavaScript.svg';
import Jenkins from '@/assets/images/stacks/Jenkins.svg';
import Alibaba from '@/assets/images/stacks/Alibaba.svg';
import Stripe from '@/assets/images/stacks/Stripe.svg';
import Twillio from '@/assets/images/stacks/Twillio.svg';
import Micronaut from '@/assets/images/stacks/Micronaut.svg';
import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import HCL from '@/assets/images/stacks/HCL.svg';
import Swift from '@/assets/images/stacks/Swift.svg';
import PostgreSQL from '@/assets/images/stacks/PostgreSQL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import Redis from '@/assets/images/stacks/Redis.svg';
import React from '@/assets/images/stacks/React.svg';
import MongoDB from '@/assets/images/stacks/MongoDB.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import Github from '@/assets/images/stacks/Github.svg';

import { FieldType } from './stacks';

export const CFStackList: FieldType[] = [
  {
    id: 'field-1',
    name: 'Programming Languages',
    stacks: [
      { id: 'stack-2', name: 'Kotlin', imgSrc: Kotlin },
      { id: 'stack-3', name: 'Swift', imgSrc: Swift },
      { id: 'stack-8', name: 'Javascript', imgSrc: JavaScript },
      { id: 'stack-7', name: 'HCL', imgSrc: HCL },
    ],
  },
  {
    id: 'field-2',
    name: 'Frameworks',
    stacks: [
      { id: 'stack-9', name: 'Micronaut', imgSrc: Micronaut },
      { id: 'stack-11', name: 'React', imgSrc: React },
    ],
  },
  {
    id: 'field-3',
    name: 'Platforms',
    stacks: [
      { id: 'stack-14', name: 'Alibaba', imgSrc: Alibaba },
      { id: 'stack-15', name: 'Twillio', imgSrc: Twillio },
      { id: 'stack-16', name: 'Stripe', imgSrc: Stripe },
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
    name: 'Infrastructures',
    stacks: [
      { id: 'stack-24', name: 'Docker', imgSrc: Docker },
      { id: 'stack-25', name: 'Kubernetes', imgSrc: Kubernetes },
      { id: 'stack-26', name: 'TerraForm', imgSrc: TerraForm },
      { id: 'stack-27', name: 'GCP', imgSrc: GGCloud },
    ],
  },
  {
    id: 'field-6',
    name: 'CI/CD',
    stacks: [
      { id: 'stack-29', name: 'Jenkins', imgSrc: Jenkins },
      { id: 'stack-30', name: 'Github Action', imgSrc: Github },
    ],
  },
];
