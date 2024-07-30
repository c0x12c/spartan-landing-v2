import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import group_banner from '@/assets/images/home/group-banner.png';
import planning_image from '@/assets/images/home/planning.png';
import implementing_image from '@/assets/images/home/implementing.png';
import testing_image from '@/assets/images/home/testing.png';
import deploy_image from '@/assets/images/home/deploy.png';
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
          paddingBottom: {
            xs: 0,
            md: 0,
            lg: 0,
          },
          paddingX: {
            xs: 1,
            md: 5,
            lg: 15,
          },
        }}
      >
        <Box
          sx={{
            paddingTop: {
              xs: '110px',
              lg: '155px',
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
                priority
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
        <Stack position="relative" bgcolor="black" alignItems={'center'} width={'100%'}>
          <Stack
            direction={'row'}
            flexWrap={isPhone ? 'wrap' : 'nowrap'}
            justifyContent={'space-between'}
            rowGap="24px"
            columnGap={isMobile ? 0 : 3}
          >
            <ProcessImageBlock
              imgSrc={planning_image}
              title="Planning"
              sx={{ top: isPhone ? 42 : 68 }}
            />
            <ProcessImageBlock
              imgSrc={implementing_image}
              title="Implementing"
              sx={{ top: isPhone ? 5 : isTablet ? 25 : 50 }}
            />
            <ProcessImageBlock
              imgSrc={testing_image}
              title="Testing"
              sx={{ top: isPhone ? 42 : isTablet ? 40 : 75 }}
            />
            <ProcessImageBlock
              imgSrc={deploy_image}
              title="Deployment and Maintenance"
              sx={{ top: isPhone ? 5 : isTablet ? 48 : 107 }}
            />
          </Stack>
          <StacksHome />
        </Stack>
      </BlockLayout>
    </Stack>
  );
};
