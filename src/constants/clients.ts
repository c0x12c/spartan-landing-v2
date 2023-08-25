import logoLiquidity from '@/assets/images/partners/logo-liquidity.png';
import logoCF from '@/assets/images/partners/logo-chargefuze.png';
import logoVeraset from '@/assets/images/partners/logo-veraset.png';
import logoAogra from '@/assets/images/partners/logo-agora.png';
import logoPura from '@/assets/images/partners/logo-pura.png';
import logoBiolog from '@/assets/images/partners/logo-biolog.png';
import logoHeru from '@/assets/images/partners/logo-heru.png';
import logoURSA from '@/assets/images/partners/logo-URSA.png';

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
    name: 'ChargeFuze',
    imgSrc: logoCF,
  },
  {
    id: 'client-3',
    name: 'Veraset',
    imgSrc: logoVeraset,
  },
  {
    id: 'client-4',
    name: 'Agora',
    imgSrc: logoAogra,
  },
  {
    id: 'client-5',
    name: 'Heru',
    imgSrc: logoHeru,
  },
  {
    id: 'client-6',
    name: 'Pura',
    imgSrc: logoPura,
  },
  {
    id: 'client-7',
    name: 'Biolog',
    imgSrc: logoBiolog,
  },
  {
    id: 'client-8',
    name: 'URSA',
    imgSrc: logoURSA,
  },
];
