import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { Download, NextProject } from '../atoms';
import {
  AboutProject,
  Banner,
  OurRole,
  TheResult,
  WhatWeDo,
} from '../molecules/case-study/chargefuze';
import { LiquidityTechStacks } from '../molecules/liquidity';
interface ICaseStudyCFPageProps {}

export const CaseStudyCFPage: React.FunctionComponent<ICaseStudyCFPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <Banner />
        <AboutProject />
        <OurRole />
        <WhatWeDo />
        <LiquidityTechStacks />
        <TheResult />
        <Download
          background="linear-gradient(140deg, #B1DDFF 0%, #BBD6FF 100%);"
          linkAppStore="https://play.google.com/store/apps/details?id=com.chargefuze.android&hl=en_US&gl=US"
          linkIos="https://apps.apple.com/us/app/chargefuze/id1475987143"
        />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
