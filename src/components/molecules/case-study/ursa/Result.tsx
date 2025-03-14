import * as React from 'react';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box } from '@mui/material';
import resultBanner from '@/assets/images/case-ursa/result-banner.webp';
import resultBannerSp from '@/assets/images/case-ursa/result-banner-sp.webp';
import resultImage from '@/assets/images/case-ursa/result-image.webp';
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
        <BodyText text={item.text} sx={{ color: base.white }} />
      </Box>
    );
  });

  const renderResultSection = (
    <>
      <Box
        sx={{
          backgroundImage: `url(${isMobile ? resultBannerSp.src : resultBanner.src})`,
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
          <Title text="The result" sx={{ color: base.white, mb: '28px' }} />
          <Box component="ul" display="flex" flexDirection="column" sx={{ listStyle: 'none' }}>
            {renderResult}
          </Box>
        </Box>
        {!isTablet && (
          <Image
            src={resultImage}
            alt="resultImage"
            style={{ height: 'auto', maxWidth: '491px' }}
          />
        )}
      </Box>
      {isTablet && (
        <Box bgcolor="#181C27">
          <Image src={resultImage} alt="resultImage" style={{ height: 'auto', width: '100%' }} />
        </Box>
      )}
    </>
  );

  return isMobile ? <Box>{renderResultSection}</Box> : <Container>{renderResultSection}</Container>;
};
