import * as React from 'react';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import { base, gray } from '@/styles/colors';
import Image from 'next/image';
import overviewImage from '@/assets/images/case-ursa/overview.webp';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IOverviewURSAProps {}

export const OverviewURSA: React.FunctionComponent<IOverviewURSAProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={{ xs: '40px', md: 0 }} bgcolor={isMobile ? gray[50] : base.white}>
      <Container>
        <Grid
          container
          alignItems="center"
          spacing={{ md: '100px', xs: '32px' }}
          mb={{ xs: '24px', md: '60px' }}
        >
          <Grid item xs={12} md={6} lg={4.5}>
            <Title text="Overview about project" sx={{ color: base.black }} />
          </Grid>
          <Grid item xs={12} md={6} lg={7.5}>
            <BodyText
              sx={{ color: gray[700] }}
              text="Ursa Live simplifies the process of hosting artists' livestream events. With Ursa
            Live, artists can concentrate on their performances while the Ursa Live support team
            takes care of everything else. From setting up the event page to ensuring seamless sound
            and video streaming, Ursa Live's experienced producers will ensure that artists are
            ready to go. With Ursa Live support, artists can focus solely on delivering their music
            and providing an unforgettable experience for their audience."
            />
          </Grid>
        </Grid>
        <Image
          src={overviewImage}
          alt="overviewImage"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Container>
    </Box>
  );
};
