import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box } from '@mui/material';
import { Features } from '@/constants/features';
import { BoxFeature, Container } from '@/components/atoms';

interface ILifeSpartanFeaturesProps {}

export const LifeSpartanFeatures: React.FunctionComponent<ILifeSpartanFeaturesProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderFeatures = Features.map((item) => {
    return <BoxFeature key={item.id} {...item} />;
  });

  return (
    <Box
      py={isTablet ? '40px' : '100px'}
      sx={{
        background:
          'linear-gradient(180deg, #FFF 0%, rgba(211, 221, 255, 0.74) 39.05%, rgba(221, 221, 255, 0.48) 58.21%, rgba(255, 255, 255, 0.00) 100%)',
      }}
    >
      <Container>
        <Box display="flex" flexDirection="column" gap={isTablet ? '40px' : '100px'}>
          {renderFeatures}
        </Box>
      </Container>
    </Box>
  );
};
