import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { ChooseUs, PartnersSubService, SubServiceBanner, WhatWeDo } from '../molecules';
import { ServicesEnum } from '@/constants';

interface IServiceCloudPageProps {}

export const ServiceCloudPage: React.FunctionComponent<IServiceCloudPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Leverage the power of cloud solutions" />
        <PartnersSubService tag={ServicesEnum.CLOUD} />
        <WhatWeDo tag={ServicesEnum.CLOUD} />
        <ChooseUs tag={ServicesEnum.CLOUD} />
      </Box>
    </MainTemplate>
  );
};
