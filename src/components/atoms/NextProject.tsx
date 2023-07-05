import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowWhite from '@/assets/images/arrow-white.svg';
import NextProjectImage from '@/assets/images/case-volta/next-project.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowIcon, Container } from '.';
import { Projects } from '@/constants';
import { base, gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface INextProjectProps {}

export const NextProject: React.FunctionComponent<INextProjectProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const { pathname } = useRouter();
  const arrayPathname = pathname.split('/');
  const selectedProjectValue = arrayPathname[arrayPathname.length - 1];

  const idx = Projects.findIndex(
    (item) => item.value.toLowerCase() === selectedProjectValue.toLowerCase()
  );

  const nextProject = idx === -1 || idx + 1 === Projects.length ? Projects[0] : Projects[idx + 1];

  return (
    <Box my="44px">
      <Container>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography
            variant="fs64"
            color={base.black}
            component="h2"
            textAlign={'center'}
            mb="34px"
            maxWidth="802px"
            mx="auto"
          >
            If you intend to act, we are ready to help!
          </Typography>
          <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
            Get in touch
            <ArrowIcon />
          </Button>
        </Box>
        <Box mt={isMobile ? '80px' : '60px'}>
          <Grid container borderRadius="20px" overflow="hidden" minHeight="430px">
            <Grid item xs={7} alignSelf="stretch">
              <Image
                src={NextProjectImage}
                alt="NextProjectImage"
                style={{ maxWidth: '100%', height: '100%' }}
              />
            </Grid>
            <Grid item xs={5} alignSelf="stretch">
              <Box
                height="100%"
                bgcolor={base.black}
                p="80px 40px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant={'fs32'} color={gray[70]} component="h3">
                  Next Project
                </Typography>
                <Box>
                  <Link
                    href={nextProject.href}
                    style={{
                      display: 'block',
                      marginBottom: '24px',
                    }}
                  >
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant={'fs48'} color={base.white} component="h3">
                        {nextProject.name}
                      </Typography>
                      <Image src={ArrowWhite} alt="ArrowWhite" />
                    </Box>
                  </Link>
                  <Typography
                    variant={'fs18'}
                    color={gray[70]}
                    letterSpacing="-0.36px"
                    component="p"
                    maxWidth="280px"
                  >
                    Discover more about our project here!
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
