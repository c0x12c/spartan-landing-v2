import { Banner, Container } from '@/components/atoms';
import React from 'react';
import BannerImage from '@/assets/images/case-cf/BannerBG.svg';
import { Box, Typography } from '@mui/material';
import { base } from '@/styles/colors';

const BannerCF = () => {
  return (
    <Banner
      src={BannerImage.src}
      haveBackground={false}
      bannerPosition={{ sm: 'bottom', lg: 'right' }}
    >
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'32px'}
            justifyContent={'center'}
            maxWidth={'387px'}
          >
            <Typography
              variant="fs64"
              color={base.white}
              fontSize={{ xs: '54px', sm: '64px' }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              ChargeFUZE
            </Typography>
            <Typography
              variant="fs24"
              color={base.white}
              maxWidth={'488px'}
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Empowering Device Charging on the Go
            </Typography>
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default BannerCF;
