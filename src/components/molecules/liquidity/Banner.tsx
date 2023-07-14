import { Banner } from '@/components/atoms/Banner';
import BG from '@/assets/images/case-liquidity/Background.svg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BannerImage from '@/assets/images/case-liquidity/image-banner.svg';
import { Container } from '@/components/atoms/common/Container';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

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
              gap={{ lg: '32px', xs: '24px' }}
              justifyContent={'center'}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Typography variant="fs64" fontSize={{ xs: '36px', lg: '64px' }} color={base.white}>
                Liquidity <br /> Financial
              </Typography>
              <Typography
                variant="fs24"
                fontSize={{ xs: '18px', lg: '24px' }}
                color={base.white}
                maxWidth={'488px'}
              >
                Transforming Banking and Spending for the New Generation
              </Typography>
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
