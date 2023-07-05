import chargeFuze from '@/assets/images/projects/charge-fuze.svg';
import heru from '@/assets/images/projects/heru.svg';
import liquidityFinancial from '@/assets/images/projects/liquidity-financial.svg';
import liveCast from '@/assets/images/projects/live-cast.svg';
import ursalive from '@/assets/images/projects/ursalive.svg';
import voltaWallet from '@/assets/images/projects/volta-wallet.svg';
import voltaWalletQuote from '@/assets/images/projects/quote-volta.png';
import voltaWalletUserImage from '@/assets/images/projects/volta-user.png';
import { StaticImageData } from 'next/image';

export type ProjectType = {
  id: string;
  name: string;
  value: string;
  imgSrc: StaticImageData;
  href: string;
  tags: string[];
  dev: number;
  designer: number;
  quote: {
    imgSrc: StaticImageData;
    title: string;
    content: string;
    userName: string;
    userPosition: string;
    userImgSrc: StaticImageData;
  };
};

export const Projects: ProjectType[] = [
  {
    id: 'case-1',
    name: 'Volta Wallet',
    value: 'volta',
    imgSrc: voltaWallet,
    href: '/case-study/volta',
    tags: ['NFT Market', 'Mobile App'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: voltaWalletQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
  {
    id: 'case-2',
    name: 'ChargeFuze',
    value: 'charge-fuze',
    imgSrc: chargeFuze,
    href: '/case-study/charge-fuze',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: voltaWalletQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
  {
    id: 'case-3',
    name: 'Liquidity Financial',
    value: 'volta',
    imgSrc: liquidityFinancial,
    href: '/case-study/liquidity',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: voltaWalletQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
  {
    id: 'case-4',
    name: 'LiveCast',
    imgSrc: liveCast,
    href: '/case-study/livecast',
    value: 'live-cast',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: voltaWalletQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
  {
    id: 'case-5',
    name: 'Ursalive',
    value: 'ursalive',
    imgSrc: ursalive,
    href: '/case-study/ursalive',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: voltaWalletQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
  {
    id: 'case-6',
    name: 'Heru',
    value: 'heru',
    imgSrc: heru,
    href: '/case-study/heru',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: voltaWalletQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
];
