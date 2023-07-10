import * as React from 'react';
import { CardWeDo, Container } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import { DataWeDoUrsa } from '@/constants/case-ursa';

interface IWhatWeDoURSAProps {}

export const WhatWeDoURSA: React.FunctionComponent<IWhatWeDoURSAProps> = () => {
  const renderWhatWeDo = DataWeDoUrsa.map((item) => {
    return (
      <Grid item key={item.id} xs={12} md={4}>
        <CardWeDo {...item} />
      </Grid>
    );
  });

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        mb="40px"
        textAlign="center"
        maxWidth="694px"
        mx="auto"
      >
        <Typography variant="fs48" color={base.black}>
          What we do
        </Typography>
        <Typography variant="fs18" color={gray[600]}>
          We&apos;ve got it all covered! From infrastructure to backend and frontend development, we
          take care of everything for your streaming website.
        </Typography>
      </Box>
      <Grid container justifyContent="center" spacing="32px">
        {renderWhatWeDo}
      </Grid>
    </Container>
  );
};
