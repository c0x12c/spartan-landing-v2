import { SEO } from '@/components/atoms';
import { ReadyToJoinPage } from '@/components/pages';
import { EPages } from '@/documents/types';

export default function ReadyToJoin() {
  return (
    <>
      <SEO page={EPages.READY_TO_JOIN} />
      <ReadyToJoinPage />
    </>
  );
}
