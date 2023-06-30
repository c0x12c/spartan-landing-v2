import React from 'react';
import { MainTemplate } from '../templates';
import { AboutUsBanner } from '../molecules';

type Props = {
  children?: React.ReactNode;
};

export const AboutUsPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <AboutUsBanner />
    </MainTemplate>
  );
};
