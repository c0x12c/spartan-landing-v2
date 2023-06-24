import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import CaseStudyVoltaPage from '@/components/pages/CaseStudyVoltaPage';

interface ICaseStudyVoltaProps {}

const CaseStudyVolta: React.FunctionComponent<ICaseStudyVoltaProps> = () => {
  return (
    <>
      <SEO page={EPages.CASE_STUDY_VOLTA} />
      <CaseStudyVoltaPage />
    </>
  );
};

export default CaseStudyVolta;
