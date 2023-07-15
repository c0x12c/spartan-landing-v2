import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import {
  SpartanOperatesBanner,
  SpartanOperatesProcess,
  SpartanOperatesStandards,
} from '../molecules';

interface ISpartanOperatesProps {}

export const SpartanOperates: React.FunctionComponent<ISpartanOperatesProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column">
        <SpartanOperatesBanner />
        <SpartanOperatesProcess />
        <SpartanOperatesStandards />
      </Box>
    </MainTemplate>
  );
};
