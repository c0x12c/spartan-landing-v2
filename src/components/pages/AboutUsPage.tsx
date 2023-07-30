import React from 'react';
import { MainTemplate } from '../templates/MainTemplate';
import { Box } from '@mui/material';
import {
  AboutUsBanner,
  Description,
  EmpowerTech,
  SuccessFactors,
  Uniqueness,
} from '../molecules/about-us';

type Props = {
  children?: React.ReactNode;
};

export const AboutUsPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <Box display={'flex'} flexDirection={'column'} gap={{ md: '64px', xs: '0' }}>
        <AboutUsBanner />
        <Description />
        <SuccessFactors />
        <Uniqueness />
        <EmpowerTech />
      </Box>
    </MainTemplate>
  );
};
