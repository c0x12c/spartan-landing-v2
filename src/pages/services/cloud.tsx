import { SEO } from '@/components/atoms';
import { ServiceCloudPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ServiceCloud() {
  return (
    <>
      <SEO page={EPages.SERVICES_CLOUD} />
      <ServiceCloudPage />
    </>
  );
}
