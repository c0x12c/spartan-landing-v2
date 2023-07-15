import * as React from 'react';
import { Box } from '@mui/material';
import bannerImage from '@/assets/images/spatan-operates/banner.png';
import { BodyText, Container, MainTitle } from '@/components/atoms';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';

interface ISpartanOperatesBannerProps {}

export const SpartanOperatesBanner: React.FunctionComponent<ISpartanOperatesBannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={base.black}
      pt={isMobile ? '125px' : '201px'}
      pb={isMobile ? '73px' : '84px'}
    >
      <Container>
        <Box
          maxWidth="795px"
          mx="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="24px"
          mb={isMobile ? '45px' : '50px'}
        >
          <MainTitle
            text="How spartan will grow your business"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              textAlign: 'center',
              color: base.white,
            }}
          />
          <BodyText
            text="At Spartan, our top-notch engineers, product managers, and designers work closely with you to revolutionize your software development process."
            sx={{ color: base.white, textAlign: 'center' }}
          />
        </Box>
        <Image src={bannerImage} alt="bannerImage" style={{ maxWidth: '100%', height: 'auto' }} />
      </Container>
    </Box>
  );
};
