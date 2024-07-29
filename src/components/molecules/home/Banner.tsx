import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { gray } from '@/styles/colors';
import group_banner from '@/assets/images/home/group-banner.png';
import large_banner from '@/assets/images/home/large-banner.png';
import { ArrowIcon, BodyText, Container, MainTitle } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { StacksHome } from './Stacks';
import { useIsTablet, useIsPhone } from '@/hooks/useBreakPoints';

export const HomeBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const isTablet = useIsTablet();
  const isPhone = useIsPhone();

  return (
    <>
      <Box bgcolor="black" position="relative" pb="60px" pt={isMobile ? '150px' : '195px'}>
        <Box
          position="absolute"
          bottom={isPhone ? 'unset' : '20px'}
          top={isPhone ? '25%' : 'unset'}
          right="20px"
        >
          <Image src={group_banner} alt="group_banner" />
        </Box>
        <Container>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            rowGap="16px"
            justifyContent={'space-between'}
          >
            <Box maxWidth={isTablet ? 'unset' : '320px'}>
              <MainTitle
                text="Startup in the box"
                data-aos="fade-up"
                data-aos-delay="200"
                sx={{ fontWeight: 500, lineHeight: 1.3 }}
              />
            </Box>
            <Stack gap="32px" justifyContent={'center'}>
              <BodyText
                text={`Boost your startup with Spartan's all-in-one software solution—<span style="color: white">Fast, Correct, Affordable</span>. Streamline development from design to support.`}
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ color: gray[300], maxWidth: isTablet ? '578px' : '700px', lineHeight: 1.6 }}
              />
              <Stack direction="row" gap={'16px'}>
                <Button
                  href={'/contact-us#contact-form'}
                  LinkComponent={Link}
                  variant="contained"
                  size={isMobile ? 'small' : 'medium'}
                  fullWidth={isPhone}
                  endIcon={<ArrowIcon />}
                >
                  Let’s chat
                </Button>
                <Button
                  variant="transparent"
                  size={isMobile ? 'small' : 'medium'}
                  fullWidth={isPhone}
                  LinkComponent={Link}
                  href={'/spartan-operates'}
                >
                  How we work
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box position="relative">
        <Image src={large_banner} alt={'large_banner'} style={{ width: '100%', height: 'auto' }} />
        <StacksHome />
      </Box>
    </>
  );
};
