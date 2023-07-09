import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { PartnersSubService, SubServiceBanner, WhatWeDo } from '../molecules';
import { ServicesEnum } from '@/constants';

interface IServiceMobilePageProps {}

export const ServiceMobilePage: React.FunctionComponent<IServiceMobilePageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Empower your mobile app experience" />
        <PartnersSubService tag={ServicesEnum.MOBILE} />
        <WhatWeDo tag={ServicesEnum.MOBILE} />
      </Box>
    </MainTemplate>
  );
};
