import { Container } from '@/components/atoms/common/Container';
import { base } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';

const LiquidityFinancial = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" gap="32px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems={'center'}
          flexDirection={'column'}
          gap={'32px'}
          width={'100%'}
          py={{ xs: '40px', lg: '80px' }}
        >
          <Typography
            variant="fs48"
            color={base.black}
            textAlign="center"
            maxWidth={{ md: '621px', xs: '100%' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The Story
          </Typography>
          <Typography
            variant="fs18"
            maxWidth={{ md: '766px', xs: '100%' }}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
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
