/* eslint-disable @typescript-eslint/no-explicit-any */
import Kotlin from '@/assets/images/stacks/Kotlin.svg';
import Python from '@/assets/images/stacks/Python.svg';
import Go from '@/assets/images/stacks/Go.svg';
import Webstrom from '@/assets/images/stacks/Webstrom.svg';
import Android from '@/assets/images/stacks/Android.svg';
import Apple from '@/assets/images/stacks/Apple.svg';
import CL from '@/assets/images/stacks/CL.svg';
import Docker from '@/assets/images/stacks/Docker.svg';
import Kubernetes from '@/assets/images/stacks/Kubernetes.svg';
import TerraForm from '@/assets/images/stacks/TerraForm.svg';
import Firebase from '@/assets/images/stacks/Firebase.svg';
import DataDog from '@/assets/images/stacks/DataDog.svg';
import Whimsical from '@/assets/images/stacks/Whimsical.svg';
import Mermaid from '@/assets/images/stacks/Mermaid.svg';
import Confluence from '@/assets/images/stacks/Confluence.svg';
import Jira from '@/assets/images/stacks/Jira.svg';
import Github from '@/assets/images/stacks/Github.svg';
import GoogleCloud from '@/assets/images/stacks/GoogleCloud.svg';

export type StackType = {
  id: string;
  label: string;
  content: {
    id: string;
    label: string;
    tech: {
      id: string;
      name: string;
      imgSrc: any;
    }[];
  }[];
};

export const Stacks: StackType[] = [
  {
    id: 'stack-1',
    label: 'IDE',
    content: [
      {
        id: 'stack-inside-1',
        label: 'Backend',
        tech: [
          { id: 'tech-1', name: '[kotlin]', imgSrc: Kotlin },
          { id: 'tech-2', name: '[PYTHON]', imgSrc: Python },
          { id: 'tech-3', name: '[GOLAND]', imgSrc: Go },
          { id: 'tech-4', name: '[Webstorm]', imgSrc: Webstrom },
        ],
      },
      {
        id: 'stack-inside-2',
        label: 'Frontend',
        tech: [
          { id: 'tech-5', name: '[Android]', imgSrc: Android },
          { id: 'tech-6', name: '[Apple]', imgSrc: Apple },
          { id: 'tech-7', name: '[CL]', imgSrc: CL },
        ],
      },
    ],
  },
  {
    id: 'stack-2',
    label: 'Infrastructure',
    content: [
      {
        id: 'stack-inside-3',
        label: 'Container',
        tech: [
          { id: 'tech-8', name: '[Docker]', imgSrc: Docker },
          { id: 'tech-9', name: '[Kubernetes]', imgSrc: Kubernetes },
          { id: 'tech-10', name: '[TerraForm]', imgSrc: TerraForm },
        ],
      },
    ],
  },
  {
    id: 'stack-3',
    label: 'Monitoring',
    content: [
      {
        id: 'stack-inside-4',
        label: 'Monitoring',
        tech: [
          { id: 'tech-11', name: '[Firebase]', imgSrc: Firebase },
          { id: 'tech-12', name: '[DataDog]', imgSrc: DataDog },
        ],
      },
    ],
  },
  {
    id: 'stack-4',
    label: 'Diagram',
    content: [
      {
        id: 'stack-inside-5',
        label: 'Diagram',
        tech: [
          { id: 'tech-13', name: '[Whimsical]', imgSrc: Whimsical },
          { id: 'tech-14  ', name: '[Mermaid]', imgSrc: Mermaid },
        ],
      },
    ],
  },
  {
    id: 'stack-5',
    label: 'Coding Assistance',
    content: [],
  },
  {
    id: 'stack-6',
    label: 'Project Management',
    content: [
      {
        id: 'stack-inside-6',
        label: 'Project Management',
        tech: [
          { id: 'tech-15', name: '[Confluence]', imgSrc: Confluence },
          { id: 'tech-16', name: '[Jira]', imgSrc: Jira },
          { id: 'tech-17', name: '[Github]', imgSrc: Github },
          { id: 'tech-18', name: '[GoogleCloud]', imgSrc: GoogleCloud },
        ],
      },
    ],
  },
];
