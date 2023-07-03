import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import heroBanner from '@/assets/images/home-banner/hero-banner.svg';
import heroBanner2 from '@/assets/images/home-banner/hero-banner-2.svg';
import heroBanner3 from '@/assets/images/home-banner/hero-banner-3.svg';
import { ArrowIcon, Banner, Container } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const HomeBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

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
      <Box pt={{ md: '254px', sm: '163px', xs: '133px' }}>
        <Container>
          <Box maxWidth={{ md: '700px', xs: '529px' }}>
            <Box display="flex" flexDirection="column" rowGap="28px" mb="32px">
              <Typography variant="fs64" color={base.white} data-aos="fade-up" data-aos-delay="200">
                Spartans at{' '}
                <Typography variant="fs64" color={primary[500]}>
                  Work
                </Typography>
              </Typography>
              <Typography
                variant="fs16"
                color={gray[300]}
                maxWidth="700px"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                A powerhouse company driven by professionalism, strength, and a relentless positive
                mindset. With an unwavering commitment to excellence, Spartan empowers your startups
                by providing a solid team of tech-savvy people who are passionate about their work
                and dedicated to long-term greatness. We know how to take advantage of technology
                for your business and are willing to share this knowledge.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size={isMobile ? 'small' : 'medium'}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Let’s discuss your project
              <ArrowIcon />
            </Button>
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

const HeroBannerElement = ({ src, index }: { src: string; index: number }) => {
  return (
    <Box position="absolute" zIndex={-1} top={0} left={0} width="100%" overflow="hidden">
      <Box
        className={`banner-bg banner-bg-${index}`}
        sx={{
          backgroundImage: `url(${src})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: { lg: '840px', md: '855px', xs: '792px' },
        }}
      />
    </Box>
  );
};
