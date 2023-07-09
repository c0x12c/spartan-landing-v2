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
import { MobileWorkingProcessData, ServicesEnum } from '@/constants';

interface IServiceMobilePageProps {}

export const ServiceMobilePage: React.FunctionComponent<IServiceMobilePageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Empower your mobile app experience" />
        <PartnersSubService tag={ServicesEnum.MOBILE} />
        <WhatWeDo tag={ServicesEnum.MOBILE} />
        <ChooseUs tag={ServicesEnum.MOBILE} />
        <SubServiceWorkingProcess items={MobileWorkingProcessData} />
        <SubServiceProjects tag={ServicesEnum.MOBILE} />
      </Box>
    </MainTemplate>
  );
};
