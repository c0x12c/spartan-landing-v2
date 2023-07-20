import { StaticImageData } from 'next/image';
import facebook from '@/assets/images/socials/facebook.svg';
// import instagram from '@/assets/images/socials/instagram.svg';
import linkedin from '@/assets/images/socials/linkedin.svg';
// import twitter from '@/assets/images/socials/twitter.svg';

export type SocialType = {
  id: string;
  title: string;
  imgSrc: StaticImageData;
  href: string;
};

export const Socials = [
  {
    id: 'social-1',
    label: 'facebook',
    imgSrc: facebook,
    href: 'https://www.facebook.com/profile.php?id=100094518799287',
  },
  // { id: 'social-2', label: 'instagram', imgSrc: instagram, href: '/' },
  // { id: 'social-3', label: 'twitter', imgSrc: twitter, href: '/' },
  {
    id: 'social-4',
    label: 'linkedin',
    imgSrc: linkedin,
    href: 'https://www.linkedin.com/company/spartandev',
  },
];
