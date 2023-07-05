import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import {
  CaseStudyVoltaBanner,
  Top100Coins,
  VoltaResult,
  VoltaStory,
  VoltaTechStacks,
  VoltaWeDo,
} from '../molecules';
import { Download, NextProject } from '../atoms';

interface ICaseStudyVoltaPageProps {}

export const CaseStudyVoltaPage: React.FunctionComponent<ICaseStudyVoltaPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <CaseStudyVoltaBanner />
        <VoltaStory />
        <Top100Coins />
        <VoltaWeDo />
        <VoltaTechStacks />
        <VoltaResult />
        <Download
          linkIos="https://apps.apple.com/us/app/nukey/id6443665676"
          linkAppStore="https://play.google.com/store/apps/details?id=fi.nukey.android"
        />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};
