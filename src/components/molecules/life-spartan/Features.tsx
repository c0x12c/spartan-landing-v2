import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box } from '@mui/material';
import { Features } from '@/constants/features';
import { BoxFeature, Container } from '@/components/atoms';

interface ILifeSpartanFeaturesProps {}

export const LifeSpartanFeatures: React.FunctionComponent<ILifeSpartanFeaturesProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderFeatures = Features.map((item, index) => {
    return <BoxFeature key={item.id} {...item} isReverse={index % 2 !== 0} />;
  });

  return (
    <Box py={isTablet ? '40px' : '100px'}>
      <Container>
        <Box display="flex" flexDirection="column" gap={isTablet ? '40px' : '100px'}>
          {renderFeatures}
        </Box>
      </Container>
    </Box>
  );
};
