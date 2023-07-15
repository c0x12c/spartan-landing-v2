import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import {
  OnCallAndMonitor,
  SpartanOperatesBanner,
  SpartanOperatesProcess,
  SpartanOperatesStandards,
  TrunkBasedDev,
} from '../molecules';

interface ISpartanOperatesProps {}

export const SpartanOperates: React.FunctionComponent<ISpartanOperatesProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column">
        <SpartanOperatesBanner />
        <SpartanOperatesProcess />
        <SpartanOperatesStandards />
        <OnCallAndMonitor />
        <TrunkBasedDev />
      </Box>
    </MainTemplate>
  );
};
