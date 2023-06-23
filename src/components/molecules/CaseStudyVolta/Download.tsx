import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@/components/atoms/Container';
import Link from 'next/link';
import Image from 'next/image';
import btnIos from '@/assets/images/case-volta/btn-ios.svg';
import btnGGPlay from '@/assets/images/case-volta/btn-gg-play.svg';

interface IDownloadProps {}

const Download: React.FunctionComponent<IDownloadProps> = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box my="44px">
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
            flexDirection={matchesMobile ? 'column' : 'row'}
          >
            <Link href="/" target="_blank">
              <Image src={btnIos} alt="btnIos" style={{ maxWidth: '100%', height: 'auto' }} />
            </Link>
            <Link href="/" target="_blank">
              <Image src={btnGGPlay} alt="btnGGPlay" style={{ maxWidth: '100%', height: 'auto' }} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Download;
