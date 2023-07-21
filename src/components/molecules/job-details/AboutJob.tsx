import { BodyText } from '@/components/atoms';
import PrimaryTitle from '@/components/atoms/typography/PrimaryTitle';
import { Box } from '@mui/material';
import React from 'react';

const AboutJob = ({ text }: { text: string }) => {
  return (
    <Box>
      <PrimaryTitle text="About the job" sx={{ mb: '8px' }} />
      <BodyText text={text} sx={{ fontSize: { xs: '14px', md: '16px' } }} />
    </Box>
  );
};

export default AboutJob;
