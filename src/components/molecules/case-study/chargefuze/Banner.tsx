import { Banner, Container, MainTitle } from '@/components/atoms';
import React from 'react';
import BannerImage from '@/assets/images/case-cf/BannerBG.svg';
import BannerImageXS from '@/assets/images/case-cf/BannerBG-xs.svg';
import { Box, Typography } from '@mui/material';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

const BannerCF = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Banner
      src={isMobile ? BannerImageXS.src : BannerImage.src}
      haveBackground={false}
      bannerPosition={{ xs: 'bottom', sm: 'right' }}
    >
      <Box
        position="absolute"
        top={{ xs: '129px', lg: '50%' }}
        width="100%"
        sx={{ transform: { xs: 'none', lg: 'translateY(-50%)' } }}
      >
        <Container>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={{ xs: '24px', lg: '32px' }}
            justifyContent={'center'}
            maxWidth={'387px'}
          >
            <MainTitle text="ChargeFUZE" data-aos="fade-right" data-aos-delay="200" />
            <Typography
              variant="fs24"
              color={gray[50]}
              fontSize={{ xs: '18px', lg: '24px' }}
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
