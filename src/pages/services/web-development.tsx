import { SEO } from '@/components/atoms';
import { ServiceWebPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ServiceWeb() {
  return (
    <>
      <SEO page={EPages.SERVICES_WEB} />
      <ServiceWebPage />
    </>
  );
}
