import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';
import Container from '@/components/atoms/Container';
import { BoxProjects } from '../CaseStudy/Projects';
import { CaseStudies, CaseStudyType } from '@/constants/case-study';
import ProjectItem from '@/components/atoms/ProjectItem';

interface IServiceCaseStudyProps {}

const ServiceCaseStudy: React.FunctionComponent<IServiceCaseStudyProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderProjects = (data: CaseStudyType[]) => {
    return data.map((item, index) => {
      return (
        <Box mb="32px" key={item.id} maxWidth="502px" mx={matchesDesktop ? 0 : 'auto'}>
          <ProjectItem {...item} fullWidth />
          {index !== data.length - 1 && (
            <Box mt="32px" width="100%" height="1px" bgcolor={colors.gray[400]} />
          )}
        </Box>
      );
    });
  };

  return (
    <Box my="44px">
      <Container>
        <Grid container pt="32px">
          <Grid item xs={12} lg={4}>
            <Box
              display="flex"
              flexDirection={{ lg: 'column', xs: 'row' }}
              mb={{ lg: 0, xs: '32px' }}
              mr="32px"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box mb={{ lg: '58px', xs: 0 }} width="100%" maxWidth={{ lg: '100%', xs: '330px' }}>
                <Typography
                  variant={matchesMobile ? 'fs30' : 'fs54'}
                  color={colors.base.black}
                  mb="32px"
                  component="h2"
                >
                  Case Study
                </Typography>
                <Typography variant={'fs18'} color={colors.gray[600]} component="p">
                  Take a look on our work and see!
                </Typography>
              </Box>
              <Button
                endIcon={<Image src={ArrowDarkContact} alt="Outer Link" />}
                sx={{
                  height: 'fit-content',
                  bgcolor: colors.primary[500],
                  borderRadius: '57px',
                  padding: matchesMobile ? '8px 17px' : '16px 34px',
                  fontSize: matchesMobile ? '12px' : '16px',
                  lineHeight: 1.125,
                  letterSpacing: '-0.13px',
                  color: colors.base.black,
                  border: '1px solid',
                  borderColor: 'transparent',
                  gap: '24px',
                  '&:hover': {
                    bgcolor: colors.primary[500],
                  },
                }}
              >
                All case study
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box>
              {matchesDesktop ? (
                <Box display="flex" flexDirection="row" columnGap="24px">
                  <Box>{renderProjects(CaseStudies.slice(0, 2))}</Box>
                  <Box>
                    <BoxProjects />
                    {renderProjects(CaseStudies.slice(3, 5))}
                  </Box>
                </Box>
              ) : (
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    justifyContent="center"
                    maxWidth="502px"
                    width="100%"
                    mx="auto"
                    mb="32px"
                  >
                    <BoxProjects />
                  </Box>
                  {renderProjects(CaseStudies)}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceCaseStudy;
