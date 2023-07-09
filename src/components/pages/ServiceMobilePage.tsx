import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { SubServiceBanner } from '../molecules';

interface IServiceMobilePageProps {}

export const ServiceMobilePage: React.FunctionComponent<IServiceMobilePageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <SubServiceBanner title="Empower your mobile app experience" />
      </Box>
    </MainTemplate>
  );
};
