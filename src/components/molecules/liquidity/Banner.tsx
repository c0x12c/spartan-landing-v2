import { Banner } from '@/components/atoms/Banner';
import BG from '@/assets/images/case-liquidity/Background.svg';
import { Box } from '@mui/material';
import Image from 'next/image';
import BannerImage from '@/assets/images/case-liquidity/image-banner.svg';
import { Container } from '@/components/atoms/common/Container';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { BodyText, MainTitle } from '@/components/atoms';
import BannerImageMD from '../../../assets/images/case-volta/banner-image.svg';

const BannerLiquidity = () => {
  const isMobile = useBreakpoint(BreakPoints.SM);
  return (
    <Banner src={BG.src} haveBackground={false}>
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box
            display={'flex'}
            width={'100%'}
            justifyContent={{ lg: 'space-between', md: 'start' }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={'32px'}
              justifyContent={'center'}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <MainTitle text={`Liquidity ${(<br />)} Financial`} />
              <BodyText
                text="Transforming Banking and Spending for the New Generation"
                sx={{ maxWidth: '488px' }}
              />
            </Box>
            {!isMobile && (
              <Image
                src={BannerImage}
                alt="banner image"
                style={{ maxWidth: '57%' }}
                data-aos="fade-left"
                data-aos-delay="300"
              />
            )}
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default BannerLiquidity;
