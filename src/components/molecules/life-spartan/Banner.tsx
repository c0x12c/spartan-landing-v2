import * as React from 'react';
import { ArrowIcon, BodyText, Container, MainTitle } from '@/components/atoms';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/life-spartan/banner-image.png';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ILifeSpartanBannerProps {}

export const LifeSpartanBanner: React.FunctionComponent<ILifeSpartanBannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box>
      <Container>
        <Box pt={{ md: '115px', sm: '163px', xs: '133px' }}>
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent="space-between"
            alignItems="center"
            rowGap="50px"
          >
            <Box maxWidth={{ md: '700px', xs: '529px' }}>
              <Box display="flex" flexDirection="column" rowGap="28px" mb="32px">
                <MainTitle
                  text="Thriving in work & life with/Spartan/"
                  isLightMode={false}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  sx={{
                    maxWidth: '697px',
                  }}
                />
                <BodyText
                  text="Experience a fulfilling work-life balance as a Spartan . Embrace a supportive environment that encourages collaboration, creativity, and work-life integration, allowing you to thrive both in and out of the office. Join us and discover the rewarding Spartan lifestyle."
                  data-aos="fade-up"
                  data-aos-delay="300"
                  sx={{ maxWidth: '527px' }}
                />
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
            <Image
              src={bannerImage}
              alt="bannerImage"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
