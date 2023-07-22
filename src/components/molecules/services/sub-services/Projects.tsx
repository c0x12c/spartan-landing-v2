import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { BodyText, CardProject, Container, SubTitle, Title } from '@/components/atoms';
import { Projects, ServicesEnum } from '@/constants';

interface ISubServiceProjectsProps {
  tag: ServicesEnum;
}

export const SubServiceProjects: React.FunctionComponent<ISubServiceProjectsProps> = ({ tag }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderProjects = Projects.filter((item) => item.tags.includes(tag)).map((project) => {
    return (
      <Grid item key={project.id} xs={12} md={6} lg={4}>
        <CardProject item={project} />
      </Grid>
    );
  });

  return (
    <Box py={isMobile ? '40px' : '120px'}>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={isMobile ? '24px' : '44px'}
        >
          <Box display={'flex'} flexDirection={'column'} gap={isMobile ? '12px' : '24px'}>
            <SubTitle text="Our Project" data-aos="fade-up" data-aos-delay="200" />
            <Title
              text="Case Studies"
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{
                maxWidth: '690px',
              }}
            />
            <BodyText
              text="Join us at Spartan projects and experience the strength of our capabilities, complemented by the humility that drives our success. Together, we will achieve remarkable outcomes and forge a path toward excellence."
              data-aos="fade-left"
              data-aos-delay="300"
              sx={{ mt: isMobile ? '12px' : 0 }}
            />
          </Box>
        </Box>
        <Grid container spacing="24px" data-aos="fade-up" data-aos-delay="200">
          {renderProjects}
        </Grid>
      </Container>
    </Box>
  );
};
