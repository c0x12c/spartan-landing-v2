import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import resultBanner from '@/assets/images/case-ursa/result-banner.png';
import resultImage from '@/assets/images/case-ursa/result-image.png';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import { base } from '@/styles/colors';
import { DataURSAResult } from '@/constants/case-ursa';

interface IResultURSAProps {}

export const ResultURSA: React.FunctionComponent<IResultURSAProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.SM);

  const renderResult = DataURSAResult.map((item) => {
    return (
      <Box
        component="li"
        key={item.id}
        display="flex"
        gap="1em"
        sx={{
          '&::before': {
            content: '"• "',
            color: base.white,
          },
        }}
      >
        <Typography variant={'fs18'} color={base.white} component="p">
          {item.text}
        </Typography>
      </Box>
    );
  });

  return (
    <Container>
      <Box
        sx={{
          backgroundImage: `url(${resultBanner.src})`,
          backgroundSize: isTablet ? 'cover' : '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        display="flex"
        flexDirection={isTablet ? 'column' : 'row'}
      >
        <Box
          px={isMobile ? '16px' : '71px'}
          py={isTablet ? (isMobile ? '24px' : '66px') : 0}
          display="flex"
          flexDirection={'column'}
          justifyContent="center"
        >
          <Typography variant={'fs48'} color={base.white} component="h3" mb="28px">
            The result
          </Typography>
          <Box component="ul" display="flex" flexDirection="column" sx={{ listStyle: 'none' }}>
            {renderResult}
          </Box>
        </Box>
        {!isTablet && (
          <Image src={resultImage} alt="resultImage" style={{ height: '100%', maxWidth: 'auto' }} />
        )}
      </Box>

      {isTablet && (
        <Box bgcolor="#181C27">
          <Image src={resultImage} alt="resultImage" style={{ height: 'auto', width: '100%' }} />
        </Box>
      )}
    </Container>
  );
};
