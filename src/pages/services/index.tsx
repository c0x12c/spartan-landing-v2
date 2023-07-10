import { SEO } from '@/components/atoms';
import { ServicesPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function Services() {
  return (
    <>
      <SEO page={EPages.SERVICES} />
      <ServicesPage />
    </>
  );
}
