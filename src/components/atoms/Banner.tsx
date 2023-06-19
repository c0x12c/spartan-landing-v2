import { Box } from '@mui/material';
import * as React from 'react';

interface IBannerProps {
  children: React.ReactNode;
  src: { xxl: string; xl: string; lg: string; md: string; sm: string };
}

const Banner: React.FunctionComponent<IBannerProps> = ({ src, children }) => {
  return (
    <Box
      position="relative"
      sx={{
        backgroundImage: src,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        paddingTop: { xxl: '59.86%', xl: '62.3%', lg: '70%', md: '87.7%', xs: '109.3%' },
        backgroundSize: 'cover',
      }}
    >
      <Box position="absolute" top="0" left="0" width="100%" height="100%">
        {children}
      </Box>
    </Box>
  );
};

export default Banner;
