import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import LiquidityPage from '@/components/pages/LiquidityPage';

export default function Liquidity() {
  return (
    <>
      <SEO page={EPages.LIQUIDITY} />
      <LiquidityPage />
    </>
  );
}
