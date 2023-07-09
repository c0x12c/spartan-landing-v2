import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import bg from '@/assets/images/case-agora/banner-image.png';
import { Banner, Container } from '@/components/atoms';
import { base } from '@/styles/colors';

interface ICaseStudyAgoraBannerProps {}

export const CaseStudyAgoraBanner: React.FunctionComponent<ICaseStudyAgoraBannerProps> = () => {
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
                  Agora
                </Typography>
                <Typography
                  variant={'fs18'}
                  color={base.white}
                  maxWidth="538px"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Agora is a pioneer and global leader in Real-Time Engagement, providing developers
                  with simple, flexible, and powerful APIs, to embed real-time voice, video,
                  interactive streaming, chat, and artificial intelligence capabilities into their
                  applications.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Banner>
    </React.Fragment>
  );
};
