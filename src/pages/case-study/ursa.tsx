import { SEO } from '@/components/atoms';
import { CaseStudyURSALivePage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyURSA() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY_URSA} />
      <CaseStudyURSALivePage />
    </>
  );
}
