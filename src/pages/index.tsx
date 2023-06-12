import SEO from '@/components/atoms/SEO';
import { EPages } from '@/documents/types';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
  return (
    <>
      <SEO page={EPages.HOME} />
      <HomePage />
    </>
  );
}
