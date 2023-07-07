import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';

interface ISpartanOperatesProps {}

export const SpartanOperates: React.FunctionComponent<ISpartanOperatesProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px"></Box>
    </MainTemplate>
  );
};
