import { Box, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';

interface IBannerProps {
  children: React.ReactNode;
  src: string;
}

const Banner: React.FunctionComponent<IBannerProps> = ({ src, children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xxl'));

  return (
    <Box
      position="relative"
      sx={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: matches ? '100%' : 'auto',
        paddingTop: { xxl: '59.86%', xl: '52.3%', lg: '70%', md: '87.7%', xs: '109.3%' },
      }}
    >
      <Box position="absolute" top="0" left="0" width="100%" height="100%">
        {children}
      </Box>
    </Box>
  );
};

export default Banner;
