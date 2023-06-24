import * as React from 'react';
import * as colors from '@/styles/colors';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useScroll } from 'framer-motion';
import Container from '../../atoms/Container';
import ScrollTitle from '../../atoms/ScrollTitle';
import ServiceContent from '@/components/atoms/ServiceContent';

interface IOurServicesProps {}

const OurServices: React.FunctionComponent<IOurServicesProps> = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box my="44px" ref={scrollRef}>
      <Container>
        <Box mb="40px">
          <ScrollTitle
            scrollYProgress={scrollYProgress}
            scrollRef={scrollRef}
            title={'Our services'}
          />
        </Box>
        <Box my={matchesDesktop ? '50px' : '12px'} id="services-offering">
          <Typography
            variant={matchesMobile ? 'fs30' : 'fs54'}
            color={colors.base.black}
            mb="24px"
            component="h2"
          >
            Our Services Offering
          </Typography>
          <Typography
            variant={matchesMobile ? 'fs16' : 'fs18'}
            color={colors.gray[600]}
            letterSpacing="0.01em"
            maxWidth="743px"
            component="p"
          >
            Our fully remote experienced team of engineers is ready to work with your time zones and
            equipped to handle diverse technical challenges.
          </Typography>
        </Box>
        <Box mb={matchesDesktop ? '100px' : '64px'}>
          <ServiceContent />
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
