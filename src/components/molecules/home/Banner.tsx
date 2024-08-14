import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import group_banner from '@/assets/images/home/group-banner.png';
import planning_image from '@/assets/images/home/planning.png';
import implementing_image from '@/assets/images/home/implementing.png';
import testing_image from '@/assets/images/home/testing.png';
import deploy_desktop_image from '@/assets/images/home/deploy.png';
import { ArrowIcon, BodyText, MainTitle } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Link from 'next/link';
import Image from 'next/image';
import { StacksHome } from './Stacks';
import { useIsTablet, useIsPhone } from '@/hooks/useBreakPoints';
import { ProcessImageBlock } from './ProcessImageBlock';
import { BlockLayout } from '@/components/templates';

export const HomeBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const isTablet = useIsTablet();
  const isPhone = useIsPhone();

  return (
    <Stack bgcolor="black" position="relative" alignItems={'center'}>
      <BlockLayout
        sx={{
          gap: { xs: 5, sm: 5 },
          paddingBottom: 0,
          paddingX: 0,
        }}
      >
        <Box
          sx={{
            paddingTop: {
              xs: '110px',
              md: '92px',
              lg: '155px',
            },
            paddingX: {
              xs: 2,
              md: 5,
              lg: 8,
              xl: 15,
            },
          }}
        >
          <Stack position={'relative'}>
            <Box
              position="absolute"
              bottom={-50}
              top={isPhone ? '7%' : 'unset'}
              right={isPhone ? 0 : isTablet ? 20 : -50}
              sx={{
                width: {
                  xs: '78px',
                  sm: '120px',
                },
              }}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <Image
                src={group_banner}
                alt="group_banner"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', lg: 'row' }}
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
                  sx={{
                    color: '#86868B',
                    maxWidth: isTablet ? '578px' : '600px',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                />
                <Stack direction="row" gap={'16px'}>
                  <Button
                    href={'/contact-us#contact-form'}
                    LinkComponent={Link}
                    variant="contained"
                    size={isMobile ? 'small' : 'medium'}
                    fullWidth={isPhone}
                    endIcon={<ArrowIcon />}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    Let’s chat
                  </Button>
                  <Button
                    variant="transparent"
                    size={isMobile ? 'small' : 'medium'}
                    fullWidth={isPhone}
                    LinkComponent={Link}
                    href={'/spartan-operates'}
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    How we work
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Stack position="relative" bgcolor="black" width={'100%'}>
          <Stack
            direction={'row'}
            flexWrap={isPhone ? 'wrap' : 'nowrap'}
            justifyContent={'space-between'}
            rowGap={{
              xs: 2.5,
              sm: 3,
            }}
            position="relative"
            bottom={{ lg: -50, xs: -1 }}
            paddingX={{
              xs: 0,
              sm: 2,
              md: 5,
              lg: 2,
            }}
            columnGap={{
              xs: 0,
              sm: 1,
              xl: 3,
            }}
          >
            <ProcessImageBlock imgSrc={planning_image} title="Planning" />
            <ProcessImageBlock imgSrc={implementing_image} title="Implementing" />
            <ProcessImageBlock imgSrc={testing_image} title="Testing" />
            <ProcessImageBlock imgSrc={deploy_desktop_image} title="Deployment and Maintenance" />
          </Stack>
          <StacksHome />
        </Stack>
      </BlockLayout>
    </Stack>
  );
};
