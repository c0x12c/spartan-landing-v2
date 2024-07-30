import React from 'react';
import { MainTemplate } from '../templates';
import {
  HomeBanner,
  OurServicesV2,
  OurClients,
  TrustByManagementTeam,
  OurProjects,
  WhyBusinessV2,
} from '../molecules';

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
      <OurProjects />
    </MainTemplate>
  );
};
