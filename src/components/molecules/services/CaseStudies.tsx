import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';
import { ArrowIcon, CardProject, Container, SubTitle, Title } from '@/components/atoms';
import Link from 'next/link';
import { Projects } from '@/constants';

interface IServiceCasesStudyProps {}

export const ServiceCasesStudy: React.FunctionComponent<IServiceCasesStudyProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderProjects = Projects.map((project) => {
    return (
      <Box key={project.id} maxWidth="384px">
        <CardProject item={project} />
      </Box>
    );
  });

  return (
    <Box bgcolor={gray[50]} py={isTablet ? '60px' : '120px'}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="84px">
          <Box display={'flex'} flexDirection={'column'} gap={'24px'} maxWidth="664px">
            <SubTitle text="Our Project" data-aos="fade-up" data-aos-delay="200" />
            <Title text="Case Study" maxWidth={'690px'} data-aos="fade-up" data-aos-delay="300" />
            <Typography variant="fs18" color={gray[600]} data-aos="fade-left" data-aos-delay="500">
              Join us at Spartan Project and experience the strength of our capabilities,
              complemented by the humility that drives our success. Together, we will achieve
              remarkable outcomes and forge a path towards excellence.
            </Typography>
          </Box>
          <Link href="/case-study" scroll={false}>
            <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
              Show all case study
              <ArrowIcon />
            </Button>
          </Link>
        </Box>
        <Box
          whiteSpace="nowrap"
          display="flex"
          gap="24px"
          py="5px"
          sx={{
            overflowY: 'hidden',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {renderProjects}
        </Box>
      </Container>
    </Box>
  );
};
