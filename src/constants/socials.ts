import { StaticImageData } from 'next/image';
import facebook from '@/assets/images/socials/facebook.svg';
// import instagram from '@/assets/images/socials/instagram.svg';
import linkedin from '@/assets/images/socials/linkedin.svg';
// import twitter from '@/assets/images/socials/twitter.svg';
import facebookGray from '@/assets/images/icons/facebook-gray.svg';
import linkedinGray from '@/assets/images/icons/linkedin-gray.svg';
import twitterGray from '@/assets/images/icons/twitter-gray.svg';

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
    href: 'https://www.facebook.com/profile.php?id=100088671814716',
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

export const ShareSocials = [
  {
    id: 'social-1',
    label: 'facebook',
    imgSrc: facebookGray,
    generateShareHref: (url: string) => `https://www.facebook.com/sharer.php?u=${url}`,
  },
  {
    id: 'social-3',
    label: 'twitter',
    imgSrc: twitterGray,
    generateShareHref: (url: string) =>
      `https://twitter.com/intent/tweet?url=${url}&hashtags=spartandev`,
  },
  {
    id: 'social-4',
    label: 'linkedin',
    imgSrc: linkedinGray,
    generateShareHref: (url: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
  },
];
