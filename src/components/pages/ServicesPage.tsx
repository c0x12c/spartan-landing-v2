import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import {
  CareYourBusiness,
  ServiceCasesStudy,
  ServicesBanner,
  ServicesOffer,
  TechStacks,
} from '../molecules';

interface IServicesPageProps {}

export const ServicesPage: React.FunctionComponent<IServicesPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <ServicesBanner />
        <ServicesOffer />
        <TechStacks />
        <CareYourBusiness />
        <ServiceCasesStudy />
      </Box>
    </MainTemplate>
  );
};
