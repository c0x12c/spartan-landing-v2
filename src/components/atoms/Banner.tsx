import * as React from 'react';
import { Box } from '@mui/material';

interface IBannerProps {
  children: React.ReactNode;
  src?: string;
  bannerElement?: React.ReactNode;
  haveBackground?: boolean;
}

export const Banner: React.FunctionComponent<IBannerProps> = ({
  src,
  children,
  bannerElement,
  haveBackground = true,
}) => {
  return (
    <Box position="relative" width="100%" minHeight={{ lg: '840px', md: '855px', xs: '792px' }}>
      {haveBackground && (
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
      )}

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
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: { lg: '840px', md: '855px', xs: '792px' },
          }}
        />
      )}
      {children}
    </Box>
  );
};
