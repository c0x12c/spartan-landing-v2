/* eslint-disable @typescript-eslint/no-explicit-any */
import logoURSA from '@/assets/images/biz/logo-URSA.svg';
import logoMobolize from '@/assets/images/biz/logo-mobolize.svg';
import logoChargeFuze from '@/assets/images/biz/logo-chargefuze.svg';
import logoHeru from '@/assets/images/biz/logo-heru.svg';
import logoAgora from '@/assets/images/biz/logo-agora.svg';
import logoWb from '@/assets/images/biz/logo-wb.svg';
import logoSabio from '@/assets/images/biz/logo-sabio.svg';

export type BusinessType = {
  id: string;
  name: string;
  imgSrc: any;
};

export const Businesses = [
  { id: 'biz-1', name: 'URSA', imgSrc: logoURSA },
  { id: 'biz-2', name: 'Mobolize', imgSrc: logoMobolize },
  { id: 'biz-3', name: 'ChargeFuze', imgSrc: logoChargeFuze },
  { id: 'biz-4', name: 'Heru', imgSrc: logoHeru },
  { id: 'biz-5', name: 'Agora', imgSrc: logoAgora },
  { id: 'biz-6', name: 'Wb', imgSrc: logoWb },
  { id: 'biz-7', name: 'Sabio', imgSrc: logoSabio },
];
