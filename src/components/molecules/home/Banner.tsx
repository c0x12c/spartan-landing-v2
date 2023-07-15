import React from 'react';
import { Box, Button } from '@mui/material';
import { gray } from '@/styles/colors';
import heroBanner from '@/assets/images/home-banner/banner-1.png';
import heroBanner2 from '@/assets/images/home-banner/banner-2.png';
import heroBanner3 from '@/assets/images/home-banner/banner-3.png';
import { ArrowIcon, Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Link from 'next/link';

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
              <MainTitle text="/Startup/ in the box" data-aos="fade-up" data-aos-delay="200" />
              <BodyText
                text="Unlock your startup’s software potential with Spartan’s all-inclusive solution. Our tailored package offers comprehensive services, expertise, and resources to streamline your software development and implementation. From architecture design to deployment and ongoing support, we empower startups to thrive in the digital landscape."
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ color: gray[300], maxWidth: '700px' }}
              />
            </Box>
            <Link
              href="/contact-us#contact-form"
              scroll={false}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                Let’s discuss your project
                <ArrowIcon />
              </Button>
            </Link>
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
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: { lg: '840px', md: '855px', xs: '792px' },
        }}
      />
    </Box>
  );
};
