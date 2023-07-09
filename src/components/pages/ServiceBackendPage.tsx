import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { ChooseUs, PartnersSubService, SubServiceBanner, WhatWeDo } from '../molecules';
import { ServicesEnum } from '@/constants';

interface IServiceBackendPageProps {}

export const ServiceBackendPage: React.FunctionComponent<IServiceBackendPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Build robust backend applications" />
        <PartnersSubService tag={ServicesEnum.BACKEND} />
        <WhatWeDo tag={ServicesEnum.BACKEND} />
        <ChooseUs tag={ServicesEnum.BACKEND} />
      </Box>
    </MainTemplate>
  );
};
