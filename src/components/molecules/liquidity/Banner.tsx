import { Banner } from '@/components/atoms/Banner';
import BG from '@/assets/images/case-liquidity/Background.png';
import BGSp from '@/assets/images/case-liquidity/Background-sp.png';
import { Box } from '@mui/material';
import Image from 'next/image';
import BannerImage from '@/assets/images/case-liquidity/image-banner.svg';
import { Container } from '@/components/atoms/common/Container';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { BodyText, MainTitle } from '@/components/atoms';

const BannerLiquidity = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Banner src={isMobile ? BGSp.src : BG.src} haveBackground={'#141414'}>
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={{ xs: '42px', sm: 0 }}
            width={'100%'}
            justifyContent={{ md: 'space-between', xs: 'start' }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={{ md: '32px', xs: '24px' }}
              justifyContent={'center'}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <MainTitle text={`Liquidity \n Financial`} />
              <BodyText
                text="Transforming Banking and Spending for the New Generation"
                sx={{ color: base.white, maxWidth: '488px', fontWeight: 600 }}
              />
            </Box>
            <Image
              src={BannerImage}
              alt="banner image"
              style={{ height: 'auto', width: isMobile ? '100%' : '57%' }}
              data-aos="fade-left"
              data-aos-delay="300"
            />
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default BannerLiquidity;
