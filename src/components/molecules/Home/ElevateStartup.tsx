import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '../../atoms/Container';
import Image from 'next/image';
import star from '@/assets/images/star.svg';
import { useScroll } from 'framer-motion';
import ScrollTitle from '../../atoms/ScrollTitle';
import ProjectItem from '../../atoms/ProjectItem';
import { CaseStudies } from '@/constants/case-study';

interface IElevateStartupProps {}

const ElevateStartup: React.FunctionComponent<IElevateStartupProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const renderProjects = CaseStudies.map((project, index) => {
    return (
      <Box key={project.id} display="flex">
        <ProjectItem {...project} />
        {index !== CaseStudies.length - 1 && (
          <Box mx="44px" width="1px" height="100%" bgcolor={colors.gray[400]} />
        )}
      </Box>
    );
  });

  return (
    <React.Fragment>
      <Box py="44px" ref={scrollRef} bgcolor={colors.gray[100]}>
        <Container>
          <Box
            py={{
              lg: '100px',
              xs: '44px',
            }}
          >
            <Grid container>
              {matchesDesktop && (
                <Grid item lg={6.5} xs={12}>
                  <Typography
                    variant={matchesMobile ? 'fs30' : 'fs54'}
                    color={colors.gray[800]}
                    mb="32px"
                    component="h2"
                  >
                    Elevate Your Startup&apos;s Journey
                  </Typography>
                </Grid>
              )}

              {!matchesDesktop && (
                <Grid item lg={6.5} xs={12}>
                  <Typography
                    variant={matchesMobile ? 'fs30' : 'fs54'}
                    color={colors.gray[800]}
                    component="h2"
                  >
                    Elevate Your Startup&apos;s
                  </Typography>
                </Grid>
              )}
              {!matchesDesktop && (
                <Grid item xs={4}>
                  <Typography
                    variant={matchesMobile ? 'fs30' : 'fs54'}
                    color={colors.gray[800]}
                    mb="32px"
                    component="h2"
                  >
                    Journey
                  </Typography>
                </Grid>
              )}
              <Grid
                item
                lg={5.5}
                xs={8}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" justifyContent="flex-start">
                  <Divider
                    sx={{ bgcolor: colors.gray[300], width: 'calc(100% - 100px)', height: '1px' }}
                  />
                  <Image src={star} alt="star" />
                </Box>
              </Grid>
            </Grid>
            <Typography variant="fs16" color={colors.gray[500]} component="p" maxWidth="640px">
              Join us at Spartan Project and experience the strength of our capabilities,
              complemented by the humility that drives our success. Together, we will achieve
              remarkable outcomes and forge a path towards excellence.
            </Typography>
            <Box
              pb="44px"
              mb="44px"
              boxSizing={'border-box'}
              borderBottom="1px solid"
              borderColor={matchesDesktop ? colors.gray[400] : 'transparent'}
            >
              <ScrollTitle
                scrollYProgress={scrollYProgress}
                scrollRef={scrollRef}
                title={'Our project'}
              />
            </Box>
            <Box
              whiteSpace="nowrap"
              display="flex"
              sx={{
                overflowY: 'hidden',
                overflowX: 'auto',
              }}
            >
              {renderProjects}
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default ElevateStartup;
