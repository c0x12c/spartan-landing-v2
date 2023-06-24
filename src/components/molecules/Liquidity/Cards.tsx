import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import DodgeCard from '@/assets/images/dodge-card.svg';
import CauseCard from '@/assets/images/cause-card.svg';
import DownloadAppPanel from '@/components/atoms/DownloadAppPanel';
import Container from '@/components/atoms/Container';
import { base } from '@/styles/colors';

const Cards = () => {
  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'} gap={'44px'}>
        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Image src={DodgeCard} alt="Dodge Card" />
          <Box display={'flex'} flexDirection={'column'} gap="44px" maxWidth={'361px'}>
            <Box display={'flex'} flexDirection={'column'} gap="16px">
              <Typography variant="fs40" color={base.black} fontWeight={700}>
                CauseCard
              </Typography>
              <Typography variant="fs18" color={base.black} fontWeight={700}>
                One-stop app for everything Dogecoin
              </Typography>
              <Typography variant="fs16">
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
              <Typography variant="fs40" color={base.black}>
                CauseCard
              </Typography>
              <Typography variant="fs18" color={base.black}>
                A debit card that fights for what&apos;s right
              </Typography>
              <Typography variant="fs16">
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
