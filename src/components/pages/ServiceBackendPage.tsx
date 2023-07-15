import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import {
  ChooseUs,
  PartnersSubService,
  SubServiceBanner,
  SubServiceProjects,
  SubServiceWorkingProcess,
  WhatWeDo,
} from '../molecules';
import { BackendWorkingProcessData, ServicesEnum } from '@/constants';

interface IServiceBackendPageProps {}

export const ServiceBackendPage: React.FunctionComponent<IServiceBackendPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={{ md: '44px', xs: 0 }}>
        <SubServiceBanner title="Build robust backend applications" />
        <PartnersSubService tag={ServicesEnum.BACKEND} />
        <WhatWeDo tag={ServicesEnum.BACKEND} />
        <ChooseUs tag={ServicesEnum.BACKEND} />
        <SubServiceWorkingProcess items={BackendWorkingProcessData} />
        <SubServiceProjects tag={ServicesEnum.BACKEND} />
      </Box>
    </MainTemplate>
  );
};
