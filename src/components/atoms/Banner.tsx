import { Box, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';

interface IBannerProps {
  children: React.ReactNode;
  src?: string;
  bannerElement?: React.ReactNode;
}

const Banner: React.FunctionComponent<IBannerProps> = ({ src, children, bannerElement }) => {
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
          height: '100%',
          background: `linear-gradient(94deg, #00030E 0%, rgba(2, 1, 30, 0.89) 39.70%, rgba(0, 10, 52, 0.80) 67.19%, rgba(0, 9, 40, 0.44) 100%)`,
        }}
      />
      {bannerElement && bannerElement}
      {src && (
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
          }}
        />
      )}
      {children}
    </Box>
  );
};

export default Banner;
