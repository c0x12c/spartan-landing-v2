import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@/components/atoms/Container';
import Image from 'next/image';
import bg from '@/assets/images/case-study/volta-banner.svg';
import volta from '@/assets/images/case-study/volta.svg';
import Banner from '@/components/atoms/Banner';
interface ICaseStudyVoltaBannerProps {}

const CaseStudyVoltaBanner: React.FunctionComponent<ICaseStudyVoltaBannerProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
      <Banner src={bg.src}>
        <Box pt={{ lg: '224px', xs: '142px' }}>
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  variant={matchesDesktop ? 'fs100' : matchesMobile ? 'fs40' : 'fs80'}
                  color={colors.base.white}
                  component="h1"
                  mb="32px"
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
              <Grid item xs={12} md={6}>
                <Image
                  src={volta}
                  alt="volta"
                  style={{ maxWidth: '100%', marginTop: matchesMobile ? '-40%' : 0 }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Banner>
    </React.Fragment>
  );
};

export default CaseStudyVoltaBanner;
