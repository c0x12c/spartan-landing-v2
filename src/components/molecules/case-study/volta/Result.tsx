import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import resultImage from '@/assets/images/case-volta/result.png';
import { DataVoltaResult } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base } from '@/styles/colors';
import { BodyText, Container, Title } from '@/components/atoms';
interface IVoltaResultProps {}

export const VoltaResult: React.FunctionComponent<IVoltaResultProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

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
          fontSize={{ xs: '14px', md: '16px' }}
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
    <Box py={!isMobile ? '80px' : '40px'} pb={{ xs: 0, md: '80px' }}>
      <Container>
        <Grid
          container
          flexDirection={!isMobile ? 'row' : 'column'}
          rowSpacing={isMobile ? '24px' : '40px'}
          columnSpacing="114px"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Title
              text="The Result"
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{ color: base.black, mb: { md: '32px', xs: '24px' } }}
            />
            <BodyText
              sx={{ color: base.grey, mb: { xs: '24px', md: '44px' } }}
              text="Volta Wallet is still in its early startup phase, but we have already achieved several
              milestones"
              data-aos="fade-up"
              data-aos-delay="300"
            />
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
          <Grid item xs={12} md={6}>
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
