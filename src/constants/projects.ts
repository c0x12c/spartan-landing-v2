import chargeFuze from '@/assets/images/projects/charge-fuze.svg';
// import heru from '@/assets/images/projects/heru.svg';
import liquidityFinancial from '@/assets/images/projects/liquidity-financial.svg';
import liveCast from '@/assets/images/projects/live-cast.svg';
import ursalive from '@/assets/images/projects/ursalive.svg';
import voltaWallet from '@/assets/images/projects/volta-wallet.svg';
import voltaWalletQuote from '@/assets/images/projects/quote-volta.png';
import chargeFuzeQuote from '@/assets/images/projects/quote-chargefuze.png';
// import heruQuote from '@/assets/images/projects/quote-heru.png';
import liquidityQuote from '@/assets/images/projects/quote-liquidity.png';
import liveCastQuote from '@/assets/images/projects/quote-livecast.png';
import ursaLiveQuote from '@/assets/images/projects/quote-ursalive.png';

import voltaWalletUserImage from '@/assets/images/projects/volta-user.png';
import { StaticImageData } from 'next/image';
import { ServicesEnum } from './services';

export type ProjectType = {
  id: string;
  name: string;
  value: string;
  imgSrc: StaticImageData;
  href: string;
  tags: ServicesEnum[];
  dev: number;
  designer: number;
  content: string;
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
    tags: [ServicesEnum.MOBILE, ServicesEnum.WEB, ServicesEnum.BACKEND],
    content: 'A unique crypto wallet application developed by Spartan',
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
    value: 'chargefuze',
    imgSrc: chargeFuze,
    href: '/case-study/chargefuze',
    tags: [ServicesEnum.CLOUD, ServicesEnum.WEB, ServicesEnum.BACKEND, ServicesEnum.EMERGING],
    content: 'A convenient solution for charging your devices anytime and anywhere',
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: chargeFuzeQuote,
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
    value: 'liquidity',
    imgSrc: liquidityFinancial,
    href: '/case-study/liquidity',
    tags: [
      ServicesEnum.MOBILE,
      ServicesEnum.CLOUD,
      ServicesEnum.WEB,
      ServicesEnum.BACKEND,
      ServicesEnum.EMERGING,
    ],
    content: 'Revolutionizing the banking and spending landscape',
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: liquidityQuote,
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
    href: '/case-study/live-cast',
    value: 'live-cast',
    tags: [ServicesEnum.MOBILE, ServicesEnum.CLOUD, ServicesEnum.WEB, ServicesEnum.BACKEND],
    content: "The ultimate showcase for Agora's streaming SDK",
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: liveCastQuote,
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
    tags: [ServicesEnum.CLOUD, ServicesEnum.WEB, ServicesEnum.BACKEND],

    content: "Simplifies the process of hosting artists' Livestream events",
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: ursaLiveQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
  // {
  //   id: 'case-6',
  //   name: 'Heru',
  //   value: 'heru',
  //   imgSrc: heru,
  //   href: '/case-study/heru',
  //   tags: [],
  //   content: 'Elevate the patient experience while simultaneously boosting practice revenue',
  //   dev: 14,
  //   designer: 2,
  //   quote: {
  //     imgSrc: heruQuote,
  //     title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
  //     content:
  //       'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
  //     userName: 'Daniel Kim',
  //     userPosition: 'Volta’s Co-Founder ',
  //     userImgSrc: voltaWalletUserImage,
  //   },
  // },
];
