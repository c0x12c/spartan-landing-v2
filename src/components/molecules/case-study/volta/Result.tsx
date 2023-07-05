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
    <Box my="44px" py={!isTablet ? '80px' : '60px'}>
      <Container>
        <Grid
          container
          flexDirection={!isTablet ? 'row' : 'column'}
          rowSpacing="40px"
          columnSpacing="114px"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Typography variant="fs48" color={base.black} mb="32px" component="h2">
              The Result
            </Typography>
            <Typography variant="fs18" color={base.grey} display="block" mb="44px" component="p">
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
