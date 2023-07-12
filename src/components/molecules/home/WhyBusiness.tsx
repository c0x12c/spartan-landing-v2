import * as React from 'react';
import { BodyText, CardHorizontal, Container, SubTitle, Title } from '@/components/atoms';
import { gray, primary } from '@/styles/colors';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import bizImage from '@/assets/images/home/biz-image.png';
import bizFinance from '@/assets/images/home/biz-finance.png';
import bizChart from '@/assets/images/home/biz-chart.png';

import money from '@/assets/images/icons/money-send.svg';
import timer from '@/assets/images/icons/timer.svg';
import like from '@/assets/images/icons/like.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IWhyBusinessProps {}

export const WhyBusiness: React.FunctionComponent<IWhyBusinessProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);

  const data = [
    {
      id: 'biz-1',
      title: 'Profitable',
      icon: money,
      subTitle: '50+ hours',
      content: (
        <>
          <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[500]} letterSpacing="0.28px">
            By the engineering team <br />{' '}
            <Typography variant={isMobile ? 'fs14' : 'fs16'} color={primary[400]} fontWeight={600}>
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
          <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[500]} letterSpacing="0.28px">
            Same time zone <br /> at least
            <Typography variant={isMobile ? 'fs14' : 'fs16'} color={primary[400]} fontWeight={600}>
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
          <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[500]} letterSpacing="0.28px">
            Engagement{' '}
            <Typography variant={isMobile ? 'fs14' : 'fs16'} color={primary[400]} fontWeight={600}>
              success rate
            </Typography>
            .
          </Typography>
        </>
      ),
    },
  ];

  const renderData = data.map((item) => {
    return <CardHorizontal key={item.id} {...item} data-aos="fade-up" data-aos-delay={`${200}`} />;
  });

  return (
    <Box py={isTablet ? '40px' : '100px'}>
      <Container>
        <Box display="flex" flexDirection="column" rowGap="24px" maxWidth="668px" mb="65px">
          <SubTitle text="Highlight point" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Why business choose Spartan" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="Our objective is to develop a profitable and effective solution that helps clients to
            expand their businesses and overcome financial constraints"
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </Box>
        <Grid container spacing={isTablet ? '32px' : '65px'}>
          <Grid item xs={12} lg={6}>
            <Box position="relative" maxWidth="581px" mx="auto">
              <Image
                src={bizImage}
                alt="bizImage"
                style={{ maxWidth: '100%', height: 'auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                padding="21px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box></Box>
                <Box display="flex" flexDirection="column" alignItems="flex-end" rowGap="15px">
                  <Image
                    src={bizChart}
                    alt="bizChart"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                  <Image
                    src={bizFinance}
                    alt="bizFinance"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  />
                </Box>
              </Box>
            </Box>
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
