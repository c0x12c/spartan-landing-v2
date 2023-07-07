import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/contact-us/bg-image.jpg';
import { base, primary } from '@/styles/colors';

interface IContactUsBannerProps {}

export const ContactUsBanner: React.FunctionComponent<IContactUsBannerProps> = () => {
  return (
    <Container>
      <Box pt={{ md: '115px', sm: '163px', xs: '133px' }} pb="60px">
        <Box mb="51px">
          <Typography variant="fs64" color={base.black} data-aos="fade-up" data-aos-delay="200">
            Contact{' '}
            <Typography variant="fs64" color={primary[500]}>
              us
            </Typography>
          </Typography>
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
