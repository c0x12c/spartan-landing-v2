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
import { CloudWorkingProcessData, ServicesEnum } from '@/constants';

interface IServiceCloudPageProps {}

export const ServiceCloudPage: React.FunctionComponent<IServiceCloudPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Leverage the power of cloud solutions" />
        <PartnersSubService tag={ServicesEnum.CLOUD} />
        <WhatWeDo tag={ServicesEnum.CLOUD} />
        <ChooseUs tag={ServicesEnum.CLOUD} />
        <SubServiceWorkingProcess items={CloudWorkingProcessData} />
        <SubServiceProjects tag={ServicesEnum.CLOUD} />
      </Box>
    </MainTemplate>
  );
};
