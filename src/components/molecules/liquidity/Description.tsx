import { BodyText, Title } from '@/components/atoms';
import { Container } from '@/components/atoms/common/Container';
import { Box } from '@mui/material';
import React from 'react';

const LiquidityFinancial = () => {
  return (
    <Container>
      <Box
        maxWidth="766px"
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems={'center'}
        flexDirection={'column'}
        gap={'32px'}
        width={'100%'}
        py={{ xs: '40px', lg: '80px' }}
      >
        <Title text="The Story" data-aos="fade-up" data-aos-delay="200" />
        <BodyText
          sx={{ textAlign: 'center' }}
          text="Already had a working solution as well and mobile applications before they started
            working with us. Facing backend stability and mobile application issues, Liquidity
            Financial turned to us for solutions. It was very important to fix the issues because
            the product already had real users."
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </Box>
    </Container>
  );
};

export default LiquidityFinancial;
