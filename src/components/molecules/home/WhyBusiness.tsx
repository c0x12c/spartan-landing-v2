import { CardHorizontal, Container, SubTitle, Title } from '@/components/atoms';
import { gray, primary } from '@/styles/colors';
import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import bizImage from '@/assets/images/home/biz-image.png';
import money from '@/assets/images/icons/money-send.svg';
import timer from '@/assets/images/icons/timer.svg';
import like from '@/assets/images/icons/like.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IWhyBusinessProps {}

export const WhyBusiness: React.FunctionComponent<IWhyBusinessProps> = () => {
  const data = [
    {
      id: 'biz-1',
      title: 'Profitable',
      icon: money,
      subTitle: '50+ hours',
      content: (
        <>
          <Typography variant="fs14" color={gray[500]} letterSpacing="0.28px">
            By the engineering team <br />{' '}
            <Typography variant="fs14" color={primary[400]} fontWeight={600}>
              time saved{' '}
            </Typography>
            per developer on interview.
          </Typography>
        </>
      ),
    },
    {
      id: 'biz-2',
      title: 'Continuity',
      icon: timer,
      subTitle: '4 continents',
      content: (
        <>
          <Typography variant="fs14" color={gray[500]} letterSpacing="0.28px">
            Same time zone <br /> at least
            <Typography variant="fs14" color={primary[400]} fontWeight={600}>
              4+ hours{' '}
            </Typography>
            overlap time.
          </Typography>
        </>
      ),
    },
    {
      id: 'biz-3',
      title: 'Retention',
      icon: like,
      subTitle: '99 %',
      content: (
        <>
          <Typography variant="fs14" color={gray[500]} letterSpacing="0.28px">
            Engagement{' '}
            <Typography variant="fs14" color={primary[400]} fontWeight={600}>
              success rate
            </Typography>
            .
          </Typography>
        </>
      ),
    },
  ];

  const renderData = data.map((item) => {
    return <CardHorizontal key={item.id} {...item} />;
  });

  const isTablet = useBreakpoint(BreakPoints.LG);

  return (
    <Box py={isTablet ? '40px' : '100px'}>
      <Container>
        <Box display="flex" flexDirection="column" rowGap="24px" maxWidth="668px" mb="65px">
          <SubTitle text="Highlight point" />
          <Title text="Why business choose Spartan" />
          <Typography variant="fs16" color={gray[500]}>
            Our objective is to develop a profitable and effective solution that helps clients to
            expand their businesses and overcome financial constraints
          </Typography>
        </Box>
        <Grid container spacing={isTablet ? '32px' : '65px'}>
          <Grid item xs={12} lg={6} textAlign={isTablet ? 'center' : 'left'}>
            <Image src={bizImage} alt="bizImage" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box display="flex" flexDirection="column" rowGap="40px">
              {renderData}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
