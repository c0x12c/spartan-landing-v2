import * as React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import star from '@/assets/images/case-volta/star.svg';
import weDo from '@/assets/images/case-volta/we-do.png';
import { Container } from '@/components/atoms';
import { DataWeDo } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import checked from '@/assets/images/case-volta/checked-icon.svg';
import { gray } from '@/styles/colors';
interface IVoltaWeDoProps {}

export const VoltaWeDo: React.FunctionComponent<IVoltaWeDoProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderDataService = DataWeDo.map((item) => {
    return (
      <Box
        key={item.id}
        display="flex"
        flexDirection="column"
        gap="4px"
        data-aos={isTablet ? 'fade-up' : 'fade-left'}
        data-aos-delay="200"
      >
        <Box display="flex" alignItems="center" gap="24px">
          <Image src={checked} alt="checked" style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography variant="fs18" fontWeight={600} color={gray[700]} maxWidth="675px">
            {item.title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="24px">
          <Box width="45px" height="45px"></Box>
          <Typography variant="fs18" color={gray[600]} maxWidth="calc(100% - 45px - 24px)">
            {item.content}
          </Typography>
        </Box>
      </Box>
    );
  });

  return (
    <Container>
      <Box
        display="flex"
        gap="48px"
        py="24.5px"
        mb="76px"
        justifyContent={isTablet ? 'center' : 'flex-start'}
      >
        <Typography
          variant={'fs48'}
          color={gray[800]}
          component="h2"
          data-aos={isTablet ? 'fade-up' : 'fade-right'}
          data-aos-delay="200"
        >
          What we do
        </Typography>
        {!isTablet && (
          <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start">
            <Divider sx={{ bgcolor: gray[300], flex: '1', height: '1px' }} />
            <Image src={star} alt="star" />
          </Box>
        )}
      </Box>
      <Grid container alignItems="center" rowGap="32px">
        <Grid item xs={12} lg={5} display="flex" justifyContent="center" alignItems="center">
          <Image src={weDo} alt="we-do" />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box display="flex" flexDirection="column" gap="24px">
            {renderDataService}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
