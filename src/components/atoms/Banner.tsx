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
      width="100%"
      minHeight={{ xxl: '1151px', xl: '893px', lg: '840px', md: '855px', xs: '792px' }}
    >
      <Box
        position="absolute"
        zIndex={-1}
        top={0}
        left={0}
        width="100%"
        sx={{
          backgroundImage: `url(${src})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: matches ? 'cover' : 'auto',
          height: { xxl: '1151px', xl: '893px', lg: '840px', md: '855px', xs: '792px' },
          // paddingTop: { xxl: '59.86%', xl: '52.3%', lg: '70%', md: '87.7%', xs: '109.3%' },
        }}
      />
      {children}
    </Box>
  );
};

export default Banner;
