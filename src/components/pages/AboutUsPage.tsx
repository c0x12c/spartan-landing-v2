import React from 'react';
import { MainTemplate } from '../templates';
import { AboutUsBanner } from '../molecules';
import { Box } from '@mui/material';
import { Description } from '../molecules/about-us';
import { SuccessFactors } from '../molecules/about-us';
import { Uniqueness } from '../molecules/about-us';
import { Founders } from '../molecules/about-us/Founders';

type Props = {
  children?: React.ReactNode;
};

export const AboutUsPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <Box display={'flex'} flexDirection={'column'} gap={'64px'}>
        <AboutUsBanner />
        <Description />
        <SuccessFactors />
        <Uniqueness />
        <Founders />
      </Box>
    </MainTemplate>
  );
};
