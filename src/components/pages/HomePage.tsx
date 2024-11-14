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
import { VCFirms } from '../molecules/home/VCFirms';

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
      <VCFirms />
      <OurProjects />
    </MainTemplate>
  );
};
