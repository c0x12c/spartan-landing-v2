import * as React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import Image from 'next/image';
import star from '@/assets/images/case-volta/star.svg';
import weDo from '@/assets/images/case-volta/we-do.png';
import { Container, Title } from '@/components/atoms';
import { DataWeDo } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import checked from '@/assets/images/case-volta/checked-icon.svg';
import { base, gray } from '@/styles/colors';
import CaseStudyItem, { Variant } from '@/components/atoms/CaseCtudyItems';

interface IVoltaWeDoProps {}

export const VoltaWeDo: React.FunctionComponent<IVoltaWeDoProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderDataService = DataWeDo.map((item) => {
    return (
      <CaseStudyItem
        key={item.id}
        content={item.content}
        title={item.title}
        variant={Variant.PARAGRAPH}
        icon={checked}
      />
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
