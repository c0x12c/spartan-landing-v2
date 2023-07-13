import { ArrowIcon, Banner, Container, MainTitle } from '@/components/atoms';
import banner from '@/assets/images/services/banner.png';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const ServicesBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Banner src={banner.src}>
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            gap="64px"
            maxWidth={{ md: '812px', xs: '100%' }}
          >
            <MainTitle
              text="Looking for an efficient and cost effective team of Engineers?"
              data-aos="fade-up"
              data-aos-delay="200"
            />
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
