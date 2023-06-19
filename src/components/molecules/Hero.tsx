import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Container from '../atoms/Container';
import { base, gray, primary } from '@/styles/colors';
import Banner from '../atoms/Banner';
import BackgroundImageXxl from '@/assets/images/background-hero/background-homepage-xxl.jpg';
import BackgroundImageXl from '@/assets/images/background-hero/background-homepage-xl.jpg';
import BackgroundImageLg from '@/assets/images/background-hero/background-homepage-lg.png';
import BackgroundImageMd from '@/assets/images/background-hero/background-homepage-md.png';
import BackgroundImageSm from '@/assets/images/background-hero/background-homepage-sm.png';
import Image from 'next/image';
import ArrowDark from '@/assets/images/Arrow-contact-dark.svg';
import DecorMD from '@/assets/images/Decor-md-sm.svg';

const backgroundImage = {
  xxl: `url(${BackgroundImageXxl.src})`,
  xl: `url(${BackgroundImageXl.src})`,
  lg: `url(${BackgroundImageLg.src})`,
  md: `url(${BackgroundImageMd.src})`,
  sm: `url(${BackgroundImageSm.src})`,
};

const Hero = () => {
  return (
    <Banner src={backgroundImage}>
      <Box
        sx={{
          height: '100%',
          background: `linear-gradient(91.73deg, #00030E 16.83%, rgba(2, 1, 30, 0.89) 54.44%, rgba(0, 10, 52, 0.803463) 80.47%, rgba(0, 9, 40, 0.44) 111.55%)`,
          position: 'relative',
        }}
      >
        <Container>
          <Box
            component="img"
            src={DecorMD.src}
            sx={{
              width: { lg: '1237.64px', md: '1002.17px' },
              height: { lg: '920.88px', sm: '416px' },
              right: { xxl: 0, xl: '-521px', lg: '-641px', md: '-285px', sm: '-82px' },
              top: { xxl: '-404px', xl: '-396px', lg: '-385px', md: 0 },
              position: 'absolute',
            }}
          />
          <Box
            sx={{
              paddingTop: { xxl: '390px', lg: '285px', md: '184px', sm: '163px' },
              display: 'flex',
              flexDirection: 'column',
              gap: '34px',
              maxWidth: '897px',
            }}
          >
            <Box sx={{ maxWidth: { md: '640px', lg: '100%' }, zIndex: '10' }}>
              <Typography
                component={'span'}
                sx={{
                  fontSize: { xxl: '106px', lg: '100px', sm: '80px' },
                  lineHeight: { lg: '128px', xs: '92px' },
                  color: base.white,
                  fontWeight: 700,
                }}
              >
                Spartans at
              </Typography>
              <Typography
                component={'span'}
                sx={{
                  color: primary[500],
                  fontSize: { xxl: '106px', lg: '100px', sm: '80px' },
                  lineHeight: { lg: '128px', xs: '92px' },
                  fontWeight: 700,
                }}
              >
                {' '}
                Work
              </Typography>
            </Box>

            <Typography variant="fs20" sx={{ color: gray[200] }}>
              A powerhouse company driven by professionalism, strength, and a relentless positive
              mindset. With an unwavering commitment to excellence, Spartan empowers your startups
              by providing a solid team of tech-savvy people who are passionate about their work and
              dedicated to long-term greatness. We know how to take advantage of technology for your
              business and are willing to share this knowledge.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: { xxl: '45px', xl: '52px', lg: '55px', xs: '22px' } }}>
            <Box
              sx={{
                width: { xxl: '992px', xl: '976px', lg: '723px', sm: '436px' },
                height: { xxl: '126px', xl: '61px', lg: '90px', md: '117px', sm: '111px' },
                borderBottom: `1px solid ${gray[600]}`,
              }}
            ></Box>
            <Box sx={{ position: 'relative' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: { xxl: '191.31px', xs: '180px' },
                  height: { xxl: '191.31px', xs: '180px' },
                  borderRadius: '95px',
                  position: 'absolute',
                  display: 'flex',
                  marginRight: 'auto',
                  flexDirection: 'column',
                  gap: '17px',
                  padding: '6px 16px',
                  bottom: { xxl: 'calc(-191.31px / 2)', xs: 'calc(-180px / 2)' },
                }}
              >
                <Image src={ArrowDark} alt="arrow" style={{ width: '20px', height: '20px' }} />
                Let&apos;s discuss Your project
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default Hero;
