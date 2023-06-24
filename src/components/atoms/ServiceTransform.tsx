import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/logo-to-be-spartan.svg';
import Container from './Container';
import { useRouter } from 'next/router';

interface IServiceTransformProps {}

const ServiceTransform: React.FunctionComponent<IServiceTransformProps> = ({}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const router = useRouter();
  const goToContactPage = () => {
    router.push(
      {
        pathname: '/contact',
        hash: 'submit-form',
      },
      undefined,
      { scroll: false }
    );
  };
  return (
    <Box mb="44px">
      <Container>
        <Box
          py={{
            lg: '137px',
            xs: '110px',
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
              zIndex={0}
              position="absolute"
              top="50%"
              left="50%"
              sx={{ transform: 'translate(-50%, -50%)' }}
            >
              <Image src={logo} alt="logo" style={{ maxWidth: '310px' }} />
            </Box>

            <Box
              position="relative"
              zIndex={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxWidth="769px"
              mx="auto"
            >
              <Typography
                textAlign="center"
                variant={matches ? 'fs40' : 'fs80'}
                color={colors.gray[800]}
              >
                Empowering Startup through Full Remote IT Transformation
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" mt={'26px'} position="relative" zIndex={2}>
            <Button
              onClick={goToContactPage}
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
              ask for solution
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceTransform;
