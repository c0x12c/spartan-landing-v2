import { Banner } from '@/components/atoms/Banner';
import BG from '@/assets/images/case-liquidity/Background.svg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BannerImage from '@/assets/images/case-liquidity/image-banner.svg';
import { Container } from '@/components/atoms/common/Container';
import { base } from '@/styles/colors';

const BannerLiquidity = () => {
  return (
    <Banner src={BG.src} haveBackground={false}>
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
            <Box display={'flex'} flexDirection={'column'} gap={'32px'} justifyContent={'center'}>
              <Typography variant="fs64" color={base.white}>
                Liquidity <br /> Financial
              </Typography>
              <Typography variant="fs24" color={base.white}>
                Transforming Banking and Spending for the New Generation
              </Typography>
            </Box>
            <Image src={BannerImage} alt="banner image" style={{ maxWidth: '50%' }} />
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default BannerLiquidity;
