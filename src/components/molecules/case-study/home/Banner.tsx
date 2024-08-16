import * as React from 'react';
import { Box, Typography } from '@mui/material';
import bg from '@/assets/images/case-study/banner-image.webp';
import { Container } from '@/components/atoms';
import { base } from '@/styles/colors';

interface ICaseStudyBannerProps {}

export const CaseStudyBanner: React.FunctionComponent<ICaseStudyBannerProps> = () => {
  return (
    <React.Fragment>
      <Box
        height="559px"
        display="flex"
        alignItems="center"
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Box
            maxWidth="773px"
            mx="auto"
            display="flex"
            flexDirection="column"
            gap="32px"
            alignItems="center"
          >
            <Typography
              variant="fs64"
              color={base.white}
              data-aos="fade-up"
              data-aos-delay="200"
              component="h1"
              textAlign="center"
            >
              Discover our projects
            </Typography>
            <Typography
              variant={'fs18'}
              color={base.white}
              maxWidth="538px"
              data-aos="fade-up"
              data-aos-delay="300"
              textAlign="center"
            >
              Discover how our solution empowers entrepreneurs to launch and scale their business.
              Explore how Spartan streamline the journey from idea to market and expertise needed to
              turn your vision into a successful business in our detailed case study
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
