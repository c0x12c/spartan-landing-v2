import { SEO } from '@/components/atoms';
import { AboutUsPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function Home() {
  return (
    <>
      <SEO page={EPages.ABOUT_US} />
      <AboutUsPage />
    </>
  );
}
