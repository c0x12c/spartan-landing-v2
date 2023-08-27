import * as React from 'react';
import { BodyText, CardHorizontal, Container, SubTitle, Title } from '@/components/atoms';
import { gray, primary } from '@/styles/colors';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import bizImage from '@/assets/images/home/biz-image.webp';
import bizFinance from '@/assets/images/home/biz-finance.webp';
import bizChart from '@/assets/images/home/biz-chart.webp';

import money from '@/assets/images/icons/money-send.svg';
import timer from '@/assets/images/icons/timer.svg';
import like from '@/assets/images/icons/like.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IWhyBusinessProps {}

export const WhyBusiness: React.FunctionComponent<IWhyBusinessProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const data = [
    {
      id: 'biz-1',
      title: 'Startup Partner',
      icon: money,
      subTitle: '15 years',
      content: (
        <>
          <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[500]} letterSpacing="0.28px">
            Of{' '}
            <Typography variant={isMobile ? 'fs14' : 'fs16'} color={primary[400]} fontWeight={600}>
              experience{' '}
            </Typography>
            in the US.
          </Typography>
        </>
      ),
    },
    {
      id: 'biz-2',
      title: 'Engineering Force',
      icon: timer,
      subTitle: '3%',
      content: (
        <>
          <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[500]} letterSpacing="0.28px">
            Top{' '}
            <Typography variant={isMobile ? 'fs14' : 'fs16'} color={primary[400]} fontWeight={600}>
              engineers{' '}
            </Typography>
            around the world.
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
    <Box py={isMobile ? '40px' : '100px'}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap={isMobile ? '12px' : '24px'}
          maxWidth="668px"
          mb={isMobile ? '24px' : '65px'}
        >
          <SubTitle text="Our strengths" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Why do businesses choose Spartan?" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="Our objective is to develop a profitable and effective solution that helps clients to
            expand their businesses and overcome financial constraints"
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{
              mt: isMobile ? '12px' : 0,
            }}
          />
        </Box>
        <Grid container spacing={isMobile ? '32px' : '65px'}>
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
            <Box display="flex" flexDirection="column" rowGap={isMobile ? '16px' : '40px'}>
              {renderData}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
