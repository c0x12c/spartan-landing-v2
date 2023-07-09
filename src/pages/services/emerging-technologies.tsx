import { SEO } from '@/components/atoms';
import { ServiceEmergingPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ServiceEmerging() {
  return (
    <>
      <SEO page={EPages.SERVICES_EMERGING} />
      <ServiceEmergingPage />
    </>
  );
}
