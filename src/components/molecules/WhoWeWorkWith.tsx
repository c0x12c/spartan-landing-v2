import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '../atoms/Container';
import ScrollTitle from '../atoms/ScrollTitle';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import star from '@/assets/images/star.svg';
import logoUNSA from '@/assets/images/logo-UNSA.svg';
import logoMobolize from '@/assets/images/logo-mobolize.svg';
import logoChargeFuze from '@/assets/images/logo-chargefuze.svg';
import logoHeru from '@/assets/images/logo-heru.svg';
import logoAgora from '@/assets/images/logo-agora.svg';
import logoWb from '@/assets/images/logo-wb.svg';
import logoSabio from '@/assets/images/logo-sabio.svg';

interface IWhoWeWorkWithProps {}

const WhoWeWorkWith: React.FunctionComponent<IWhoWeWorkWithProps> = (props) => {
  const scrollRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Box my="44px" ref={scrollRef} overflow="hidden">
        <Container>
          <Box mb="85px">
            <ScrollTitle scrollYProgress={scrollYProgress} scrollRef={scrollRef} />
          </Box>
          <Grid container spacing={{ xl: '24px', xs: '44px' }}>
            <Grid
              item
              xl={6.5}
              xs={12}
              maxWidth={{ xl: '100%', xs: '709px' }}
              mx="auto"
              textAlign={{ xl: 'left', xs: 'center' }}
            >
              <Typography
                variant={matchesMobile ? 'fs30' : 'fs54'}
                color={colors.gray[800]}
                mb="32px"
                component="h2"
              >
                Embracing Full Remote Engineers for Your Business Success
              </Typography>
              <Typography variant="fs16" color={colors.gray[500]} component="p">
                Our clients include startups, established businesses, and enterprises who trust us
                to deliver top-notch engineering solutions for their products and projects. Join
                these successful companies who have trusted Spartan to enable their success
              </Typography>
            </Grid>

            <Grid
              item
              xl={5.5}
              xs={12}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" justifyContent="flex-start">
                {matchesDesktop && (
                  <Divider sx={{ bgcolor: colors.gray[300], width: '100%', height: '1px' }} />
                )}
                {matchesDesktop && <Image src={star} alt="star" />}
              </Box>
              <Box sx={{ transform: { sm: 'scale(1, 1)', xs: 'scale(0.6)' } }}>
                <Box display="flex" alignItems="center" justifyContent="center" mb="32px">
                  <Image src={logoUNSA} alt="logoUNSA" />
                  <Image src={logoMobolize} alt="logoMobolize" />
                  <Image src={logoChargeFuze} alt="logoChargeFuze" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Image src={logoHeru} alt="logoHeru" />
                  <Image src={logoAgora} alt="logoAgora" />
                  <Image src={logoWb} alt="logoWb" />
                  <Image src={logoSabio} alt="logoSabio" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default WhoWeWorkWith;
