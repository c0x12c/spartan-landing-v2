import logoLiquidity from '@/assets/images/partners/logo-liquidity.png';
import logoCF from '@/assets/images/partners/logo-chargefuze.png';
import logoVeraset from '@/assets/images/partners/logo-veraset.png';
import logoAogra from '@/assets/images/partners/logo-agora.png';
import logoPura from '@/assets/images/partners/logo-pura.png';
import logoBiolog from '@/assets/images/partners/logo-biolog.png';
import logoHeru from '@/assets/images/partners/logo-heru.png';
import logoURSA from '@/assets/images/partners/logo-URSA.png';
import logoSlice from '@/assets/images/partners/logo-slice.png';
import logoGeocipher from '@/assets/images/partners/logo-geocipher.png';
import logoVolta from '@/assets/images/partners/logo-volta.png';

import { StaticImageData } from 'next/image';

export type ClientType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
};

export const Clients: ClientType[] = [
  {
    id: 'client-1',
    name: 'Liquidity',
    imgSrc: logoLiquidity,
  },
  {
    id: 'client-2',
    name: 'Agora',
    imgSrc: logoAogra,
  },
  {
    id: 'client-3',
    name: 'Heru',
    imgSrc: logoHeru,
  },
  {
    id: 'client-4',
    name: 'Biolog',
    imgSrc: logoBiolog,
  },
  {
    id: 'client-5',
    name: 'chargeFUZE',
    imgSrc: logoCF,
  },
  {
    id: 'client-6',
    name: 'URSA',
    imgSrc: logoURSA,
  },
  {
    id: 'client-7',
    name: 'Slice',
    imgSrc: logoSlice,
  },
  {
    id: 'client-8',
    name: 'Pura',
    imgSrc: logoPura,
  },
  {
    id: 'client-9',
    name: 'Geocipher',
    imgSrc: logoGeocipher,
  },
  {
    id: 'client-10',
    name: 'Veraset',
    imgSrc: logoVeraset,
  },
  {
    id: 'client-11',
    name: 'Volta',
    imgSrc: logoVolta,
  },
];

export const sampleData = {
  id: 'sample',
  name: 'Sample',
  imgSrc: null,
};
