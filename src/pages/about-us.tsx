import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import AboutUsPage from '@/components/pages/AboutUsPage';

export default function AboutUs() {
  return (
    <>
      <SEO page={EPages.ABOUT_US} />
      <AboutUsPage />
    </>
  );
}
