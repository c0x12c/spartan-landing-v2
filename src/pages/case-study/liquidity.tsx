import { SEO } from '@/components/atoms';
import { CaseStudyLiquidityPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyLiquidity() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY_LIQUIDITY} />
      <CaseStudyLiquidityPage />
    </>
  );
}
