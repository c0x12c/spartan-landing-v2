import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import resultImage from '@/assets/images/case-volta/result.png';
import { DataVoltaResult } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base } from '@/styles/colors';
import { Container } from '@/components/atoms';
interface IVoltaResultProps {}

export const VoltaResult: React.FunctionComponent<IVoltaResultProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderResult = DataVoltaResult.map((item) => {
    return (
      <Box
        component="li"
        key={item.id}
        position="relative"
        data-aos="fade-up"
        data-aos-delay="200"
        sx={{
          '&:before': {
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            content: '"• "',
            color: '#39E991',
            fontWeight: 'bold',
            display: 'inline-block',
            width: '8px',
          },
        }}
      >
        <Typography
          variant="fs16"
          fontSize={{ xs: '14px', lg: '16px' }}
          color={base.grey}
          fontWeight={600}
          letterSpacing="0.24px"
          component="p"
          display="inline-block"
          marginLeft="20px"
        >
          {item.text}
        </Typography>
      </Box>
    );
  });

  return (
    <Box py={!isTablet ? '80px' : '40px'} pb={{ xs: 0, lg: '80px' }}>
      <Container>
        <Grid
          container
          flexDirection={!isTablet ? 'row' : 'column'}
          rowSpacing="40px"
          columnSpacing="114px"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Typography
              variant="fs48"
              fontSize={{ xs: '28px', lg: '48px' }}
              color={base.black}
              mb={{ lg: '32px', xs: '24px' }}
              component="h2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The Result
            </Typography>
            <Typography
              variant="fs18"
              fontSize={{ xs: '14px', lg: '18px' }}
              color={base.grey}
              display="block"
              mb={{ xs: '24px', lg: '44px' }}
              component="p"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Volta Wallet is still in its early startup phase, but we have already achieved several
              milestones
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap="22px"
              component={'ul'}
              sx={{ listStyle: 'none' }}
            >
              {renderResult}
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Image
              src={resultImage}
              alt="resultImage"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
