import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { CaseStudyHeruBanner, OverviewHeru } from '../molecules';

interface ICaseStudyHeruPageProps {}

export const CaseStudyHeruPage: React.FunctionComponent<ICaseStudyHeruPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="100px">
        <CaseStudyHeruBanner />
        <OverviewHeru />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
