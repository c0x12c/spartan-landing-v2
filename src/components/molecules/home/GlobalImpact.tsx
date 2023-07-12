import * as React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { ArrowIcon, BodyText, Container, LocationMap, SubTitle, Title } from '@/components/atoms';
import { primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Link from 'next/link';

interface IGlobalImpactProps {}

export const GlobalImpact: React.FunctionComponent<IGlobalImpactProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box
      bgcolor={primary[50]}
      py={{
        lg: '123px',
        xs: '64px',
      }}
    >
      <Container>
        <Grid container spacing={'44px'}>
          <Grid item xs={12} lg={5}>
            <Box
              display="flex"
              flexDirection="column"
              rowGap="24px"
              mb={isMobile ? '24px' : '48px'}
            >
              <SubTitle text="Our offices" data-aos="fade-up" data-aos-delay="200" />
              <Title
                text="Seamless connectivity Global Impact"
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <BodyText
                text="With Spartan, our clients experience the benefits of a highly skilled and dedicated
            team of remote engineers from over four continents, ensuring seamless collaboration,
            timely project delivery, and superior product quality. We take pride in our strong
            client relationships, built on trust, reliability, and a shared commitment to
            success"
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </Box>
            <Box display="flex" gap={isMobile ? '24px' : '32px'}>
              <Link
                href="/contact-us#contact-form"
                scroll={false}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                  Meet our Expert
                  <ArrowIcon />
                </Button>
              </Link>
              <Link href="/apply-job" data-aos="fade-left" data-aos-delay="200">
                <Button variant="outlined" size={isMobile ? 'small' : 'medium'}>
                  Apply our job
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <LocationMap />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
