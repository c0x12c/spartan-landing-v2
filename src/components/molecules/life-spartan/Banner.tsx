import * as React from 'react';
import { ArrowIcon, BodyText, Container, MainTitle } from '@/components/atoms';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import move1Image from '@/assets/images/life-spartan/banner-move-1.webp';
import move2Image from '@/assets/images/life-spartan/banner-move-2.webp';

import { BreakPoints, useBreakpoint } from '@/hooks';
import Link from 'next/link';

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
                  text="Thriving in work & life with /Spartan/"
                  isLightMode={false}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  sx={{
                    maxWidth: '697px',
                  }}
                />
                <BodyText
                  text="Experience a fulfilling work-life balance as a Spartan. Embrace a supportive environment that encourages collaboration, creativity, and work-life integration, allowing you to thrive both in and out of the office. Join us and discover the rewarding Spartan lifestyle."
                  data-aos="fade-up"
                  data-aos-delay="300"
                  sx={{ maxWidth: '527px' }}
                />
              </Box>
              <Link href="/apply-job">
                <Button
                  variant="contained"
                  size={isMobile ? 'small' : 'medium'}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Join our team
                  <ArrowIcon />
                </Button>
              </Link>
            </Box>
            <Box
              width="100%"
              height="930px"
              maxWidth="550px"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              overflow="hidden"
              gap="24px"
              position="relative"
            >
              <Box
                height="279px"
                sx={{
                  backgroundImage: `linear-gradient(#fff, rgba(255, 255, 255, 0))`,
                  position: 'absolute',
                  top: 0,
                  bottom: 'auto',
                  left: 0,
                  width: '100%',
                  zIndex: 10,
                }}
              ></Box>
              <Box
                className="life-scroll-move bottom"
                height="3714px"
                width="215px"
                display="flex"
                flexDirection="column"
                gap="24px"
              >
                <Image src={move1Image} alt="move-1" style={{ maxWidth: '100%', height: 'auto' }} />
                <Image src={move1Image} alt="move-1" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
              <Box
                className="life-scroll-move top"
                height="3714px"
                width="215px"
                display="flex"
                flexDirection="column"
                gap="24px"
              >
                <Image src={move2Image} alt="move-2" style={{ maxWidth: '100%', height: 'auto' }} />
                <Image src={move2Image} alt="move-2" style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
              <Box
                height="279px"
                sx={{
                  backgroundImage: `linear-gradient(to top, #fff, rgba(255, 255, 255, 0))`,
                  position: 'absolute',
                  bottom: 0,
                  top: 'auto',
                  left: 0,
                  width: '100%',
                  zIndex: 10,
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
