import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { CaseStudyAgoraBanner, OverviewAgora, ResultAgora, WhatWeDoAgora } from '../molecules';
import TechnologyStack from '../molecules/case-study/agora/TechnologyStack';

interface ICaseStudyAgoraPageProps {}

export const CaseStudyAgoraPage: React.FunctionComponent<ICaseStudyAgoraPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={{ xs: '0', md: '100px' }}>
        <CaseStudyAgoraBanner />
        <OverviewAgora />
        <WhatWeDoAgora />
        <ResultAgora />
        <TechnologyStack />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
