import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Container from '@/components/atoms/Container';
import ArrowDark from '@/assets/images/Arrow-contact-dark.svg';
import ArrowWhite from '@/assets/images/arrow-white.svg';
import NextProjectImage from '@/assets/images/case-volta/next-project.png';
import { useRouter } from 'next/router';
import { CaseStudies } from '@/constants/case-study';
import Link from 'next/link';

interface INextProjectProps {}

const NextProject: React.FunctionComponent<INextProjectProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { pathname } = useRouter();
  const arrayPathname = pathname.split('/');
  const selectedProjectValue = arrayPathname[arrayPathname.length - 1];

  const idx = CaseStudies.findIndex(
    (item) => item.value.toLowerCase() === selectedProjectValue.toLowerCase()
  );

  const nextProject =
    idx === -1 || idx + 1 === CaseStudies.length ? CaseStudies[0] : CaseStudies[idx + 1];

  return (
    <Box my="44px">
      <Container>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography
            variant={matchesMobile ? 'fs30' : 'fs54'}
            color={colors.gray[800]}
            component="h2"
            textAlign={'center'}
            mb="34px"
            maxWidth="802px"
            mx="auto"
          >
            If you intend to act, we are ready to help!
          </Typography>
          <Button
            endIcon={<Image src={ArrowDark} alt="arrow" height={16} width={16} />}
            sx={{
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
            Order a consultation
          </Button>
        </Box>
        <Box mt={matchesDesktop ? '80px' : '60px'}>
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
                bgcolor={colors.base.black}
                p="80px 40px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant={'fs32'} color={colors.gray[70]} component="h3">
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
                      <Typography variant={'fs48'} color={colors.base.white} component="h3">
                        {nextProject.name}
                      </Typography>
                      <Image src={ArrowWhite} alt="ArrowWhite" />
                    </Box>
                  </Link>
                  <Typography
                    variant={'fs18'}
                    color={colors.gray[70]}
                    letterSpacing="-0.36px"
                    component="p"
                    maxWidth="280px"
                  >
                    How We Developed the Platform for Employee Management
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

export default NextProject;
