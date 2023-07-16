import * as React from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';
import bg from '@/assets/images/case-volta/banner.png';
import bgSp from '@/assets/images/case-volta/banner-sp.png';
import appIcon from '@/assets/images/case-volta/app-icon.png';
import { Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import BannerImageMD from '../../../../assets/images/case-volta/banner-image.svg';
import { base } from '@/styles/colors';

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
                  <MainTitle
                    text="Volta Wallet"
                    sx={{ my: '24px' }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                  <BodyText
                    sx={{ maxWidth: '538px', color: base.white }}
                    text="Volta Wallet is a unique crypto wallet application developed by Spartan, an IT
                    consulting company. The mission of Volta Wallet is to provide effortless Web3
                    solutions, focusing on delivering exceptional functionality, security, and user
                    experience in the realm of Web3 technologies. The goal is to empower users with
                    seamless access to the benefits of the decentralized web, driving meaningful
                    change and creating a connected world."
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Banner>
      </Box>
    </React.Fragment>
  );
};
