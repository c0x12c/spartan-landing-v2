import * as React from 'react';
import { SEO } from '@/components/atoms';
import { EPages } from '@/documents/types';
import { NotFoundPage } from '@/components/pages';

interface ICustom404Props {}

const Custom404: React.FunctionComponent<ICustom404Props> = (props) => {
  return (
    <>
      <SEO page={EPages.ABOUT_US} />
      <NotFoundPage />
    </>
  );
};

export default Custom404;
