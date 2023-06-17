import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '../../atoms/Container';
import Image from 'next/image';
import engineerPower from '@/assets/images/engineer-power.svg';
import logo from '@/assets/images/logo-to-be-spartan.svg';
import outerLinkSmall from '@/assets/images/outer-link-small.svg';

interface IEngineerPowerProps {}

const EngineerPowerContent = ({
  matchesMobile,
  matchesDesktop,
  matchesTablet,
}: {
  matchesMobile: boolean;
  matchesDesktop: boolean;
  matchesTablet: boolean;
}) => {
  return (
    <Box
      textAlign="right"
      bgcolor={colors.base.white}
      p={matchesDesktop ? '60px 70px' : matchesTablet ? '24px 0' : '20px 18px'}
      sx={{
        backgroundImage: `url(${logo.src})`,
        backgroundSize: '265px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <Typography
        variant={matchesMobile ? 'fs30' : 'fs54'}
        color={colors.gray[800]}
        textAlign="right"
        mb="32px"
        component="h2"
      >
        Focus on nurturing <br /> engineer&apos;s power
      </Typography>
      <Typography variant={'fs16'} color={colors.base.grey} mb="32px" component="p">
        The company is based in the US but works with engineers from around the world, leveraging
        remote work to take advantage of cost savings and improve startup&apos;s financial runway.
      </Typography>
      <Box my="10px" display="flex" justifyContent="flex-end">
        <Button
          endIcon={<Image src={outerLinkSmall} alt="outerLinkSmall" />}
          sx={{
            bgcolor: colors.primary[500],
            borderRadius: '57px',
            padding: matchesMobile ? '8px 17px' : '16px 34px',
            fontSize: matchesMobile ? '12px' : '16px',
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
          Being next spartan
        </Button>
      </Box>
    </Box>
  );
};

const EngineerPower: React.FunctionComponent<IEngineerPowerProps> = (props) => {
  const theme = useTheme();
  const matchesLargeDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesTablet = useMediaQuery(theme.breakpoints.down('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box my="44px">
      <Container>
        <Box
          pt={{
            md: '100px',
            xs: '24px',
          }}
          pb={{
            md: '100px',
            xs: '64px',
          }}
        >
          <Grid container position="relative">
            <Grid item xs={12} md={6}>
              <Image
                src={engineerPower}
                alt="engineerPower"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: matchesTablet ? '100%' : 'unset',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                position={matchesDesktop ? 'absolute' : 'relative'}
                top={matchesDesktop ? '50%' : 'unset'}
                right="0"
                maxWidth={matchesLargeDesktop ? '703px' : matchesTablet ? '100%' : '599px'}
                sx={{
                  transform: matchesDesktop ? 'translateY(-50%)' : 'unset',
                }}
              >
                <EngineerPowerContent
                  matchesMobile={matchesMobile}
                  matchesDesktop={matchesDesktop}
                  matchesTablet={matchesTablet}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EngineerPower;
