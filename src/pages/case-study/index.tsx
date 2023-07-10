import { SEO } from '@/components/atoms';
import { CaseStudyPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyVolta() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY} />
      <CaseStudyPage />
    </>
  );
}
