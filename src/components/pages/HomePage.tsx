import React from 'react';
import { MainTemplate } from '../templates';
import {
  GlobalImpact,
  Clients,
  HomeBanner,
  OurServicesV2,
  WhyBusiness,
  OurClients,
  TrustByManagementTeam,
} from '../molecules';
import { GetInTouch } from '../atoms';
import { WhyBusinessV2 } from '../molecules/business/WhyBusinessV2';

type Props = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <HomeBanner />
      <OurServicesV2 />
      <OurClients />
      <WhyBusinessV2 />
      <TrustByManagementTeam />
    </MainTemplate>
  );
};
