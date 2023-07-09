import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';

interface IServiceBackendPageProps {}

export const ServiceBackendPage: React.FunctionComponent<IServiceBackendPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px"></Box>
    </MainTemplate>
  );
};
