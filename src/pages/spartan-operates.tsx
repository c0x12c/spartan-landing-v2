import { SEO } from '@/components/atoms';
import { SpartanOperates } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function CaseStudyVolta() {
  return (
    <>
      <SEO page={EPages.SPARTAN_OPERATES} />
      <SpartanOperates />
    </>
  );
}
