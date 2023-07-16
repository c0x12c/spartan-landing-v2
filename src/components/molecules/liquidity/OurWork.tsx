import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Star from '@/assets/images/icons/yellow-star.svg';
import { Container } from '@/components/atoms/common/Container';
import ResultImage from '@/assets/images/case-liquidity/result.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { items } from '@/constants/case-liquidity';
import CaseStudyItem, { Variant } from '@/components/atoms/CaseCtudyItems';
import checked from '../../../assets/images/case-liquidity/checked.svg';

const WhatWeDo = () => {
  const isMD = useBreakpoint(BreakPoints.MD);

  const renderItems = items.map((item) => {
    return (
      <CaseStudyItem
        key={item.id}
        variant={Variant.LIST}
        title={item.title}
        list={item.additionalText}
        icon={checked}
      />
    );
  });

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
          <Box
            width="100%"
            display={'flex'}
            flexDirection={'column'}
            gap={{ xs: '16px', md: '24px' }}
          >
            {renderItems}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatWeDo;
