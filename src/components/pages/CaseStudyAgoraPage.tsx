import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { CaseStudyAgoraBanner, OverviewAgora, ResultAgora, WhatWeDoAgora } from '../molecules';

interface ICaseStudyAgoraPageProps {}

export const CaseStudyAgoraPage: React.FunctionComponent<ICaseStudyAgoraPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="100px">
        <CaseStudyAgoraBanner />
        <OverviewAgora />
        <WhatWeDoAgora />
        <ResultAgora />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
