import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import ContactUsPage from '@/components/pages/ContactUsPage';

export default function AboutUs() {
  return (
    <>
      <SEO page={EPages.CONTACT_US} />
      <ContactUsPage />
    </>
  );
}
