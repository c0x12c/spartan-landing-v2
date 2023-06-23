import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import CaseStudyPage from '@/components/pages/CaseStudyPage';

export default function CaseStudy() {
  return (
    <>
      <SEO page={EPages.CASE_STUDY} />
      <CaseStudyPage />
    </>
  );
}
