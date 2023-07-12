import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';
import { CardProject, Container, SubTitle, Title } from '@/components/atoms';
import { Projects, ServicesEnum } from '@/constants';

interface ISubServiceProjectsProps {
  tag: ServicesEnum;
}

export const SubServiceProjects: React.FunctionComponent<ISubServiceProjectsProps> = ({ tag }) => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderProjects = Projects.filter((item) => item.tags.includes(tag)).map((project) => {
    return (
      <Grid item key={project.id} xs={12} md={6} lg={4}>
        <CardProject item={project} />
      </Grid>
    );
  });

  return (
    <Box py={isTablet ? '60px' : '120px'}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="84px">
          <Box display={'flex'} flexDirection={'column'} gap={'24px'}>
            <SubTitle text="Our Project" data-aos="fade-up" data-aos-delay="200" />
            <Title
              text="Case Study"
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{
                maxWidth: '690px',
              }}
            />
            <Typography variant="fs18" color={gray[600]} data-aos="fade-left" data-aos-delay="500">
              Join us at Spartan Project and experience the strength of our capabilities,
              complemented by the humility that drives our success. Together, we will achieve
              remarkable outcomes and forge a path towards excellence.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing="24px">
          {renderProjects}
        </Grid>
      </Container>
    </Box>
  );
};
