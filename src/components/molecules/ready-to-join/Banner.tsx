import * as React from 'react';
import { Container, MainTitle } from '@/components/atoms';
import { Box } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/ready-to-join/bg-image.jpg';

interface IReadyToJoinBannerProps {}

export const ReadyToJoinBanner: React.FunctionComponent<IReadyToJoinBannerProps> = () => {
  return (
    <Container>
      <Box pt={{ md: '115px', sm: '163px', xs: '133px' }} pb="60px">
        <Box mb="51px">
          <MainTitle
            text="Ready to/join/"
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
