import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';

interface IServicesPageProps {}

export const ServicesPage: React.FunctionComponent<IServicesPageProps> = (props) => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px"></Box>
    </MainTemplate>
  );
};
