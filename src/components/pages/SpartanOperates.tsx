import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { SpartanOperatesBanner } from '../molecules';

interface ISpartanOperatesProps {}

export const SpartanOperates: React.FunctionComponent<ISpartanOperatesProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={{ md: '44px', xs: 0 }}>
        <SpartanOperatesBanner />
      </Box>
    </MainTemplate>
  );
};
