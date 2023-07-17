import * as React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowWhite from '@/assets/images/arrow-white.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowIcon, Container, Title } from '.';
import { ProjectType, Projects } from '@/constants';
import { base, gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface INextProjectProps {}

export const NextProject: React.FunctionComponent<INextProjectProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderNextProject = (nextProject: ProjectType) => (
    <Box my={{ xs: 0, md: '80px' }} data-aos="zoom-in" data-aos-delay="200">
      <Grid
        container
        borderRadius={{ xs: 0, md: '20px' }}
        overflow="hidden"
        minHeight={isMobile ? '200px' : '430px'}
      >
        <Grid item xs={12} md={7} alignSelf={isMobile ? 'unset' : 'stretch'}>
          <Image
            src={nextProject.quote.imgSrc}
            alt="NextProjectImage"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={5} alignSelf={isMobile ? 'unset' : 'stretch'}>
          <Box
            height="100%"
            bgcolor={base.black}
            p={{ xs: '24px 15px', md: '80px 40px' }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              variant={'fs32'}
              fontSize={{ xs: '18px', md: '32px' }}
              color={gray[70]}
              component="h3"
              mb="24px"
            >
              Next Project
            </Typography>
            <Box>
              <Link
                href={nextProject.href}
                style={{
                  display: 'block',
                  marginBottom: isMobile ? '16px' : '24px',
                }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant={'fs48'}
                    fontSize={{ xs: '18px', md: '48px' }}
                    color={base.white}
                    component="h3"
                  >
                    {nextProject.name}
                  </Typography>
                  <Image
                    src={ArrowWhite}
                    alt="ArrowWhite"
                    style={{ width: isMobile ? '20px' : 'auto', height: 'auto' }}
                  />
                </Box>
              </Link>
              <Typography
                variant={'fs18'}
                fontSize={{ xs: '14px', md: '18px' }}
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
  );

  const renderConsultation = (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Title
        text="If you intend to act, we are ready to help!"
        data-aos="fade-up"
        data-aos-delay="200"
        sx={{ textAlign: 'center', color: base.black, mb: '34px', maxWidth: '802px', mx: 'auto' }}
      />
      <Link href="/contact-us#contact-form" scroll={false} data-aos="fade-up" data-aos-delay="300">
        <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
          Get in touch
          <ArrowIcon />
        </Button>
      </Link>
    </Box>
  );

  const { pathname } = useRouter();
  const arrayPathname = pathname.split('/');
  const selectedProjectValue = arrayPathname[arrayPathname.length - 1];

  const idx = Projects.findIndex(
    (item) => item.value.toLowerCase() === selectedProjectValue.toLowerCase()
  );

  const nextProject = idx === -1 || idx + 1 === Projects.length ? Projects[0] : Projects[idx + 1];

  return (
    <Box my={{ xs: 0, md: '44px' }} mb={{ xs: '40px' }}>
      {!isMobile ? (
        <Container>
          {renderConsultation}
          {renderNextProject(nextProject)}
        </Container>
      ) : (
        <Box>{renderNextProject(nextProject)}</Box>
      )}
    </Box>
  );
};
