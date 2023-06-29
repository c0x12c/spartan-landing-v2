import { Container, SubTitle, Title } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import * as React from 'react';

interface IPartnersProps {}

export const Partners: React.FunctionComponent<IPartnersProps> = () => {
  return (
    <Box py="120px">
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap="24px"
          maxWidth="986px"
          mx="auto"
          alignItems="center"
          textAlign="center"
        >
          <SubTitle text="Who we work with" />
          <Title text="Embracing full remote Engineers for your business success" />
          <Typography variant="fs16" color={gray[500]}>
            Our clients include startups, established businesses, and enterprises who trust us to
            deliver top-notch engineering solutions for their products and projects. Join these
            successful companies who have trusted Spartan to enable their success
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
