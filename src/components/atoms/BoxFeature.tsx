import * as React from 'react';
import { FeatureType } from '@/constants/features';
import { Box, Typography } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import { CardFeature } from './CardFeature';
import { base, gray } from '@/styles/colors';

interface IBoxFeatureProps {
  isReverse: boolean;
}

export const BoxFeature: React.FunctionComponent<IBoxFeatureProps & FeatureType> = ({
  title,
  description,
  imgSrc,
  subContent,
  isReverse,
}) => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderSubMenu = subContent.map((item) => {
    return <CardFeature key={item.id} {...item} data-aos="fade-up" data-aos-delay="300" />;
  });

  return (
    <Box
      display="flex"
      flexDirection={isTablet ? 'column-reverse' : isReverse ? 'row-reverse' : 'row'}
      gap={isTablet ? '40px' : '100px'}
    >
      <Box position="relative" minWidth={isMobile ? '100%' : '461px'} mx="auto">
        <Image
          src={imgSrc}
          alt={title}
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
          padding="32px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box></Box>
          <Box display="flex" flexDirection="column" rowGap="24px">
            {renderSubMenu}
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" rowGap="24px" letterSpacing="-0.8px">
        <Typography variant="fs40" color={base.black} data-aos="fade-up" data-aos-delay="200">
          {title}
        </Typography>
        <Typography
          variant="fs16"
          color={gray[600]}
          letterSpacing="0.32px"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
