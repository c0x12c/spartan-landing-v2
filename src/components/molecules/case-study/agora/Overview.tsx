import * as React from 'react';
import { Container } from '@/components/atoms';
import { Grid, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import Image from 'next/image';
import overviewImage from '@/assets/images/case-agora/overview.png';

interface IOverviewAgoraProps {}

export const OverviewAgora: React.FunctionComponent<IOverviewAgoraProps> = () => {
  return (
    <Container>
      <Grid container alignItems="center" spacing="100px">
        <Grid item xs={12} md={6} lg={4.5}>
          <Typography variant="fs48" color={base.black}>
            Overview about project
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={7.5}>
          <Typography variant="fs18" color={gray[600]}>
            LiveCast is a showcase platform dedicated to highlighting the multi-platform
            capabilities of Agora&apos;s streaming SDK. It demonstrates the seamless audio and video
            streaming experience provided by Agora across Android, iOS, and web applications.
            LiveCast allows clients to envision the potential of Agora&apos;s services in their own
            applications, showcasing its transformative impact.
          </Typography>
        </Grid>
      </Grid>
      <Image src={overviewImage} alt="overviewImage" style={{ maxWidth: '100%', height: 'auto' }} />
    </Container>
  );
};
