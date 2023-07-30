import * as React from 'react';
import { Container, MainTitle } from '@/components/atoms';
import { Box } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/ready-to-join/bg-image.webp';
import bannerSpImage from '@/assets/images/ready-to-join/bg-sp-image.webp';

import { BreakPoints, useBreakpoint } from '@/hooks';

interface IReadyToJoinBannerProps {}

export const ReadyToJoinBanner: React.FunctionComponent<IReadyToJoinBannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Container>
      <Box pt={{ md: '115px', sm: '163px', xs: '133px' }}>
        <Box mb="51px">
          <MainTitle
            text="Ready to /join/"
            isLightMode={false}
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </Box>
        <Image
          src={isMobile ? bannerSpImage : bannerImage}
          alt="bannerImage"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
    </Container>
  );
};
