import { Box } from '@mui/material';
import { Banner, Cards, Description, LiquidityTechStacks, OurWork } from '../molecules/liquidity';
import { MainTemplate } from '../templates';
import Image from 'next/image';
import bgCard from '@/assets/images/case-liquidity/Cards.svg';
import Result from '../molecules/liquidity/Result';
import { NextProject } from '../atoms';

export const CaseStudyLiquidityPage = () => {
  return (
    <Box>
      <MainTemplate>
        <Box display={'flex'} flexDirection={'column'} gap={'44px'}>
          <Banner />
          <Description />
          <Image
            data-aos="fade-up"
            data-aos-delay="300"
            src={bgCard}
            alt={'Cards for communities'}
            style={{ margin: '0 auto', width: '100%', height: 'auto' }}
          />
          <Cards />
          <OurWork />
          <LiquidityTechStacks />
          <Result />
          <NextProject />
        </Box>
      </MainTemplate>
    </Box>
  );
};
