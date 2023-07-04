import { SEO } from '@/components/atoms';
import { InternshipPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function LifeSpartan() {
  return (
    <>
      <SEO page={EPages.INTERNSHIP} />
      <InternshipPage />
    </>
  );
}
