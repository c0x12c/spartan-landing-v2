import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { NextProject } from '../atoms';
import { Banner } from '../molecules/case-study/chargefuze';

interface ICaseStudyCFPageProps {}

export const CaseStudyCFPage: React.FunctionComponent<ICaseStudyCFPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <Banner />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
