import * as React from 'react';
import { BodyText, Container, SubTitle, Title } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base, gray, primary } from '@/styles/colors';

import {
  BoxIcon,
  ChartIcon,
  HealthIcon,
  LookPeopleIcon,
  MoneyTickIcon,
  RunIcon,
  SuitcaseIcon,
  TasksIcon,
  TimerIcon,
} from '@/components/atoms';

interface IOurBenefitsProps {}

export const OurBenefits: React.FunctionComponent<IOurBenefitsProps> = () => {
  const BenefitsData = [
    {
      id: 'benefit-1',
      bgIcon: '#F69250',
      icon: <LookPeopleIcon />,
      content: 'We recruit passionate engineers who share our vision',
    },
    {
      id: 'benefit-2',
      bgIcon: base.green,
      icon: <TasksIcon />,
      content: 'We provide challenging tasks to enhance their skills',
    },
    {
      id: 'benefit-3',
      bgIcon: primary[400],
      icon: <ChartIcon />,
      content: 'We empower them to make significant decisions and grow with the business',
    },
    {
      id: 'benefit-4',
      bgIcon: primary[400],
      icon: <BoxIcon />,
      content: 'Work from anywhere',
    },
    {
      id: 'benefit-5',
      bgIcon: base.orange,
      icon: <TimerIcon />,
      content: 'Unlimited paid time off (PTO)',
    },
    {
      id: 'benefit-6',
      bgIcon: base.yellow,
      icon: <MoneyTickIcon />,
      content: 'Competitive compensation packages',
    },
    {
      id: 'benefit-7',
      bgIcon: base.yellow,
      icon: <RunIcon />,
      content: 'Covering the cost of participating in sports activities',
    },
    {
      id: 'benefit-8',
      bgIcon: primary[400],
      icon: <SuitcaseIcon />,
      content: 'Annual company travel &  An intimate party every month',
    },
    {
      id: 'benefit-9',
      bgIcon: base.orange,
      icon: <HealthIcon />,
      content: 'Comprehensive health insurance for you and your loved one',
    },
  ];

  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderData = BenefitsData.map((item) => {
    return (
      <Grid item xs={12} md={4} key={item.id}>
        <Box
          borderRadius="8px"
          boxShadow="0px 10px 47px 0px #EFEFEF"
          p="20px"
          display="flex"
          flexDirection="column"
          gap="20px"
          bgcolor={base.white}
        >
          <Box
            bgcolor={item.bgIcon}
            width="54px"
            height="54px"
            borderRadius="50%"
            boxShadow="0px 10px 47px 0px #EFEFEF"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {item.icon}
          </Box>
          <Typography variant={isMobile ? 'fs14' : 'fs16'} fontWeight={600} color={base.grey}>
            {item.content}
          </Typography>
        </Box>
      </Grid>
    );
  });

  const isTablet = useBreakpoint(BreakPoints.LG);

  return (
    <Box py={isTablet ? '40px' : '100px'} bgcolor={gray[50]}>
      <Container>
        <Box display="flex" flexDirection="column" rowGap="24px" maxWidth="668px" mb="64px">
          <SubTitle text="Our benefits" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Things are ready for you!" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="We prioritize our employees' well-being and professional growth. Enjoy competitive compensation, comprehensive benefits, and ongoing opportunities for learning and development. Join our team and experience the rewarding benefits of being a Spartan."
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </Box>
        <Grid container justifyContent="center" spacing={'24px'}>
          {renderData}
        </Grid>
      </Container>
    </Box>
  );
};
