import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';

interface IWhatWeDoAgoraProps {}

export const WhatWeDoAgora: React.FunctionComponent<IWhatWeDoAgoraProps> = (props) => {
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
      <Grid container justifyContent="center" gap="32px"></Grid>
    </Container>
  );
};
