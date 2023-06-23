/* eslint-disable @typescript-eslint/no-explicit-any */
import chargeFuze from '@/assets/images/projects/charge-fuze.svg';
import heru from '@/assets/images/projects/heru.svg';
import liquidityFinancial from '@/assets/images/projects/liquidity-financial.svg';
import liveCast from '@/assets/images/projects/live-cast.svg';
import ursalive from '@/assets/images/projects/ursalive.svg';
import voltaWallet from '@/assets/images/projects/volta-wallet.svg';

export type CaseStudyType = {
  id: string;
  name: string;
  value: string;
  imgSrc: any;
  href: string;
  tags: string[];
};

export const CaseStudies: CaseStudyType[] = [
  {
    id: 'case-1',
    name: 'Volta Wallet',
    value: 'volta',
    imgSrc: voltaWallet,
    href: '/case-study/volta',
    tags: ['NFT Market'],
  },
  {
    id: 'case-2',
    name: 'ChargeFuze',
    value: 'charge-fuze',
    imgSrc: chargeFuze,
    href: '/',
    tags: ['Web Development'],
  },
  {
    id: 'case-3',
    name: 'Liquidity Financial',
    value: 'volta',
    imgSrc: liquidityFinancial,
    href: '/case-study/liquidity',
    tags: ['Web Development'],
  },
  {
    id: 'case-4',
    name: 'LiveCast',
    imgSrc: liveCast,
    href: '/',
    value: 'live-cast',
    tags: ['Web Development'],
  },
  {
    id: 'case-5',
    name: 'Ursalive',
    value: 'ursalive',
    imgSrc: ursalive,
    href: '/',
    tags: ['Web Development'],
  },
  {
    id: 'case-6',
    name: 'Heru',
    value: 'heru',
    imgSrc: heru,
    href: '/',
    tags: ['Web Development'],
  },
];
