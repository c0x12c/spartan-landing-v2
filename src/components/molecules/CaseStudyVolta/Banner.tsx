import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Banner from '@/components/atoms/Banner';
import Container from '@/components/atoms/Container';
import bg from '@/assets/images/case-volta/banner.png';
import bgSp from '@/assets/images/case-volta/banner-sp.png';
import appIcon from '@/assets/images/case-volta/app-icon.png';

interface ICaseStudyVoltaBannerProps {}

const CaseStudyVoltaBanner: React.FunctionComponent<ICaseStudyVoltaBannerProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Banner src={!matchesMobile ? bg.src : bgSp.src} haveBackground={false}>
        <Box pt={{ xl: '207px', lg: '107px', xs: '142px' }}>
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Image src={appIcon} alt="appIcon" />
                <Typography
                  variant={matchesDesktop ? 'fs100' : matchesMobile ? 'fs40' : 'fs80'}
                  color={colors.base.white}
                  component="h1"
                  my="32px"
                >
                  Volta Wallet
                </Typography>
                <Typography
                  variant={matchesMobile ? 'fs16' : 'fs18'}
                  color={colors.base.white}
                  letterSpacing="0.01em"
                  maxWidth="526px"
                >
                  Volta Wallet is a unique crypto wallet application developed by Spartan, an IT
                  consulting company. The mission of Volta Wallet is to provide effortless Web3
                  solutions, focusing on delivering exceptional functionality, security, and user
                  experience in the realm of Web3 technologies. The goal is to empower users with
                  seamless access to the benefits of the decentralized web, driving meaningful
                  change and creating a connected world.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Banner>
    </React.Fragment>
  );
};

export default CaseStudyVoltaBanner;
