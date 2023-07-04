import * as React from 'react';
import { MainTemplate } from '../templates';
import {
  LifeSpartanBanner,
  LifeSpartanFeatures,
  LifeSpartanSentence,
  TeamEngineers,
} from '../molecules';
import { Box } from '@mui/material';

interface ILifeSpartanPageProps {}

export const LifeSpartanPage: React.FunctionComponent<ILifeSpartanPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <LifeSpartanBanner />
        <LifeSpartanSentence />
        <LifeSpartanFeatures />
        <TeamEngineers />
      </Box>
    </MainTemplate>
  );
};
