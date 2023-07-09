import * as React from 'react';
import { Box, Typography } from '@mui/material';
import bg from '@/assets/images/case-study/banner-image.png';
import { Container } from '@/components/atoms';
import { base } from '@/styles/colors';

interface ISubServiceBannerProps {
  title: string;
}

export const SubServiceBanner: React.FunctionComponent<ISubServiceBannerProps> = ({ title }) => {
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
              {title}
            </Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
