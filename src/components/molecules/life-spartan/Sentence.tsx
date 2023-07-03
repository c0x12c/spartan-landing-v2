import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import bg from '@/assets/images/life-spartan/world-bg.png';
import { base, primary } from '@/styles/colors';

interface ILifeSpartanSentenceProps {}

export const LifeSpartanSentence: React.FunctionComponent<ILifeSpartanSentenceProps> = (props) => {
  return (
    <Container>
      <Box
        padding="178px 0"
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box textAlign="center" maxWidth="888px" mx="auto">
          <Typography variant="fs40" color={base.black} letterSpacing="-0.8px">
            Spartan brings together some of the{' '}
            <Typography variant="fs40" color={primary[500]}>
              smartest
            </Typography>{' '}
            personal and professional creative minds{' '}
            <Typography variant="fs40" color={primary[500]}>
              in the world
            </Typography>{' '}
            and makes them available to you.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
