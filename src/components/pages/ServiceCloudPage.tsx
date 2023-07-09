import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';

interface IServiceCloudPageProps {}

export const ServiceCloudPage: React.FunctionComponent<IServiceCloudPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px"></Box>
    </MainTemplate>
  );
};
