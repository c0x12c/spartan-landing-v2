import * as React from 'react';
import { BodyText, CardWeDo, Container, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import { base, gray } from '@/styles/colors';
import { DataWeDoAgora } from '@/constants/case-agora';

interface IWhatWeDoAgoraProps {}

export const WhatWeDoAgora: React.FunctionComponent<IWhatWeDoAgoraProps> = () => {
  const renderWhatWeDo = DataWeDoAgora.map((item) => {
    return (
      <Grid item key={item.id} xs={12} lg={4}>
        <CardWeDo {...item} />
      </Grid>
    );
  });

  return (
    <Box pt={{ xs: '40px', lg: 0 }} pb={{ xs: '24px', lg: 0 }}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: '24px', lg: '16px' }}
          mb={{ xs: '24px', lg: '40px' }}
          textAlign="center"
          maxWidth="694px"
          mx="auto"
        >
          <Title text=" What we do" sx={{ color: base.black }} />
          <BodyText
            text="We've got it all covered! From infrastructure to backend and frontend development, we
          take care of everything for your streaming website."
            sx={{ color: gray[700] }}
          />
        </Box>
        <Grid container justifyContent="center" spacing={{ md: '32px', lg: '16px' }}>
          {renderWhatWeDo}
        </Grid>
      </Container>
    </Box>
  );
};
