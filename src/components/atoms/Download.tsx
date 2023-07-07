import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import btnIos from '@/assets/images/case-volta/btn-ios.svg';
import btnGGPlay from '@/assets/images/case-volta/btn-gg-play.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IDownloadProps {
  linkIos?: string;
  linkAppStore?: string;
}

export const Download: React.FunctionComponent<IDownloadProps> = ({ linkIos, linkAppStore }) => {
  const isMobile = useBreakpoint(BreakPoints.SM);

  return (
    <Box data-aos="zoom-in" data-aos-delay="200">
      <Container>
        <Box
          py="64px"
          borderRadius="20px"
          sx={{
            background: 'linear-gradient(154deg, #BAFFDE 0%, #C9DEFF 100%)',
          }}
        >
          <Typography
            variant="fs24"
            color={colors.base.black}
            component="h4"
            mb="44px"
            textAlign="center"
            maxWidth="562px"
            mx="auto"
          >
            To gain deeper insights into our project, download Volta and embark on your own
            experiential journey.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="44px"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            {linkIos && (
              <Link href={linkIos} target="_blank">
                <Image src={btnIos} alt="btnIos" style={{ maxWidth: '100%', height: 'auto' }} />
              </Link>
            )}
            {linkAppStore && (
              <Link href={linkAppStore} target="_blank">
                <Image
                  src={btnGGPlay}
                  alt="btnGGPlay"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Link>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
