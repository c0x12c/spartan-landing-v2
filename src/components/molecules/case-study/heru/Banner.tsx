import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import bg from '@/assets/images/case-heru/banner-image.png';
import { Banner, Container } from '@/components/atoms';
import { base } from '@/styles/colors';

interface ICaseStudyHeruBannerProps {}

export const CaseStudyHeruBanner: React.FunctionComponent<ICaseStudyHeruBannerProps> = () => {
  return (
    <React.Fragment>
      <Banner src={bg.src} haveBackground={false}>
        <Box pt={{ xl: '257px', lg: '107px', xs: '82px' }}>
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="fs64"
                  color={base.white}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  component="h1"
                  my="24px"
                >
                  Heru
                </Typography>
                <Typography
                  variant={'fs40'}
                  color={base.black}
                  maxWidth="538px"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Our mission is to improve the quality of life for millions of patients with visual
                  disorders.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Banner>
    </React.Fragment>
  );
};
