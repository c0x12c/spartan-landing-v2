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
  imgSrc: any;
  href: string;
  tags: string[];
};

export const CaseStudies: CaseStudyType[] = [
  { id: 'case-1', name: 'Volta Wallet', imgSrc: voltaWallet, href: '/', tags: ['NFT Market'] },
  { id: 'case-2', name: 'ChargeFuze', imgSrc: chargeFuze, href: '/', tags: ['Web Development'] },
  {
    id: 'case-3',
    name: 'Liquidity Financial',
    imgSrc: liquidityFinancial,
    href: '/',
    tags: ['Web Development'],
  },
  { id: 'case-4', name: 'LiveCast', imgSrc: liveCast, href: '/', tags: ['Web Development'] },
  { id: 'case-5', name: 'Ursalive', imgSrc: ursalive, href: '/', tags: ['Web Development'] },
  { id: 'case-6', name: 'Heru', imgSrc: heru, href: '/', tags: ['Web Development'] },
];
