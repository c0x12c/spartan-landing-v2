import { Box } from '@mui/material';
import LiquidityFinancial from '../molecules/Liquidity/LiquidityFinancial';
import MainTemplate from '../templates/MainTemplate';
import Image from 'next/image';
import AboutLiquidity from '../molecules/Liquidity/AboutLiquidity';
import Cards from '../molecules/Liquidity/Cards';
import WhatWeDo from '../molecules/Liquidity/WhatWeDo';
import Result from '../molecules/Liquidity/Result';
import Consultation from '../molecules/Liquidity/Consultation';
import OurStack from '../molecules/Liquidity/OurStack';
import NextProject from '../molecules/Liquidity/NextProject';
import BannerLiquidity from '../molecules/Liquidity/Banner';
import bgCard from '../../assets/images/cards-bg.svg';

const LiquidityPage = () => {
  return (
    <MainTemplate>
      <Box display="flex" gap="44px" flexDirection={'column'}>
        <BannerLiquidity />
        <LiquidityFinancial />
        <Image
          src={bgCard}
          alt={'Cards for communities'}
          style={{ margin: '0 auto', width: '100%', height: 'auto' }}
        />
        <AboutLiquidity />
        <Cards />
        <WhatWeDo />
        <OurStack />
        <Result />
        <Consultation />
        <NextProject />
      </Box>
    </MainTemplate>
  );
};

export default LiquidityPage;
