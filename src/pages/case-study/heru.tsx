import { SEO } from '@/components/atoms';
import { CaseStudyHeruPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyHeru() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY_HERU} />
      <CaseStudyHeruPage />
    </>
  );
}
