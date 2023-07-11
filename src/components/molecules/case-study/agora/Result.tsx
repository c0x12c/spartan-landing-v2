import * as React from 'react';
import { Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import resultBanner from '@/assets/images/case-agora/result-banner.png';
import resultImage from '@/assets/images/case-agora/result-image.png';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import { base } from '@/styles/colors';
import { DataAgoraResult } from '@/constants/case-agora';

interface IResultAgoraProps {}

export const ResultAgora: React.FunctionComponent<IResultAgoraProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.SM);

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
          px={isMobile ? '16px' : '88px'}
          py={isTablet ? (isMobile ? '48px' : '94px') : 0}
          display="flex"
          flexDirection={'column'}
          justifyContent="center"
        >
          <Typography variant={'fs48'} color={base.white} component="h3" mb="28px">
            The result
          </Typography>
          <Typography variant={'fs18'} color={base.white} component="p">
            {DataAgoraResult}
          </Typography>
        </Box>
        {!isTablet && (
          <Image src={resultImage} alt="resultImage" style={{ height: '100%', maxWidth: 'auto' }} />
        )}
      </Box>
      {isTablet && (
        <Image src={resultImage} alt="resultImage" style={{ height: 'auto', width: '100%' }} />
      )}
    </Container>
  );
};
