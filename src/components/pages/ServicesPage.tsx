import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import {
  CareYourBusiness,
  ServiceCasesStudy,
  ServicesBanner,
  ServicesOffer,
  TechStacks,
  WorkingProcess,
} from '../molecules';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IServicesPageProps {}

export const ServicesPage: React.FunctionComponent<IServicesPageProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={isMobile ? '24px' : '44px'}>
        <ServicesBanner />
        <ServicesOffer />
        <TechStacks />
        <CareYourBusiness />
        <WorkingProcess />
        <ServiceCasesStudy />
      </Box>
    </MainTemplate>
  );
};
