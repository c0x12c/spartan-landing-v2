import React from 'react';
import { Typography, Box, useTheme, useMediaQuery, Divider } from '@mui/material';
import Container from '../../atoms/Container';
import { base, gray, primary } from '@/styles/colors';
import Banner from '../../atoms/Banner';
import ButtonDiscuss from '@/components/atoms/ButtonDiscuss';
import heroBanner from '@/assets/images/home-banner/hero-banner.svg';
import heroBanner2 from '@/assets/images/home-banner/hero-banner-2.svg';
import heroBanner3 from '@/assets/images/home-banner/hero-banner-3.svg';

const HeroBanner = () => {
  const theme = useTheme();
  const matchesLargeDesktop = useMediaQuery(theme.breakpoints.up('xxl'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

  const listHeroBanner = [
    { id: 'banner-1', src: heroBanner.src },
    { id: 'banner-2', src: heroBanner2.src },
    { id: 'banner-3', src: heroBanner3.src },
  ];

  const renderHeroBanners = listHeroBanner.map((banner, index) => {
    return <HeroBannerElement key={banner.id} src={banner.src} index={index + 1} />;
  });

  return (
    <Banner bannerElement={<>{renderHeroBanners}</>}>
      <Box pt={{ xxl: '333px', md: '184px', sm: '163px', xs: '133px' }}>
        <Container>
          <Box
            maxWidth={{ xxl: '940px', xl: '862px', lg: '857px', md: '678px', xs: '529px' }}
            mb={matchesLargeDesktop ? '127px' : '61px'}
          >
            <Box display="flex" alignItems="center" mb="32px">
              <Typography
                component={'span'}
                sx={{
                  fontSize: { xxl: '106.23px', lg: '100px', sm: '80px', xs: '40px' },
                  lineHeight: 1.2,
                  color: base.white,
                  fontWeight: 700,
                }}
              >
                Spartans at {matchesMobile && <br />}
                <Typography
                  component={'span'}
                  sx={{
                    color: primary[500],
                    fontSize: { xxl: '106.23px', lg: '100px', sm: '80px', xs: '40px' },
                    lineHeight: 1.2,
                    fontWeight: 700,
                  }}
                >
                  Work
                </Typography>
              </Typography>
            </Box>
            <Typography variant="fs18" color={gray[200]} letterSpacing={'0.01em'}>
              A powerhouse company driven by professionalism, strength, and a relentless positive
              mindset. With an unwavering commitment to excellence, Spartan empowers your startups
              by providing a solid team of tech-savvy people who are passionate about their work and
              dedicated to long-term greatness. We know how to take advantage of technology for your
              business and are willing to share this knowledge.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="15px">
            <Box
              component={Divider}
              width={'calc(100% - 127px - 15px)'}
              height="1px"
              bgcolor={gray[600]}
            ></Box>
            <ButtonDiscuss />
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

const HeroBannerElement = ({ src, index }: { src: string; index: number }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xxl'));
  return (
    <Box position="absolute" zIndex={-1} top={0} left={0} width="100%" overflow="hidden">
      <Box
        className={`banner-bg banner-bg-${index}`}
        sx={{
          backgroundImage: `url(${src})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: matches ? 'cover' : 'auto',
          height: { xxl: '1151px', xl: '893px', lg: '840px', md: '855px', xs: '792px' },
        }}
      />
    </Box>
  );
};

export default HeroBanner;
