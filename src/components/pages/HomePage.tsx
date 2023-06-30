import React from 'react';
import { MainTemplate } from '../templates';
import { Clients, GlobalImpact, HomeBanner, Partners, WhyBusiness } from '../molecules';

type Props = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <HomeBanner />
      <Partners />
      <WhyBusiness />
      <GlobalImpact />
      <Clients />
    </MainTemplate>
  );
};
