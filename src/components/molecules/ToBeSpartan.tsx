import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/logo-to-be-spartan.svg';
import outerLink from '@/assets/images/outer-link.svg';
import Container from '../atoms/Container';

interface IToBeSpartanProps {}

const ToBeSpartan: React.FunctionComponent<IToBeSpartanProps> = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mb="44px">
      <Container>
        <Box
          py={{
            lg: '88px',
            xs: '101px',
          }}
          position="relative"
          bgcolor={colors.primary[50]}
        >
          <Box
            pl={{
              md: '75px',
              xs: '48px',
            }}
            pr={{
              md: '75px',
              xs: '48px',
            }}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              sx={{ transform: 'translate(-50%, -50%)' }}
            >
              <Image src={logo} alt="logo" style={{ maxWidth: '310px' }} />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="627px">
              <Typography variant={matches ? 'fs40' : 'fs80'} color={colors.gray[800]}>
                Interested in
              </Typography>
              <Image src={outerLink} alt="outerLink" />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              maxWidth="790px"
              ml={{
                lg: 'auto',
                md: '75px',
                xs: 0,
              }}
            >
              <Typography variant={matches ? 'fs40' : 'fs80'} color={colors.gray[800]}>
                knowing more about Spartan?
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" my="24px">
            <Typography variant={matches ? 'fs16' : 'fs22'} color={colors.gray[700]}>
              Become Next Spartan?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              sx={{
                bgcolor: colors.primary[500],
                borderRadius: '57px',
                padding: matches ? '8px 17px' : '16px 34px',
                fontSize: matches ? '12px' : '16px',
                lineHeight: 1.125,
                letterSpacing: '-0.13px',
                color: colors.base.black,
                border: '1px solid',
                borderColor: 'transparent',
                '&:hover': {
                  bgcolor: colors.primary[500],
                },
              }}
            >
              Meet Our Expert
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ToBeSpartan;
