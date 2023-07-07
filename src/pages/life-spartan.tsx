import { SEO } from '@/components/atoms';
import { LifeSpartanPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function LifeSpartan() {
  return (
    <>
      <SEO page={EPages.LIFE_SPARTAN} />
      <LifeSpartanPage />
    </>
  );
}
