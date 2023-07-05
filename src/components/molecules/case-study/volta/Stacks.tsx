import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { VoltaStacks } from '@/constants';
import { gray } from '@/styles/colors';
import { Container } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
interface IVoltaTechStacksProps {}

export const VoltaTechStacks: React.FunctionComponent<IVoltaTechStacksProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderStacks = VoltaStacks.map((tech) => {
    return (
      <Grid item xs={6} sm={4} key={tech.id}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="6px"
          p={isTablet ? '6px' : '6px 22px'}
          bgcolor={gray[200]}
          maxWidth="236px"
        >
          <Image src={tech.imgSrc} alt={tech.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography variant="fs14" color={gray[700]}>
            {tech.name}
          </Typography>
        </Box>
      </Grid>
    );
  });

  return (
    <Box py={!isTablet ? '140px' : '60px'} bgcolor={gray[100]}>
      <Container>
        <Box display="flex" flexDirection="column" gap="44px" maxWidth="736px" mx="auto">
          <Typography variant="fs48" color={gray[900]} component="h2" textAlign="center">
            Technology Stack
          </Typography>
          <Grid container spacing="14px">
            {renderStacks}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
