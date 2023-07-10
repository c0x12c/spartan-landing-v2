import { SEO } from '@/components/atoms';
import { ServiceMobilePage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ServiceMobile() {
  return (
    <>
      <SEO page={EPages.SERVICES_MOBILE} />
      <ServiceMobilePage />
    </>
  );
}
