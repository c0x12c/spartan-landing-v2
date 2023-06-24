import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import top100 from '@/assets/images/case-volta/top-100.png';

interface ITop100CoinsProps {}

const Top100Coins: React.FunctionComponent<ITop100CoinsProps> = () => {
  return (
    <React.Fragment>
      <Box position="relative">
        <Typography
          variant="fs40"
          top="72px"
          left="50%"
          maxWidth="383px"
          position="absolute"
          textAlign="center"
          color={colors.base.white}
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

export default Top100Coins;
