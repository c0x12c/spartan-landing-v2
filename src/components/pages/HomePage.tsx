import React from 'react';
import { MainTemplate } from '../templates';
import {
  Clients,
  GlobalImpact,
  HomeBanner,
  OurServices,
  Partners,
  WhyBusiness,
} from '../molecules';
import { GetInTouch } from '../atoms';

type Props = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <HomeBanner />
      <Partners />
      <OurServices />
      <WhyBusiness />
      <GlobalImpact />
      <Clients />
      <GetInTouch
        title="Interested in knowing more about Spartan?"
        textButton="Become the next Spartan"
        linkButton="/apply-job"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </MainTemplate>
  );
};
