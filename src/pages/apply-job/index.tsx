import { SEO } from '@/components/atoms';
import { ApplyJobPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ApplyJob() {
  return (
    <>
      <SEO page={EPages.ABOUT_US} />
      <ApplyJobPage />
    </>
  );
}
