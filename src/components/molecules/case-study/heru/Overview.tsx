import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import Image from 'next/image';
import overviewImage from '@/assets/images/case-heru/overview.png';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IOverviewHeruProps {}

export const OverviewHeru: React.FunctionComponent<IOverviewHeruProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isLargeMobile = useBreakpoint(BreakPoints.MD);
  const isMobile = useBreakpoint(BreakPoints.SM);

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
            Heru is a technology company focused on helping healthcare practices enhance the patient
            experience while increasing practice revenue.
          </Typography>
        </Grid>
      </Grid>
      <Box position="relative" bgcolor={'#F7F7F8'} p={isMobile ? '12px' : 0}>
        <Image
          src={overviewImage}
          alt="overviewImage"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Box
          position="absolute"
          display={isMobile ? 'none' : 'block'}
          bottom={isLargeMobile ? '2%' : '5%'}
          right={'20px'}
          width={isTablet ? (isLargeMobile ? '95%' : '704px') : '504px'}
        >
          <Typography variant={isLargeMobile ? 'fs14' : 'fs18'} color={base.grey}>
            They have developed a wearable Augmented Reality (AR)/Virtual Reality (VR) device that
            transforms the way patients engage with their healthcare journey. By incorporating
            Heru&apos;s device into medical practices, doctors can provide patients with a more
            comfortable and enjoyable experience, utilizing AR/VR technology to enhance patient care
            and well-being
          </Typography>
        </Box>
        <Typography variant={'fs18'} color={gray[600]}>
          They have developed a wearable Augmented Reality (AR)/Virtual Reality (VR) device that
          transforms the way patients engage with their healthcare journey. By incorporating
          Heru&apos;s device into medical practices, doctors can provide patients with a more
          comfortable and enjoyable experience, utilizing AR/VR technology to enhance patient care
          and well-being
        </Typography>
      </Box>
    </Container>
  );
};
