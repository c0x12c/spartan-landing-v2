import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import btnIos from '@/assets/images/case-volta/btn-ios.svg';
import btnGGPlay from '@/assets/images/case-volta/btn-gg-play.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Container } from './common/Container';

interface IDownloadProps {
  linkIos?: string;
  linkAppStore?: string;
  background?: string;
}

export const Download: React.FunctionComponent<IDownloadProps> = ({
  linkIos,
  linkAppStore,
  background = 'linear-gradient(154deg, #BAFFDE 0%, #C9DEFF 100%)',
}) => {
  const isMobile = useBreakpoint(BreakPoints.SM);
  const renderPanel = (
    <Box
      py="64px"
      px={{ xs: '15px', md: 0 }}
      borderRadius={{ xs: 0, md: '20px' }}
      sx={{
        background: background,
      }}
    >
      <Typography
        variant="fs24"
        fontSize={{ lg: '24px', xs: '18px' }}
        color={colors.base.black}
        component="h4"
        mb="44px"
        textAlign="center"
        maxWidth="562px"
        mx="auto"
      >
        To gain deeper insights into our project, download and embark on your own experiential
        journey.
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
            <Image src={btnGGPlay} alt="btnGGPlay" style={{ maxWidth: '100%', height: 'auto' }} />
          </Link>
        )}
      </Box>
    </Box>
  );

  return (
    <Box data-aos="zoom-in" data-aos-delay="200">
      {isMobile ? <Box>{renderPanel}</Box> : <Container>{renderPanel}</Container>}
    </Box>
  );
};
