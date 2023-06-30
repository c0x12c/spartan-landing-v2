import React from 'react';
import { MainTemplate } from '../templates';
import { Clients, GlobalImpact, HomeBanner, Partners, WhyBusiness } from '../molecules';
import { GetInTouch } from '../atoms';

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
      <GetInTouch
        title="Interested in knowing more about Spartan?"
        textButton="Being next spartan"
        linkButton="/apply-job"
      />
    </MainTemplate>
  );
};
