/* eslint-disable @typescript-eslint/no-explicit-any */
import chargeFuze from '@/assets/images/projects/charge-fuze.svg';
import heru from '@/assets/images/projects/heru.svg';
import liquidityFinancial from '@/assets/images/projects/liquidity-financial.svg';
import liveCast from '@/assets/images/projects/live-cast.svg';
import ursalive from '@/assets/images/projects/ursalive.svg';
import voltaWallet from '@/assets/images/projects/volta-wallet.svg';
import voltaWalletQuote from '@/assets/images/projects/quote-volta.png';
import voltaWalletUserImage from '@/assets/images/projects/volta-user.png';

export type CaseStudyType = {
  id: string;
  name: string;
  value: string;
  imgSrc: any;
  href: string;
  tags: string[];
  dev: number;
  designer: number;
  quoteImgSrc: any;
  quoteTitle: string;
  quoteContent: string;
  quoteUserName: string;
  quoteUserPosition: string;
  quoteUserImage: any;
};

export const CaseStudies: CaseStudyType[] = [
  {
    id: 'case-1',
    name: 'Volta Wallet',
    value: 'volta',
    imgSrc: voltaWallet,
    href: '/case-study/volta',
    tags: ['NFT Market'],
    dev: 14,
    designer: 2,
    quoteImgSrc: voltaWalletQuote,
    quoteTitle: 'Spartan Is A Remarkable Team with Unmatched Expertise',
    quoteContent:
      'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
    quoteUserName: 'Daniel Kim',
    quoteUserPosition: 'Volta’s Co-Founder ',
    quoteUserImage: voltaWalletUserImage,
  },
  {
    id: 'case-2',
    name: 'ChargeFuze',
    value: 'charge-fuze',
    imgSrc: chargeFuze,
    href: '/',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quoteImgSrc: voltaWalletQuote,
    quoteTitle: 'Spartan Is A Remarkable Team with Unmatched Expertise',
    quoteContent:
      'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
    quoteUserName: 'Daniel Kim',
    quoteUserPosition: 'Volta’s Co-Founder ',
    quoteUserImage: voltaWalletUserImage,
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
    quoteImgSrc: voltaWalletQuote,
    quoteTitle: 'Spartan Is A Remarkable Team with Unmatched Expertise',
    quoteContent:
      'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
    quoteUserName: 'Daniel Kim',
    quoteUserPosition: 'Volta’s Co-Founder ',
    quoteUserImage: voltaWalletUserImage,
  },
  {
    id: 'case-4',
    name: 'LiveCast',
    imgSrc: liveCast,
    href: '/',
    value: 'live-cast',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quoteImgSrc: voltaWalletQuote,
    quoteTitle: 'Spartan Is A Remarkable Team with Unmatched Expertise',
    quoteContent:
      'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
    quoteUserName: 'Daniel Kim',
    quoteUserPosition: 'Volta’s Co-Founder ',
    quoteUserImage: voltaWalletUserImage,
  },
  {
    id: 'case-5',
    name: 'Ursalive',
    value: 'ursalive',
    imgSrc: ursalive,
    href: '/',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quoteImgSrc: voltaWalletQuote,
    quoteTitle: 'Spartan Is A Remarkable Team with Unmatched Expertise',
    quoteContent:
      'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
    quoteUserName: 'Daniel Kim',
    quoteUserPosition: 'Volta’s Co-Founder ',
    quoteUserImage: voltaWalletUserImage,
  },
  {
    id: 'case-6',
    name: 'Heru',
    value: 'heru',
    imgSrc: heru,
    href: '/',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quoteImgSrc: voltaWalletQuote,
    quoteTitle: 'Spartan Is A Remarkable Team with Unmatched Expertise',
    quoteContent:
      'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
    quoteUserName: 'Daniel Kim',
    quoteUserPosition: 'Volta’s Co-Founder ',
    quoteUserImage: voltaWalletUserImage,
  },
];
