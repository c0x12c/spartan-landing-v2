import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { SubServiceBanner } from '../molecules';

interface IServiceCloudPageProps {}

export const ServiceCloudPage: React.FunctionComponent<IServiceCloudPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Leverage the power of cloud solutions" />
      </Box>
    </MainTemplate>
  );
};
