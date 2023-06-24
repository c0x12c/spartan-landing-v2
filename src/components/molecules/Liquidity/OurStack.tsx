import { base, gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import React from 'react';
import GridSection from '@/components/atoms/Stack';
import { techItems } from '@/constants/stacksLiquidity';
import Container from '@/components/atoms/Container';

const OurStack = () => {
  return (
    <Box bgcolor={gray[100]} padding="84px 0 100px">
      <Container>
        <Box mb={'44px'}>
          <Typography
            variant={'fs80'}
            color={base.black}
            mb="44px"
            component="h2"
            textAlign={'center'}
          >
            Technology Stack
          </Typography>
          <GridSection techItems={techItems} />
        </Box>
      </Container>
    </Box>
  );
};

export default OurStack;
