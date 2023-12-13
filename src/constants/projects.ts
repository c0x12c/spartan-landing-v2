import chargeFuze from '@/assets/images/projects/charge-fuze.svg';
import liquidityFinancial from '@/assets/images/projects/liquidity-financial.svg';
import liveCast from '@/assets/images/projects/live-cast.svg';
import ursalive from '@/assets/images/projects/ursalive.svg';
import voltaWallet from '@/assets/images/projects/volta-wallet.svg';
import voltaWalletQuote from '@/assets/images/projects/quote-volta.webp';
import chargeFuzeQuote from '@/assets/images/projects/quote-chargefuze.webp';
import liquidityQuote from '@/assets/images/projects/quote-liquidity.webp';
import liveCastQuote from '@/assets/images/projects/quote-livecast.webp';
import ursaLiveQuote from '@/assets/images/projects/quote-ursalive.webp';
import AgoraFounder from '../assets/images/about-us/agora-founder.png';
import UrsaliveFounder from '../assets/images/about-us/ursalive-founder.jpeg';
import VoltaFounder from '../assets/images/about-us/volta-fonder.jpeg';
import CFFounder from '../assets/images/about-us/cf-founder.jpeg';
import LiquidityFounder from '@/assets/images/about-us/liquidty-founder.webp';
import logoPura from '@/assets/images/partners/logo-pura.png';
import pura from '@/assets/images/projects/pura.png';
import PuraCTO from '@/assets/images/about-us/pura-cto.jpeg';

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
    name: 'Pura',
    value: 'pura',
    imgSrc: pura,
    href: '',
    tags: [ServicesEnum.BACKEND, ServicesEnum.MOBILE, ServicesEnum.QA, ServicesEnum.INFRA],
    content: 'Best Smart Home Fragrance & Diffuser - Pura',
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: pura,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        'Having worked on multiple projects with Spartan across multiple companies, I am confident to say they are one of the best firms you can ask for. They ramp up quickly and add value every time. Their leadership has decades of experience and has seen it all!',
      userName: 'Scott Rushforth',
      userPosition: 'CTO',
      userImgSrc: PuraCTO,
    },
  },
  {
    id: 'case-2',
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
        'After working with in-house teams my whole career, I hired development agencies for my Fintech startup.  Building a great, reliable product was a struggle, until I came across Spartan. Initially, I was skeptical, but within just a month of collaborating with the Spartan team, I transferred all my remaining projects to them. Their capacity to deliver high-quality software engineering at a rapid pace is a rare find.',
      userName: 'Ryan Fujiu',
      userPosition: 'CEO and Founder',
      userImgSrc: LiquidityFounder,
    },
  },
  {
    id: 'case-3',
    name: 'LiveCast',
    imgSrc: liveCast,
    href: '/case-study/live-cast',
    value: 'live-cast',
    tags: [ServicesEnum.MOBILE, ServicesEnum.CLOUD, ServicesEnum.WEB, ServicesEnum.BACKEND],
    content: "The ultimate showcase for Agora's streaming SDK",
    dev: 5,
    designer: 1,
    quote: {
      imgSrc: liveCastQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        "I've gone through several dev agencies that have all disappointed me until I found Spartan. I was skeptical at first, but within a month of working with the Spartan team, I migrated the rest of my projects over to them. Their ability to execute high quality software engineering at a fast speed is hard to find.",
      userName: 'Cody Zhang',
      userPosition: 'Product & Engineering Lead',
      userImgSrc: AgoraFounder,
    },
  },
  {
    id: 'case-4',
    name: 'URSA Live',
    value: 'ursa',
    imgSrc: ursalive,
    href: '/case-study/ursa',
    tags: [ServicesEnum.CLOUD, ServicesEnum.WEB, ServicesEnum.BACKEND],
    content: "Simplifies the process of hosting artists' livestream events",
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: ursaLiveQuote,
      title: 'Spartan Is A Remarkable Team with Unmatched Expertise',
      content:
        "Our collaboration with the Spartan team in software development has been nothing short of phenomenal. Their technical proficiency, commitment, and depth of knowledge have outperformed our expectations. They took our messy code and fixed it into working apps in less than a month. It's not easy to find a team that can make such big changes so quickly and still do great work.",
      userName: 'Chad Royce',
      userPosition: 'Founder and CEO',
      userImgSrc: UrsaliveFounder,
    },
  },
  {
    id: 'case-5',
    name: 'chargeFUZE',
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
        'The Spartan team has been a pleasure to work with. Project execution is timely and of high quality, and communication is clear and well-structured. The team is incredibly responsive to emergent needs stemming from a rapidly changing, high-growth business environment, while also maintaining focus on longer-term projects. However, apart from their top-quality work, what sets Spartan apart in my eyes is their focus on building processes and organizational structure to scale with your business. The team’s experience with high-growth startups is evident, and as a client, this is a huge value-add.',
      userName: 'Gabe Esler',
      userPosition: 'Product and Strategy',
      userImgSrc: CFFounder,
    },
  },
  {
    id: 'case-6',
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
        "Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. They are able to take loosely defined requirements and do the necessary market research to design a fantastic system that addresses all the main requirements exceeding even our expectations.  I am also impressed by their speed and quality.  They have been a fantastic partner, and we can't recommend them more.",
      userName: 'George Melika',
      userPosition: 'Co-founder',
      userImgSrc: VoltaFounder,
    },
  },
];
