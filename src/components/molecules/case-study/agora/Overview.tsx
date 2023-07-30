import * as React from 'react';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import { base, gray } from '@/styles/colors';
import Image from 'next/image';
import overviewImage from '@/assets/images/case-agora/overview.webp';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IOverviewAgoraProps {}

export const OverviewAgora: React.FunctionComponent<IOverviewAgoraProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={{ xs: '40px', md: 0 }} bgcolor={isMobile ? gray[50] : base.white}>
      <Container>
        <Grid container alignItems="center" spacing={{ md: '100px', xs: '32px' }}>
          <Grid item xs={12} md={6} lg={4.5}>
            <Title text="Overview about project" sx={{ color: base.black }} />
          </Grid>
          <Grid item xs={12} md={6} lg={7.5}>
            <BodyText
              text="LiveCast is a showcase platform dedicated to highlighting the multi-platform
            capabilities of Agora's streaming SDK. It demonstrates the seamless audio and video
            streaming experience provided by Agora across Android, iOS, and web applications.
            LiveCast allows clients to envision the potential of Agora's services in their own
            applications, showcasing its transformative impact."
              sx={{ color: gray[700] }}
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
