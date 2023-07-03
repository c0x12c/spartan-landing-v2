import * as React from 'react';
import { MainTemplate } from '../templates';
import { LifeSpartanBanner } from '../molecules';

interface ILifeSpartanPageProps {}

export const LifeSpartanPage: React.FunctionComponent<ILifeSpartanPageProps> = () => {
  return (
    <MainTemplate>
      <LifeSpartanBanner />
    </MainTemplate>
  );
};
