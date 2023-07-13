import * as React from 'react';
import { Box, styled } from '@mui/material';
import { Container, SubTitle, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

import team1 from '@/assets/images/life-spartan/our-team-1.png';
import team2 from '@/assets/images/life-spartan/our-team-2.png';
import team3 from '@/assets/images/life-spartan/our-team-3.png';
import team4 from '@/assets/images/life-spartan/our-team-4.png';
import team5 from '@/assets/images/life-spartan/our-team-5.png';
import team6 from '@/assets/images/life-spartan/our-team-6.png';
import team7 from '@/assets/images/life-spartan/our-team-7.png';
import team8 from '@/assets/images/life-spartan/our-team-8.png';
import team9 from '@/assets/images/life-spartan/our-team-9.png';
import team10 from '@/assets/images/life-spartan/our-team-10.png';

import { gray } from '@/styles/colors';

interface ITeamEngineersProps {}

const CustomInner = styled(Box)(({ theme }) => ({
  '& .slick-list': {
    overflow: 'visible',
    margin: '0 -24px',
  },
  [theme.breakpoints.down('md')]: {
    '& .slick-list': {
      overflow: 'hidden',
    },
  },
}));

export const TeamEngineers: React.FunctionComponent<ITeamEngineersProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);

  const dataItems = [
    { id: 'team-1', img: team1 },
    { id: 'team-2', img: team2 },
    { id: 'team-3', img: team3 },
    { id: 'team-4', img: team4 },
    { id: 'team-5', img: team5 },
    { id: 'team-6', img: team6 },
    { id: 'team-7', img: team7 },
    { id: 'team-8', img: team8 },
    { id: 'team-9', img: team9 },
    { id: 'team-10', img: team10 },
  ];

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const renderItem = dataItems.map((item) => {
    return (
      <Box key={item.id} mx="24px">
        <Image src={item.img} alt={item.id} style={{ height: 'auto' }} />
      </Box>
    );
  });

  return (
    <Box py={isTablet ? '40px' : '100px'} bgcolor={gray[50]}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'41px'}>
          <SubTitle text="Our team" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Life at Spartan" data-aos="fade-up" data-aos-delay="300" />
        </Box>
      </Container>
      <CustomInner>
        <Slider {...settings}>{renderItem}</Slider>
      </CustomInner>
    </Box>
  );
};
