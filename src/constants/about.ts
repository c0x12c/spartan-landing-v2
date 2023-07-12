import aboutIcon from '@/assets/images/icons/about-us.svg';
import earthIcon from '@/assets/images/icons/earth.svg';
import jobIcon from '@/assets/images/icons/job.svg';
import backendIcon from '@/assets/images/icons/backend.svg';
import documentIcon from '@/assets/images/icons/document.svg';
import { StaticImageData } from 'next/image';

export type AboutType = {
  id: string;
  label: string;
  icon: StaticImageData;
  content: string;
  href: string;
};

export const About = [
  {
    id: 'about-1',
    label: 'About us',
    icon: aboutIcon,
    content: 'Years of experience in building startups',
    href: '/about-us',
  },
  {
    id: 'about-2',
    label: 'Life at Spartan',
    icon: earthIcon,
    content: 'Explore our amazing life, people & what we care',
    href: '/life-spartan',
  },
  {
    id: 'about-3',
    label: 'Apply for Jobs',
    icon: jobIcon,
    content: 'Find out the currently vacant positions at Spartan',
    href: '/apply-job',
  },
  {
    id: 'about-4',
    label: 'Internship Program',
    icon: backendIcon,
    content: 'Sharpen your skills with our Internship',
    href: '/internship-program',
  },
  {
    id: 'about-5',
    label: 'Ready To Join?',
    icon: documentIcon,
    content: 'Your opportunity is here. Click to join!',
    href: '/ready-to-join',
  },
];
