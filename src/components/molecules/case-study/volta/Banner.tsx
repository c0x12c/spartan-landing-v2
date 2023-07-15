import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import bg from '@/assets/images/case-volta/banner.png';
import bgSp from '@/assets/images/case-volta/banner-sp.png';
import appIcon from '@/assets/images/case-volta/app-icon.png';
import { Banner, Container } from '@/components/atoms';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';
import BannerImageMD from '../../../../assets/images/case-volta/banner-image.svg';

interface ICaseStudyVoltaBannerProps {}

export const CaseStudyVoltaBanner: React.FunctionComponent<ICaseStudyVoltaBannerProps> = () => {
  const matchesMobile = useBreakpoint(BreakPoints.MD);
  return (
    <React.Fragment>
      <Box
        sx={{
          background: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Banner
          src={!matchesMobile ? undefined : bgSp.src}
          haveBackground={false}
          bannerElement={
            !matchesMobile ? undefined : (
              <Image
                src={BannerImageMD}
                alt="banner-image"
                style={{ marginLeft: 'auto', display: 'block' }}
              />
            )
          }
        >
          <Box pt={{ xl: '207px', lg: '107px', xs: '82px' }}>
            <Container>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Image src={appIcon} alt="appIcon" />
                  <Typography
                    variant="fs64"
                    fontSize={{ xs: '36px', lg: '64px' }}
                    color={base.white}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    component="h1"
                    my="24px"
                  >
                    Volta Wallet
                  </Typography>
                  <Typography
                    variant={'fs18'}
                    fontSize={{ xs: '14px', lg: '18px' }}
                    color={colors.base.white}
                    maxWidth="538px"
                    data-aos="fade-up"
                    data-aos-delay="300"
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
      </Box>
    </React.Fragment>
  );
};
