import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import SliderClient from '../../atoms/SliderClient';
import Container from '../../atoms/Container';
import star from '@/assets/images/star.svg';
import nukey from '@/assets/images/nukey.svg';
import clientImage from '@/assets/images/client-image.svg';

interface IClientWithSpartansProps {}

const sliderClientData = [
  {
    id: 'slide-1',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    client: {
      imgSrc: clientImage,
      name: 'Dereck Lawson',
      position: 'CTO of SKN',
    },
  },
  {
    id: 'slide-2',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    client: {
      imgSrc: clientImage,
      name: 'Dereck Lawson',
      position: 'CTO of SKN',
    },
  },
  {
    id: 'slide-3',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    client: {
      imgSrc: clientImage,
      name: 'Dereck Lawson',
      position: 'CTO of SKN',
    },
  },
  {
    id: 'slide-4',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    client: {
      imgSrc: clientImage,
      name: 'Dereck Lawson',
      position: 'CTO of SKN',
    },
  },
  {
    id: 'slide-5',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    client: {
      imgSrc: clientImage,
      name: 'Dereck Lawson',
      position: 'CTO of SKN',
    },
  },
];

const ClientWithSpartans: React.FunctionComponent<IClientWithSpartansProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Box my="44px">
        <Box py="64px">
          <Container>
            <Box
              display="flex"
              alignItems={{
                lg: 'center',
                xs: 'flex-start',
              }}
              justifyContent={{
                lg: 'flex-start',
                xs: 'space-between',
              }}
              mb="32px"
            >
              {matchesDesktop && <Image src={star} alt="star" />}
              {matchesDesktop && (
                <Divider
                  sx={{ bgcolor: colors.gray[300], width: 'calc(100% - 562px)', mr: '32px' }}
                />
              )}
              {!matchesDesktop && (
                <Box display="flex" flexDirection="column" gap="32px">
                  <Typography
                    variant={matchesMobile ? 'fs26' : 'fs40'}
                    color={colors.gray[900]}
                    letterSpacing="-0.03em"
                  >
                    Nurkey
                  </Typography>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant={matchesMobile ? 'fs26' : 'fs40'}
                      color={colors.gray[900]}
                      letterSpacing="-2px"
                    >
                      50+
                    </Typography>
                    <Typography
                      variant="fs16"
                      fontWeight="600"
                      color={colors.gray[700]}
                      letterSpacing="0.015em"
                      mb="16px"
                    >
                      person design team
                    </Typography>
                    <Divider sx={{ bgcolor: colors.gray[400], width: '100%' }} />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant={matchesMobile ? 'fs26' : 'fs40'}
                      color={colors.gray[900]}
                      letterSpacing="-0.03em"
                    >
                      8
                    </Typography>
                    <Typography
                      variant="fs16"
                      fontWeight="600"
                      color={colors.gray[700]}
                      letterSpacing="0.015em"
                    >
                      person design team
                    </Typography>
                  </Box>
                </Box>
              )}
              <Typography
                variant={matchesMobile ? 'fs30' : 'fs54'}
                color={colors.gray[800]}
                textAlign="right"
              >
                Clients Love <br /> Spartans and our <br /> work!
              </Typography>
            </Box>
            <Image
              src={nukey}
              alt="nukey"
              style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
            />
            <Grid container mt="44px" columnSpacing="85px">
              {matchesDesktop && (
                <Grid item lg={3.5} display="flex" flexDirection="column" gap="32px" width="285px">
                  <Typography variant="fs54" color={colors.gray[900]} letterSpacing="-2px">
                    Nurkey
                  </Typography>
                  <Box
                    display="flex"
                    gap="18px"
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor={colors.gray[400]}
                    pb="16px"
                  >
                    <Typography variant="fs54" color={colors.gray[900]} letterSpacing="-2px">
                      50+
                    </Typography>
                    <Typography variant="fs18" fontWeight="700" color={colors.gray[700]}>
                      person design team
                    </Typography>
                  </Box>
                  <Box display="flex" gap="18px" alignItems="center">
                    <Typography variant="fs54" color={colors.gray[900]} letterSpacing="-2px">
                      8
                    </Typography>
                    <Typography
                      variant="fs18"
                      fontWeight="700"
                      color={colors.gray[700]}
                      letterSpacing="0.015em"
                    >
                      person design team
                    </Typography>
                  </Box>
                </Grid>
              )}
              <Grid item xs={12} lg={8.5}>
                <SliderClient data={sliderClientData} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ClientWithSpartans;
