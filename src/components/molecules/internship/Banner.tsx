import * as React from 'react';
import { CardFeature, Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import bannerImage from '@/assets/images/internship/banner-image.png';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base, gray, primary } from '@/styles/colors';
import thunderBlue from '@/assets/images/icons/thunder-blue.svg';
import thunderYellow from '@/assets/images/icons/thunder-yellow.svg';

interface IInternshipBannerProps {}

const dataContent = [
  {
    id: 'content-1',
    title: 'Benefit',
    content: 'Chance to connect with our top tier engineers professionals in Tech around the world',
    tick: thunderBlue,
  },
  {
    id: 'content-2',
    title: 'Benefit',
    content: 'Have access to experienced professionals who will serve as mentors',
    tick: thunderYellow,
  },
];

export const InternshipBanner: React.FunctionComponent<IInternshipBannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderSubMenu = dataContent.map((item) => {
    return <CardFeature key={item.id} {...item} data-aos="fade-up" data-aos-delay="300" />;
  });

  return (
    <Box>
      <Container>
        <Box pt={{ md: '115px', sm: '163px', xs: '133px' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box maxWidth={{ md: '700px', xs: '529px' }}>
              <Box display="flex" flexDirection="column" rowGap="28px" mb="32px">
                <Typography
                  variant="fs64"
                  color={base.black}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Ignite your career with{' '}
                  <Typography variant="fs64" color={base.black}>
                    Spartan&apos;s{' '}
                    <Typography variant="fs64" color={primary[500]}>
                      Internship Program
                    </Typography>
                  </Typography>
                </Typography>
                <Typography
                  variant="fs18"
                  color={gray[600]}
                  maxWidth="700px"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Gain real-world experience, learn from industry experts, and make meaningful
                  contributions to exciting projects. Join us and embark on a transformative journey
                  that will shape your future.
                </Typography>
              </Box>
            </Box>
            <Box display={{ md: 'block', xs: 'none' }}>
              <Box position="relative" minWidth={isMobile ? '100%' : '526px'} mx="auto">
                <Image
                  src={bannerImage}
                  alt={'banner'}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  padding="32px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box></Box>
                  <Box display="flex" flexDirection="column" rowGap="24px">
                    {renderSubMenu}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
