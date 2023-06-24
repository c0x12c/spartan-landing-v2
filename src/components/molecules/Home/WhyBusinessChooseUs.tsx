import * as React from 'react';
import * as colors from '@/styles/colors';

import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '../../atoms/Container';
import BusinessItem from '../../atoms/BusinessItem';
import money from '@/assets/images/money-recive.svg';
import timer from '@/assets/images/timer.svg';
import like from '@/assets/images/like.svg';

interface IWhyBusinessChooseUsProps {}

const WhyBusinessChooseUs: React.FunctionComponent<IWhyBusinessChooseUsProps> = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'biz-1',
      icon: money,
      textButton: 'Profitable',
      title: 'XX+ hours',
      content: (
        <Typography variant="fs18" color={colors.gray[700]}>
          By the engineering team <br />{' '}
          <Typography color={colors.primary[500]} fontWeight="700" component="span">
            time saved
          </Typography>{' '}
          per developer on interview.
        </Typography>
      ),
    },
    {
      id: 'biz-2',
      icon: timer,
      textButton: 'Continuity',
      title: '4 continents',
      content: (
        <Typography variant="fs18" color={colors.gray[700]}>
          Same time zone <br /> at least{' '}
          <Typography color={colors.primary[500]} fontWeight="700" component="span">
            4+ hours
          </Typography>{' '}
          overlap time.
        </Typography>
      ),
    },
    {
      id: 'biz-3',
      icon: like,
      textButton: 'Retention',
      title: '99 %',
      content: (
        <Typography variant="fs18" color={colors.gray[700]}>
          Engagement <br />
          <Typography fontWeight="700" color={colors.primary[500]} component="span">
            success rate.
          </Typography>
        </Typography>
      ),
    },
  ];

  const renderData = data.map((item) => {
    return (
      <Grid item md={4} xs={12} key={item.id}>
        <BusinessItem {...item} />
      </Grid>
    );
  });

  return (
    <Box my="44px">
      <Container>
        <Box
          py={{
            md: '44px',
            xs: '64px',
          }}
          mb="44px"
        >
          <Box maxWidth={{ md: '749px', xs: '502px' }} mx="auto" textAlign="center">
            <Typography
              variant={matchesMobile ? 'fs30' : 'fs54'}
              color={colors.gray[800]}
              mb="32px"
              component="h2"
            >
              Why businesses choose us?
            </Typography>
            <Typography variant="fs16" color={colors.gray[500]} component="p" mb="44px">
              Our objective is to develop a profitable and effective solution that helps clients to
              expand their businesses and overcome financial constraints
            </Typography>
          </Box>
          <Grid container rowSpacing="88px">
            {renderData}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyBusinessChooseUs;
