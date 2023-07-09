import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { PartnersSubService, SubServiceBanner, WhatWeDo } from '../molecules';
import { ServicesEnum } from '@/constants';

interface IServiceWebPageProps {}

export const ServiceWebPage: React.FunctionComponent<IServiceWebPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Create dynamic web applications" />
        <PartnersSubService tag={ServicesEnum.WEB} />
        <WhatWeDo tag={ServicesEnum.WEB} />
      </Box>
    </MainTemplate>
  );
};
