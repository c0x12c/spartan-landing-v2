import logoLiquidity from '@/assets/images/partners/logo-liquidity.png';
import logoChargeFuze from '@/assets/images/partners/logo-chargefuze.png';
import logoAgora from '@/assets/images/partners/logo-agora.png';
import logoMobolize from '@/assets/images/partners/logo-mobolize.png';
import logoHeru from '@/assets/images/partners/logo-heru.png';
import logoURSA from '@/assets/images/partners/logo-URSA.png';
import logoWb from '@/assets/images/partners/logo-wb.png';
import logoSabio from '@/assets/images/partners/logo-sabio.png';
import { StaticImageData } from 'next/image';

export type PartnerType = {
  id: string;
  name: string;
  imgSrc: StaticImageData;
  href: string;
};

export const Partners: PartnerType[] = [
  { id: 'partner-1', name: 'Liquidity', imgSrc: logoLiquidity, href: '/' },
  { id: 'partner-2', name: 'ChargeFuze', imgSrc: logoChargeFuze, href: '/' },
  { id: 'partner-3', name: 'Agora', imgSrc: logoAgora, href: '/' },
  { id: 'partner-4', name: 'Mobolize', imgSrc: logoMobolize, href: '/' },
  { id: 'partner-5', name: 'Heru', imgSrc: logoHeru, href: '/' },
  { id: 'partner-6', name: 'URSA', imgSrc: logoURSA, href: '/' },
  { id: 'partner-7', name: 'Wb', imgSrc: logoWb, href: '/' },
  { id: 'partner-8', name: 'Sabio', imgSrc: logoSabio, href: '/' },
];
