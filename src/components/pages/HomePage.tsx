import React from 'react';
import { MainTemplate } from '../templates';
import {
  GlobalImpact,
  Clients,
  HomeBanner,
  OurServicesV2,
  WhyBusiness,
  OurClients,
} from '../molecules';
import { GetInTouch } from '../atoms';

type Props = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <HomeBanner />
      <OurServicesV2 />
      <OurClients />
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
