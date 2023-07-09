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
import { EmergingWorkingProcessData, ServicesEnum } from '@/constants';

interface IServiceEmergingPageProps {}

export const ServiceEmergingPage: React.FunctionComponent<IServiceEmergingPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Unlock the power of emerging technologies" />
        <PartnersSubService tag={ServicesEnum.EMERGING} />
        <WhatWeDo tag={ServicesEnum.EMERGING} />
        <ChooseUs tag={ServicesEnum.EMERGING} />
        <SubServiceWorkingProcess items={EmergingWorkingProcessData} />
        <SubServiceProjects tag={ServicesEnum.EMERGING} />
      </Box>
    </MainTemplate>
  );
};
