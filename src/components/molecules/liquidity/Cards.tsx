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
          <Title
            text="About Liquidity"
            mb={'32px'}
            mt={'44px'}
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <Typography
            variant="fs18"
            width={{ md: '64%', xs: '100%' }}
            component={'p'}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Discover how Liquidity Financial revolutionized the banking and spending landscape by
            empowering individuals to align their choices with their interests and values. Through
            innovative financial products and a commitment to social responsibility, Liquidity
            Financial offers a unique banking experience that reflects personal aspirations.
          </Typography>
        </Box>
        <Box
          width={'100%'}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Image
            src={DodgeCard}
            alt="Dodge Card"
            style={{ maxWidth: '100%' }}
            data-aos="fade-left"
            data-aos-delay="500"
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap="44px"
            maxWidth={'361px'}
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
        <Box
          width={'100%'}
          display={'flex'}
          alignItems={'center'}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={'space-between'}
        >
          <Image
            src={CauseCard}
            alt="Cause Card"
            style={{ maxWidth: '100%' }}
            data-aos="fade-left"
            data-aos-delay="500"
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap="44px"
            maxWidth={'361px'}
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
