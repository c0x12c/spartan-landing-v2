import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { PartnersSubService, SubServiceBanner } from '../molecules';

interface IServiceBackendPageProps {}

export const ServiceBackendPage: React.FunctionComponent<IServiceBackendPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Build robust backend applications" />
        <PartnersSubService tag="backend" />
      </Box>
    </MainTemplate>
  );
};
