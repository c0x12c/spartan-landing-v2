import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import top100 from '@/assets/images/case-volta/top-100.webp';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ITop100CoinsProps {}

export const Top100Coins: React.FunctionComponent<ITop100CoinsProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <React.Fragment>
      <Box position="relative" mb={{ xs: '40px', md: '0' }}>
        <Typography
          variant={'fs40'}
          fontSize={isMobile ? '14px' : '40px'}
          top={isMobile ? '8%' : '72px'}
          left="50%"
          maxWidth={isMobile ? '200px' : '403px'}
          position="absolute"
          textAlign="center"
          color={base.white}
          sx={{
            transform: 'translateX(-50%)',
          }}
        >
          Top 100 coin prices in Home + Search
        </Typography>
        <Image src={top100} alt="top100" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </React.Fragment>
  );
};
