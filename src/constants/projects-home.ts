import chargeFuze from '@/assets/images/projects/charge-fuze.svg';
import liquidityFinancial from '@/assets/images/projects/liquidity-financial.svg';
import liveCast from '@/assets/images/projects/live-cast.svg';
import voltaWallet from '@/assets/images/projects/volta-wallet.svg';
import voltaWalletQuote from '@/assets/images/projects/quote-volta.png';
import chargeFuzeQuote from '@/assets/images/projects/quote-chargefuze.png';
import liquidityQuote from '@/assets/images/projects/quote-liquidity.png';
import liveCastQuote from '@/assets/images/projects/quote-livecast.png';

import voltaWalletUserImage from '@/assets/images/projects/volta-user.png';
import { ProjectType } from '.';

export const ProjectsHome: ProjectType[] = [
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
      title: 'Spartan is a remarkable team with unmatched expertise',
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
    href: '/',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: chargeFuzeQuote,
      title: 'Spartan is a remarkable team with unmatched expertise',
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
      imgSrc: liquidityQuote,
      title: 'Spartan is a remarkable team with unmatched expertise',
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
    href: '/',
    value: 'live-cast',
    tags: ['Web Development'],
    dev: 14,
    designer: 2,
    quote: {
      imgSrc: liveCastQuote,
      title: 'Spartan is a remarkable team with unmatched expertise',
      content:
        'Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations. We appreciate their proactive approach, attention to detail, and ability to deliver exceptional results. We are grateful for their support and look forward to continuing our partnership in future projects.',
      userName: 'Daniel Kim',
      userPosition: 'Volta’s Co-Founder ',
      userImgSrc: voltaWalletUserImage,
    },
  },
];
