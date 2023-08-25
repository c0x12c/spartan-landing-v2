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

export const HomeBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box>
      <Box bgcolor="black" position="relative" pb="100px" pt="164px">
        <Box position="absolute" bottom="20px" right="20px">
          <Image src={group_banner} alt="group_banner" />
        </Box>
        <Container>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap="64px">
            <Box maxWidth="370px">
              <MainTitle text="Startup in the box" data-aos="fade-up" data-aos-delay="200" />
            </Box>
            <Stack gap="32px">
              <BodyText
                text="Unlock your startup’s software potential with Spartan’s all-inclusive solution. Our tailored package offers comprehensive services, expertise, and resources to streamline your software development and implementation. From architecture design to deployment and ongoing support, we empower startups to thrive in the digital landscape."
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ color: gray[300], maxWidth: '700px' }}
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
            </Stack>
          </Box>
        </Container>
      </Box>
      <Box position="relative">
        <Image src={large_banner} alt={'large_banner'} style={{ width: '100%', height: 'auto' }} />
        <StacksHome />
      </Box>
    </Box>
  );
};
