import React from 'react';
import { Typography, Box, useTheme, useMediaQuery, Divider } from '@mui/material';
import Container from '../../atoms/Container';
import { base, gray, primary } from '@/styles/colors';
import Banner from '../../atoms/Banner';
import heroBanner from '@/assets/images/hero-banner.svg';
import ButtonDiscuss from '@/components/atoms/ButtonDiscuss';

const HeroBanner = () => {
  const theme = useTheme();
  const matchesLargeDesktop = useMediaQuery(theme.breakpoints.up('xxl'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Banner src={heroBanner.src}>
      <Box pt={{ xxl: '333px', md: '184px', sm: '163px', xs: '133px' }}>
        <Container>
          <Box
            maxWidth={{ xxl: '940px', xl: '862px', lg: '857px', md: '678px', xs: '529px' }}
            mb={matchesLargeDesktop ? '127px' : '61px'}
          >
            <Box display="flex" alignItems="center" mb="32px">
              <Typography
                component={'span'}
                sx={{
                  fontSize: { xxl: '106.23px', lg: '100px', sm: '80px', xs: '40px' },
                  lineHeight: 1.2,
                  color: base.white,
                  fontWeight: 700,
                }}
              >
                Spartans at {matchesMobile && <br />}
                <Typography
                  component={'span'}
                  sx={{
                    color: primary[500],
                    fontSize: { xxl: '106.23px', lg: '100px', sm: '80px', xs: '40px' },
                    lineHeight: 1.2,
                    fontWeight: 700,
                  }}
                >
                  Work
                </Typography>
              </Typography>
            </Box>
            <Typography variant="fs18" color={gray[200]} letterSpacing={'0.01em'}>
              A powerhouse company driven by professionalism, strength, and a relentless positive
              mindset. With an unwavering commitment to excellence, Spartan empowers your startups
              by providing a solid team of tech-savvy people who are passionate about their work and
              dedicated to long-term greatness. We know how to take advantage of technology for your
              business and are willing to share this knowledge.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="15px">
            <Box
              component={Divider}
              width={'calc(100% - 127px - 15px)'}
              height="1px"
              bgcolor={gray[600]}
            ></Box>
            <ButtonDiscuss />
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default HeroBanner;
