import * as React from 'react';
import { ArrowIcon, Container } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import { Projects } from '@/constants';
import Image from 'next/image';
import { base } from '@/styles/colors';
import Link from 'next/link';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ICaseStudiesProps {}

export const CaseStudies: React.FunctionComponent<ICaseStudiesProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.SM);

  const renderCaseStudies = Projects.map((item) => {
    return (
      <Grid item key={item.id} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay="200">
        <Link href={item.href}>
          <Box
            position="relative"
            overflow="hidden"
            sx={{
              '&:hover': {
                '& .project-name': {
                  bottom: 0,
                  transition: 'bottom 0.2s',
                },
              },
            }}
          >
            <Image
              src={item.quote.imgSrc}
              alt={item.name}
              style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            />
            <Box
              className="project-name"
              position="absolute"
              bottom={isMobile ? 0 : '-60px'}
              left={0}
              width="100%"
              bgcolor={'rgba(255, 255, 255, 0.30)'}
              p="12px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              height="60px"
              sx={{
                transition: 'bottom 0.2s',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Typography variant="fs18" fontWeight={600} color={base.black}>
                {item.name}
              </Typography>
              <ArrowIcon color={base.black} />
            </Box>
          </Box>
        </Link>
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
