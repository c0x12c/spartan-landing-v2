import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Grid, Typography } from '@mui/material';
import Container from '../atoms/Container';
import LocationMap from '../atoms/Map';

interface IGlobalImpactProps {}

const GlobalImpact: React.FunctionComponent<IGlobalImpactProps> = (props) => {
  return (
    <Box
      bgcolor={colors.primary[50]}
      py={{
        xl: '123px',
        xs: '64px',
      }}
    >
      <Container>
        <Grid container alignItems="center" rowSpacing={'44px'}>
          <Grid
            item
            xs={12}
            xl={5.5}
            maxWidth={{
              xl: '100%',
              xs: '619px',
            }}
            m="0 auto"
          >
            <Typography
              variant="fs54"
              mb="32px"
              color={colors.gray[800]}
              component="h2"
              sx={{
                textAlign: {
                  xl: 'left',
                  xs: 'center',
                },
                letterSpacing: '-2px',
              }}
            >
              Seamless connectivity <br /> Global Impact
            </Typography>
            <Typography
              variant="fs16"
              mb="48px"
              color={colors.gray[500]}
              component="p"
              sx={{
                textAlign: {
                  xl: 'left',
                  xs: 'center',
                },
                letterSpacing: '0.01em',
              }}
            >
              With Spartan, our clients experience the benefits of a highly skilled and dedicated
              team of remote engineers from over four continents, ensuring seamless collaboration,
              timely project delivery, and superior product quality. We take pride in our strong
              client relationships, built on trust, reliability, and a shared commitment to success
            </Typography>
            <Box
              gap="32px"
              display="flex"
              alignItems="center"
              justifyContent={{
                xl: 'flex-start',
                xs: 'center',
              }}
            >
              <Button
                sx={{
                  bgcolor: colors.primary[500],
                  borderRadius: '57px',
                  padding: '16px 34px',
                  fontSize: '16px',
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
              <Button
                sx={{
                  bgcolor: colors.base.white,
                  borderRadius: '57px',
                  padding: '16px 34px',
                  fontSize: '16px',
                  lineHeight: 1.125,
                  letterSpacing: '-0.13px',
                  color: colors.primary[500],
                  border: '1px solid',
                  borderColor: colors.primary[500],
                  '&:hover': {
                    bgcolor: colors.base.white,
                  },
                }}
              >
                Apply Our Job
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} xl={6.5}>
            <LocationMap />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GlobalImpact;
