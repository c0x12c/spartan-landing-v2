import * as React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import star from '@/assets/images/case-volta/star.svg';
import weDo from '@/assets/images/case-volta/we-do.png';
import { Container, Title } from '@/components/atoms';
import { DataWeDo } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import checked from '@/assets/images/case-volta/checked-icon.svg';
import { base, gray } from '@/styles/colors';
interface IVoltaWeDoProps {}

export const VoltaWeDo: React.FunctionComponent<IVoltaWeDoProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderDataService = DataWeDo.map((item) => {
    return (
      <Box
        key={item.id}
        display="flex"
        flexDirection="column"
        gap="4px"
        data-aos={isMobile ? 'fade-up' : 'fade-left'}
        data-aos-delay="200"
      >
        <Box display="flex" alignItems="center" gap="24px">
          <Image src={checked} alt="checked" style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography
            variant="fs18"
            fontSize={{ xs: '16px', md: '18px' }}
            fontWeight={600}
            color={gray[700]}
            maxWidth="675px"
          >
            {item.title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="24px">
          <Box width="45px" height="45px"></Box>
          <Typography variant="fs14" color={gray[600]} maxWidth="calc(100% - 45px - 24px)">
            {item.content}
          </Typography>
        </Box>
      </Box>
    );
  });

  return (
    <Container>
      <Box py={{ xs: '40px', md: '80px' }}>
        <Box
          display="flex"
          gap="48px"
          mb={{ md: '79px', xs: '24px' }}
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          <Title
            text="What we do"
            data-aos={isMobile ? 'fade-up' : 'fade-right'}
            data-aos-delay="200"
            sx={{ color: base.black }}
          />
          {!isMobile && (
            <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start">
              <Divider sx={{ bgcolor: gray[300], flex: '1', height: '1px' }} />
              <Image src={star} alt="star" />
            </Box>
          )}
        </Box>
        <Grid container alignItems="center" rowGap="32px">
          {!isMobile && (
            <Grid item xs={12} md={5} display="flex" justifyContent="center" alignItems="center">
              <Image src={weDo} alt="we-do" />
            </Grid>
          )}
          <Grid item xs={12} md={7}>
            <Box display="flex" flexDirection="column" gap={{ md: '24px', xs: '16.5px' }}>
              {renderDataService}
            </Box>
          </Grid>
          {isMobile && (
            <Grid
              item
              xs={12}
              md={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt={'12px'}
              pb={'40px'}
            >
              <Image src={weDo} alt="we-do" />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};
