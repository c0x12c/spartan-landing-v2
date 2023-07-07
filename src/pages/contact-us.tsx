import { SEO } from '@/components/atoms';
import { ContactUsPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ReadyToJoin() {
  return (
    <>
      <SEO page={EPages.CONTACT_US} />
      <ContactUsPage />
    </>
  );
}
