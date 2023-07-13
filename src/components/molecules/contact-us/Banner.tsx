import * as React from 'react';
import { Container, MainTitle } from '@/components/atoms';
import { Box } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/contact-us/bg-image.jpg';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IContactUsBannerProps {}

export const ContactUsBanner: React.FunctionComponent<IContactUsBannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Container>
      <Box pt={{ md: '115px', sm: '163px', xs: '133px' }} pb={isMobile ? 'fs24' : '60px'}>
        <Box mb={isMobile ? '24px' : '51px'}>
          <MainTitle
            text="Contact/us/"
            isLightMode={false}
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </Box>
        <Image
          src={bannerImage}
          alt="bannerImage"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Container>
  );
};
