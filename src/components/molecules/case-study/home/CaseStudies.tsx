import * as React from 'react';
import { CardProject, Container } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import { Projects } from '@/constants';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ICaseStudiesProps {}

const renderCaseStudies = Projects.map((item) => {
  if (!item.href) return;
  return (
    <Grid item key={item.id} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
      <CardProject item={item} />
    </Grid>
  );
});

export const CaseStudies: React.FunctionComponent<ICaseStudiesProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box bgcolor={gray[50]} py={isMobile ? '40px' : '100px'}>
      <Container>
        <Grid container columnSpacing="24px" rowSpacing={isMobile ? '16px' : '44px'}>
          {renderCaseStudies}
        </Grid>
      </Container>
    </Box>
  );
};
