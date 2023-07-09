import * as React from 'react';
import { CardProject, Container } from '@/components/atoms';
import { Grid } from '@mui/material';
import { Projects } from '@/constants';

interface ICaseStudiesProps {}

export const CaseStudies: React.FunctionComponent<ICaseStudiesProps> = () => {
  const renderCaseStudies = Projects.map((item) => {
    return (
      <Grid item key={item.id} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
        <CardProject item={item} />
      </Grid>
    );
  });

  return (
    <Container>
      <Grid container columnSpacing="24px" rowSpacing="44px">
        {renderCaseStudies}
      </Grid>
    </Container>
  );
};
