import * as React from 'react';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box } from '@mui/material';
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

  const renderResult = (
    <>
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
          <Title text="The result" sx={{ color: base.white, mb: '28px' }} />
          <BodyText text={DataAgoraResult} sx={{ color: base.white }} />
        </Box>
        {!isTablet && (
          <Image src={resultImage} alt="resultImage" style={{ height: '100%', maxWidth: 'auto' }} />
        )}
      </Box>
      <Image src={resultImage} alt="resultImage" style={{ height: 'auto', width: '100%' }} />
    </>
  );

  return !isMobile ? <Container>{renderResult}</Container> : <Box> {renderResult}</Box>;
};
