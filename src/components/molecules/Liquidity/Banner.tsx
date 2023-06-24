import Banner from '@/components/atoms/Banner';
import BG from '@/assets/images/Background-liquidity.svg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import BannerImage from '@/assets/images/banner-liquidity.svg';
import Container from '@/components/atoms/Container';
import styled from '@emotion/styled';
import { base } from '@/styles/colors';

const BannerLiquidity = () => {
  const StyledContainer = styled(Container)`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <Banner src={BG.src}>
      <StyledContainer>
        <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
          <Box display={'flex'} flexDirection={'column'} gap={'32px'} justifyContent={'center'}>
            <Typography variant="fs80" color={base.white}>
              Liquidity <br /> Financial
            </Typography>
            <Typography maxWidth={'490px'} variant="fs40" color={base.white}>
              Transforming Banking and Spending for the New Generation
            </Typography>
          </Box>
          <Image src={BannerImage} alt="banner image" />
        </Box>
      </StyledContainer>
    </Banner>
  );
};

export default BannerLiquidity;
