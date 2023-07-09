import { SEO } from '@/components/atoms';
import { ServiceBackendPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ServiceBackend() {
  return (
    <>
      <SEO page={EPages.SERVICES_BACKEND} />
      <ServiceBackendPage />
    </>
  );
}
