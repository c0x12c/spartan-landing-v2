import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ListItem from '@/components/atoms/ItemLiquidityList';
import Star from '@/assets/images/icons/yellow-star.svg';
import { Container } from '@/components/atoms/common/Container';
import ResultImage from '@/assets/images/case-liquidity/result.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

const WhatWeDo = () => {
  const isMD = useBreakpoint(BreakPoints.MD);
  const items = [
    {
      title: 'Backend System',
      additionalText: [
        'Rewrote the entire backend system from Go to Kotlin to enhance stability and performance.',
        'Improved the infrastructure to ensure robustness and scalability.',
        "Implemented DataDog monitoring for better visibility into the system's health.",
      ],
    },
    {
      title: 'Mobile Application',
      additionalText: [
        'Resolved critical bugs and improved the overall stability of the mobile applications.',
        'Achieved a high level of stability with a close to 99.5% crash-free user rate.',
        'Developed a new mobile product called PrideCard.',
      ],
    },
    {
      title: 'Websites and Web Admin Dashboard',
      additionalText: [
        "Built websites for Liquidity Financial's products.",
        'Developed web admin dashboard for efficient account management and user support.',
      ],
    },
    {
      title: 'Tools for Support Team',
      additionalText: [
        'Built tools to assist the support team in resolving users complaints more efficiently.',
      ],
    },
  ];

  return (
    <Container>
      <Box display="flex" flexDirection="column" gap={{ md: '85px', xs: 0 }} pb="80px">
        <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
          <Typography variant="fs64" color="#000" data-aos="fade-up" data-aos-delay="200">
            Our Work
          </Typography>
          {!isMD && (
            <Box
              display="flex"
              gap="8px"
              alignItems="center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Box component={Divider} width="578px" height="1px" bgcolor="#808080" />
              <Image src={Star} alt="yellow star" />
            </Box>
          )}
        </Box>

        <Box
          display="flex"
          gap={{ md: '50px', xs: 0 }}
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
        >
          <Image
            src={ResultImage}
            alt="mobile phone with card"
            style={{ maxWidth: '100%' }}
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <Box width="100%">
            {items.map((item, index) => (
              <ListItem key={index} title={item.title} additionalText={item.additionalText} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatWeDo;
