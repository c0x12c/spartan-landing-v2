import * as React from 'react';
import { Container } from '@/components/atoms';
import { Grid, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import Image from 'next/image';
import overviewImage from '@/assets/images/case-ursa/overview.png';

interface IOverviewURSAProps {}

export const OverviewURSA: React.FunctionComponent<IOverviewURSAProps> = () => {
  return (
    <Container>
      <Grid container alignItems="center" spacing="100px" mb="60px">
        <Grid item xs={12} md={6} lg={4.5}>
          <Typography variant="fs48" color={base.black}>
            Overview about project
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={7.5}>
          <Typography variant="fs18" color={gray[600]}>
            Ursa Live simplifies the process of hosting artists&apos; livestream events. With Ursa
            Live, artists can concentrate on their performances while the Ursa Live support team
            takes care of everything else. From setting up the event page to ensuring seamless sound
            and video streaming, Ursa Live&apos;s experienced producers will ensure that artists are
            ready to go. With Ursa Live support, artists can focus solely on delivering their music
            and providing an unforgettable experience for their audience.
          </Typography>
        </Grid>
      </Grid>
      <Image src={overviewImage} alt="overviewImage" style={{ maxWidth: '100%', height: 'auto' }} />
    </Container>
  );
};
