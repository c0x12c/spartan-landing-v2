import * as React from 'react';
import { Box, Typography } from '@mui/material';
import bg from '@/assets/images/case-study/banner-image.png';
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
              Share your concerns with us, and we are here to provide you with the best solutions
              from top-notch engineers around the world.
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
