import { BodyText } from '@/components/atoms';
import PrimaryTitle from '@/components/atoms/typography/PrimaryTitle';
import { WhyUsText } from '@/constants/benefits';
import { Box } from '@mui/material';
import React from 'react';

const WhyUs = () => {
  return (
    <Box>
      <PrimaryTitle text="Why Us?" sx={{ mb: '8px' }} />
      <BodyText sx={{ fontSize: { xs: '14px', md: '16px' } }} text={WhyUsText} />
    </Box>
  );
};

export default WhyUs;
