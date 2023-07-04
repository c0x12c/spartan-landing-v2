import * as React from 'react';
import { ArrowIcon, Container } from '@/components/atoms';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/life-spartan/banner-image.png';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base, gray, primary } from '@/styles/colors';

interface ILifeSpartanBannerProps {}

export const LifeSpartanBanner: React.FunctionComponent<ILifeSpartanBannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box>
      <Container>
        <Box pt={{ md: '115px', sm: '163px', xs: '133px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box maxWidth={{ md: '700px', xs: '529px' }}>
              <Box display="flex" flexDirection="column" rowGap="28px" mb="32px">
                <Typography
                  variant="fs64"
                  color={base.black}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Thriving in work{' '}
                  <Typography variant="fs64" color={base.black}>
                    life with{' '}
                    <Typography variant="fs64" color={primary[500]}>
                      Spartan
                    </Typography>
                  </Typography>
                </Typography>
                <Typography
                  variant="fs18"
                  color={gray[600]}
                  maxWidth="700px"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  We are Spartan, a team of elite tech-savvy people who specialize in providing
                  top-notch technical expertise to meet your goals. Our engineers are selected from
                  the top 1%, signifying that they are not merely
                </Typography>
              </Box>
              <Button
                variant="contained"
                size={isMobile ? 'small' : 'medium'}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Let’s join our team
                <ArrowIcon />
              </Button>
            </Box>
            <Box display={{ md: 'block', xs: 'none' }}>
              <Image
                src={bannerImage}
                alt="bannerImage"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
