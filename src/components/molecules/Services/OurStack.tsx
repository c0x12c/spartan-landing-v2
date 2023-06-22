import * as React from 'react';
import * as colors from '@/styles/colors';

import Container from '@/components/atoms/Container';
import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useScroll } from 'framer-motion';
import ScrollTitle from '@/components/atoms/ScrollTitle';
import Image from 'next/image';
import star from '@/assets/images/star.svg';
import StacksContent from '@/components/atoms/StacksContent';
interface IOurStackProps {}

const OurStack: React.FunctionComponent<IOurStackProps> = (props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesTablet = useMediaQuery(theme.breakpoints.down('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box my="44px" ref={scrollRef} bgcolor={colors.gray[100]} padding="84px 0 100px">
      <Container>
        <Box mb="44px">
          <ScrollTitle
            scrollYProgress={scrollYProgress}
            scrollRef={scrollRef}
            title={'Our stack'}
          />
        </Box>
        <Box mb={'44px'}>
          <Typography
            variant={matchesMobile ? 'fs30' : 'fs54'}
            letterSpacing="-2px"
            color={colors.base.black}
            mb="24px"
            component="h2"
          >
            Technology Stack
          </Typography>
          <Box display="flex" alignItems="center" gap="44px">
            <Typography
              variant={'fs18'}
              letterSpacing="0.01em"
              color={colors.gray[600]}
              mb="24px"
              maxWidth="478px"
            >
              At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables
              us to deliver innovative solutions and drive operational efficiency. Our tech stack is
              constantly evolving, staying up to date with the latest industry trends and best
              practices.
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
              {!matchesTablet && (
                <Divider
                  sx={{ bgcolor: colors.gray[300], width: 'calc(100% - 77px)', height: '1px' }}
                />
              )}
              {!matchesTablet && <Image src={star} alt="star" />}
            </Box>
          </Box>
        </Box>
        <Box>
          <StacksContent />
        </Box>
      </Container>
    </Box>
  );
};

export default OurStack;
