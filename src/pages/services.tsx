import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import ServicesPage from '@/components/pages/ServicesPage';

export default function Services() {
  return (
    <>
      <SEO page={EPages.SERVICE} />
      <ServicesPage />
    </>
  );
}
