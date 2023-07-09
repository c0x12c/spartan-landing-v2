import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { CaseStudyURSABanner, OverviewURSA } from '../molecules';

interface ICaseStudyURSALivePageProps {}

export const CaseStudyURSALivePage: React.FunctionComponent<ICaseStudyURSALivePageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="100px">
        <CaseStudyURSABanner />
        <OverviewURSA />

        <NextProject />
      </Box>
    </MainTemplate>
  );
};
