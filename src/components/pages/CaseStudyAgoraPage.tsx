import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { CaseStudyAgoraBanner, OverviewAgora } from '../molecules';

interface ICaseStudyAgoraPageProps {}

export const CaseStudyAgoraPage: React.FunctionComponent<ICaseStudyAgoraPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="100px">
        <CaseStudyAgoraBanner />
        <OverviewAgora />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
