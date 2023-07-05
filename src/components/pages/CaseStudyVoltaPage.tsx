import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { CaseStudyVoltaBanner, Top100Coins, VoltaStory } from '../molecules';

interface ICaseStudyVoltaPageProps {}

export const CaseStudyVoltaPage: React.FunctionComponent<ICaseStudyVoltaPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <CaseStudyVoltaBanner />
        <VoltaStory />
        <Top100Coins />
      </Box>
    </MainTemplate>
  );
};
