import { SEO } from '@/components/atoms';
import { HomePage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function Home() {
  return (
    <>
      <SEO page={EPages.HOME} />
      <HomePage />
    </>
  );
}
