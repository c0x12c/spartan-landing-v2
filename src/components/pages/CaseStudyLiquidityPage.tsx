import { Box } from '@mui/material';
import { Banner, Cards, Description } from '../molecules/liquidity';
import { MainTemplate } from '../templates';
import Image from 'next/image';
import bgCard from '@/assets/images/case-liquidity/Cards.svg';

export const CaseStudyLiquidityPage = () => {
  return (
    <Box>
      <MainTemplate>
        <Box display={'flex'} flexDirection={'column'} gap={'44px'}>
          <Banner />
          <Description />
          <Image
            src={bgCard}
            alt={'Cards for communities'}
            style={{ margin: '0 auto', width: '100%', height: 'auto' }}
          />
          <Cards />
        </Box>
      </MainTemplate>
    </Box>
  );
};
