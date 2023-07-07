import mobileIcon from '@/assets/images/icons/mobile.svg';
import webIcon from '@/assets/images/icons/web.svg';
import backendIcon from '@/assets/images/icons/backend.svg';
import cloudIcon from '@/assets/images/icons/cloud.svg';
import emergingIcon from '@/assets/images/icons/emerging.svg';
import questionIcon from '@/assets/images/icons/question.svg';
import { StaticImageData } from 'next/image';

export type ServiceType = {
  id: string;
  label: string;
  href: string;
  content: string;
  icon: StaticImageData;
};

export const Services = [
  {
    id: 'service-1',
    label: 'Mobile App Development',
    href: '/services/mobile-app',
    content: 'We help enterprises navigating the best of the digital',
    icon: mobileIcon,
  },
  {
    id: 'service-2',
    label: 'Web Development',
    href: '/services/web-development',
    content: 'We help enterprises navigating the best of the digital',
    icon: webIcon,
  },
  {
    id: 'service-3',
    label: 'Backend Development',
    href: '/services/backend',
    content: 'We help enterprises navigating the best of the digital',
    icon: backendIcon,
  },
  {
    id: 'service-4',
    label: 'Cloud Solutions',
    href: '/services/cloud',
    content: 'We help enterprises navigating the best of the digital',
    icon: cloudIcon,
  },
  {
    id: 'service-5',
    label: 'Emerging Technologies',
    href: '/services/emerging-technologies',
    content: 'We help enterprises navigating the best of the digital',
    icon: emergingIcon,
  },
  {
    id: 'service-6',
    label: 'How Spartan operates',
    href: '/spartan-operates',
    content: 'We help enterprises navigating the best of the digital',
    icon: questionIcon,
  },
];
