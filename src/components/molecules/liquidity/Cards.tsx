import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import DodgeCard from '@/assets/images/case-liquidity/dodge-card.svg';
import CauseCard from '@/assets/images/case-liquidity/cause-card.svg';
import DownloadAppPanel from '@/components/atoms/DownloadAppPanel';
import { Container } from '@/components/atoms/common/Container';
import { base } from '@/styles/colors';
import { Title } from '@/components/atoms';

const Cards = () => {
  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'} gap={'44px'} p={'80px 0'}>
        <Box>
          <Title text="About Liquidity" mb={'32px'} mt={'44px'} />
          <Typography variant="fs18" width={'64%'} component={'p'}>
            Discover how Liquidity Financial revolutionized the banking and spending landscape by
            empowering individuals to align their choices with their interests and values. Through
            innovative financial products and a commitment to social responsibility, Liquidity
            Financial offers a unique banking experience that reflects personal aspirations.
          </Typography>
        </Box>
        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Image src={DodgeCard} alt="Dodge Card" />
          <Box display={'flex'} flexDirection={'column'} gap="44px" maxWidth={'361px'}>
            <Box display={'flex'} flexDirection={'column'} gap="16px">
              <Typography variant="fs24" color={base.black} fontWeight={600}>
                CauseCard
              </Typography>
              <Typography variant="fs16" color={base.black} fontWeight={600}>
                One-stop app for everything Dogecoin
              </Typography>
              <Typography variant="fs18">
                The DogeCoin is a card built for the Dogecoin community. Everyone who uses the
                DogeCard gets Dogecoin rewards onevery purchase, and get special benefits for
                holding Dogecoin.
              </Typography>
            </Box>
            <DownloadAppPanel />
          </Box>
        </Box>
        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Image src={CauseCard} alt="Cause Card" />
          <Box display={'flex'} flexDirection={'column'} gap="44px" maxWidth={'361px'}>
            <Box display={'flex'} flexDirection={'column'} gap="16px">
              <Typography variant="fs24" color={base.black} fontWeight={600}>
                CauseCard
              </Typography>
              <Typography variant="fs16" color={base.black} fontWeight={600}>
                A debit card that fights for what&apos;s right
              </Typography>
              <Typography variant="fs18">
                Turn transactions into action. Use CauseCard and automatically donate 0.75% of each
                purchase to the causes your care about.
              </Typography>
            </Box>
            <DownloadAppPanel />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cards;
