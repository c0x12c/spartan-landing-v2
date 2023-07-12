import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import { Box } from '@mui/material';
import {
  AboutUsBanner,
  Description,
  EmpowerTech,
  SuccessFactors,
  Uniqueness,
  // Founders,
} from '../molecules/about-us';

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
        {/* <Founders /> */}
        <EmpowerTech />
      </Box>
    </MainTemplate>
  );
};
