import { SEO } from '@/components/atoms';
import { CaseStudyAgoraPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyAgora() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY_AGORA} />
      <CaseStudyAgoraPage />
    </>
  );
}
