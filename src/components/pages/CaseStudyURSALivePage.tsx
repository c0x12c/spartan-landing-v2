import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { CaseStudyURSABanner, OverviewURSA, ResultURSA, WhatWeDoURSA } from '../molecules';
import TechnologyStack from '../molecules/case-study/ursa/StackTechnology';

interface ICaseStudyURSALivePageProps {}

export const CaseStudyURSALivePage: React.FunctionComponent<ICaseStudyURSALivePageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={{ xs: '0', md: '100px' }}>
        <CaseStudyURSABanner />
        <OverviewURSA />
        <WhatWeDoURSA />
        <ResultURSA />
        <TechnologyStack />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
