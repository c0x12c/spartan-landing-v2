import Container from '@/components/atoms/Container';
import ScrollTitle from '@/components/atoms/ScrollTitle';
import { base } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { useScroll } from 'framer-motion';
import React from 'react';

const LiquidityFinancial = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  return (
    <Container>
      <Box display="flex" flexDirection="column" gap="32px">
        <ScrollTitle
          scrollYProgress={scrollYProgress}
          scrollRef={scrollRef}
          title={'Liquidity financial'}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems={'center'}
          flexDirection={'column'}
          gap={'32px'}
          width={'100%'}
        >
          <Typography variant="fs80" color={base.black} textAlign="center" maxWidth={'621px'}>
            The Story
          </Typography>
          <Typography variant="fs16" maxWidth={'621px'} textAlign="center">
            Already had a working solution as well and mobile applications before they started
            working with us. Facing backend stability and mobile application issues, Liquidity
            Financial turned to us for solutions. It was very important to fix the issues because
            the product already had real users.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LiquidityFinancial;
