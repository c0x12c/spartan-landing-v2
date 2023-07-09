import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';

interface IServiceEmergingPageProps {}

export const ServiceEmergingPage: React.FunctionComponent<IServiceEmergingPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px"></Box>
    </MainTemplate>
  );
};
