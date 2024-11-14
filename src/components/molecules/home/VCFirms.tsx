import { BlockLayout } from '@/components/templates';
import { Typography } from '@mui/material';
import React from 'react';

export const VCFirms = () => {
  return (
    <BlockLayout
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        backgroundImage: {
          xs: 'url(/vcfirm-mobile.png)',
          sm: 'url(/vcfirm-tablet.png)',
          lg: 'url(/vcfirm.png)',
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: {
          xs: '300px',
          sm: '480px',
          md: '550px',
          lg: '420px',
        },
        paddingX: {
          xs: 1,
          md: 5,
          lg: 15,
        },
        paddingY: {
          xs: 5,
          md: 6,
          lg: 6,
        },
      }}
    >
      <Typography
        variant="fs24"
        typography={{ xs: 'fs16', sm: 'fs24' }}
        color="#030303"
        fontWeight={'400 !important'}
        maxWidth={768}
      >
        We’re proud to be developing projects for our clients, with funding support from VC firms.
      </Typography>
    </BlockLayout>
  );
};
