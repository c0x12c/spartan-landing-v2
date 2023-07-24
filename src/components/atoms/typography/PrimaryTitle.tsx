import { primary } from '@/styles/colors';
import { SxProps, Typography } from '@mui/material';
import React from 'react';

const PrimaryTitle = ({ text, sx }: { text: string; sx?: SxProps }) => {
  return (
    <Typography
      color={primary[850]}
      fontWeight={900}
      fontSize={{ xs: '20px', md: '24px' }}
      component={'h5'}
      sx={sx}
    >
      {text}
    </Typography>
  );
};

export default PrimaryTitle;
