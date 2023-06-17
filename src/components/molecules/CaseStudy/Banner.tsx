import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@/components/atoms/Container';
import Image from 'next/image';
import bg from '@/assets/images/case-study-bg.svg';
import arrowDown from '@/assets/images/arrow-down-banner.svg';
import Banner from '@/components/atoms/Banner';

interface ICaseStudyBannerProps {}

const CaseStudyBanner: React.FunctionComponent<ICaseStudyBannerProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Banner src={bg.src}>
      <Box mt={{ xxl: '390px', xs: '284px' }}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="32px">
            <Typography
              variant={matchesDesktop ? 'fs100' : 'fs80'}
              color={colors.base.white}
              maxWidth={matchesDesktop ? '582px' : '452px'}
              component="h1"
            >
              Discover Our Project
            </Typography>
            {!matchesDesktop && (
              <Box
                component={Button}
                width="120px"
                height="120px"
                borderRadius="50%"
                border="1px solid"
                borderColor={colors.base.white}
              >
                <Image src={arrowDown} alt="arrowDown" />
              </Box>
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="60px"
            gap="27px"
            component="p"
          >
            <Typography
              variant={'fs18'}
              color={colors.base.white}
              letterSpacing="0.01em"
              maxWidth="797px"
            >
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries
            </Typography>
            {matchesDesktop && (
              <Box
                component={Button}
                width="120px"
                height="120px"
                borderRadius="50%"
                border="1px solid"
                borderColor={colors.base.white}
              >
                <Image src={arrowDown} alt="arrowDown" />
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default CaseStudyBanner;
