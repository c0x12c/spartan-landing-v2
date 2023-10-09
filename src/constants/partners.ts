import logoLiquidity from '@/assets/images/partners/logo-liquidity.png';
import logoChargeFuze from '@/assets/images/partners/logo-chargefuze.png';
import logoAgora from '@/assets/images/partners/logo-agora.png';
// import logoHeru from '@/assets/images/partners/logo-heru.png';
import logoURSA from '@/assets/images/partners/logo-URSA.png';
import logoWb from '@/assets/images/partners/logo-wb.png';
import logoVolta from '@/assets/images/partners/logo-volta.png';
import logoSlice from '@/assets/images/partners/logo-slice.png';
import { StaticImageData } from 'next/image';
import logoBiolog from '@/assets/images/partners/logo-biolog.png';
import logoPura from '@/assets/images/partners/logo-pura.png';
import logoVeraset from '@/assets/images/partners/logo-veraset.png';

export type PartnerType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
  tags: string[];
  href: string;
};

export const Partners: PartnerType[] = [
  {
    id: 'partner-1',
    name: 'Liquidity',
    tags: ['mobile', 'web', 'cloud', 'backend', 'emerging'],
    imgSrc: logoLiquidity,
    href: '/',
  },
  {
    id: 'partner-2',
    name: 'chargeFUZE',
    tags: ['web', 'cloud', 'backend', 'emerging'],
    imgSrc: logoChargeFuze,
    href: '/',
  },
  {
    id: 'partner-10',
    name: 'Volta',
    tags: ['mobile', 'backend'],
    imgSrc: logoVolta,
    href: '/',
  },
  {
    id: 'partner-9',
    name: 'Slice',
    tags: ['mobile', 'web', 'cloud', 'backend'],
    imgSrc: logoSlice,
    href: '/',
  },
  {
    id: 'partner-3',
    name: 'Agora',
    tags: ['mobile', 'web', 'cloud', 'backend'],
    imgSrc: logoAgora,
    href: '/',
  },
  {
    id: 'partner-4',
    name: 'Biolog',
    tags: ['backend'],
    imgSrc: logoBiolog,
    href: '/',
  },
  {
    id: 'partner-5',
    name: 'Pura',
    tags: ['backend'],
    imgSrc: logoPura,
    href: '/',
  },
  {
    id: 'partner-6',
    name: 'URSA',
    tags: ['web', 'cloud', 'backend'],
    imgSrc: logoURSA,
    href: '/',
  },
  {
    id: 'partner-7',
    name: 'Wb',
    tags: [],
    imgSrc: logoWb,
    href: '/',
  },
  {
    id: 'partner-8',
    name: 'Veraset',
    tags: ['backend'],
    imgSrc: logoVeraset,
    href: '/',
  },
];
