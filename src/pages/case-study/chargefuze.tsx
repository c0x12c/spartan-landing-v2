import { SEO } from '@/components/atoms';
import { CaseStudyCFPage } from '@/components/pages/CaseStudyCFPage';
import { EPages } from '@/documents/types';

export default function CaseStudyCF() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY_CF} />
      <CaseStudyCFPage />
    </>
  );
}
