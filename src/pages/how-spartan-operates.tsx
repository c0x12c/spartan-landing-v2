import { SEO } from '@/components/atoms';
import { CaseStudy } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyVolta() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY} />
      <CaseStudy />
    </>
  );
}
