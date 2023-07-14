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
      <Box display="flex" flexDirection="column" py={{ xs: '40px', lg: '80px' }}>
        <Box display="flex" alignItems="center" width="100%" gap={'48px'}>
          <Typography
            variant="fs48"
            color="#000"
            data-aos="fade-up"
            data-aos-delay="200"
            minWidth={'max-content'}
            component={'p'}
            textAlign={{ xs: 'center', lg: 'left' }}
            width={{ xs: '100%', lg: 'auto' }}
            fontSize={{ xs: '28px', lg: '48px' }}
            mb={{ xs: '24px', lg: 0 }}
          >
            Our Work
          </Typography>
          {!isMD && (
            <Box
              display="flex"
              gap="8px"
              alignItems="center"
              data-aos="fade-left"
              data-aos-delay="200"
              width={'100%'}
            >
              <Box component={Divider} width={'calc(100% - 60px)'} height="1px" bgcolor="#808080" />
              <Image src={Star} alt="yellow star" />
            </Box>
          )}
        </Box>

        <Box
          display="flex"
          gap={{ md: '50px', xs: 0 }}
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          alignItems={'center'}
        >
          <Image
            src={ResultImage}
            alt="mobile phone with card"
            style={{ maxWidth: '100%', height: 'auto' }}
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
