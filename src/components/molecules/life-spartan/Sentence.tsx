import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import bg from '@/assets/images/life-spartan/world-bg.webp';
import { base, primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ILifeSpartanSentenceProps {}

export const LifeSpartanSentence: React.FunctionComponent<ILifeSpartanSentenceProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Container>
      <Box
        p={isMobile ? '80px 0' : '178px 0'}
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box textAlign="center" maxWidth="888px" mx="auto">
          <Typography
            variant={isMobile ? 'fs28' : 'fs40'}
            color={base.black}
            letterSpacing="-0.8px"
          >
            Spartan brings together the{' '}
            <Typography variant={isMobile ? 'fs28' : 'fs40'} color={primary[500]}>
              brightest technical
            </Typography>{' '}
            minds{' '}
            <Typography variant={isMobile ? 'fs28' : 'fs40'} color={primary[500]}>
              in the world
            </Typography>
            , making them accessible to you.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
