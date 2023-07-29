import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import DodgeCard from '@/assets/images/case-liquidity/dodge-card.webp';
import CauseCard from '@/assets/images/case-liquidity/cause-card.webp';
import DownloadAppPanel from '@/components/atoms/DownloadAppPanel';
import { Container } from '@/components/atoms/common/Container';
import { base } from '@/styles/colors';
import { BodyText, Title } from '@/components/atoms';

const Cards = () => {
  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={{ md: '44px', xs: 0 }}
        py={{ md: '80px', xs: '40px' }}
      >
        <Box>
          <Title
            text="About Liquidity"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              mb: { md: '32px', xs: '24px' },
              mt: { md: '44px', xs: '40px' },
            }}
          />
          <BodyText
            sx={{ maxWidth: '641px', mb: { md: '20px', xs: '24px' } }}
            text="Discover how Liquidity Financial revolutionized the banking and spending landscape by
            empowering individuals to align their choices with their interests and values. Through
            innovative financial products and a commitment to social responsibility, Liquidity
            Financial offers a unique banking experience that reflects personal aspirations."
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </Box>
        <Box
          width={'100%'}
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
          mb={{ xs: '44px', md: 0 }}
        >
          <Image
            src={DodgeCard}
            alt="Dodge Card"
            style={{ maxWidth: '100%', height: 'auto' }}
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
              <Typography
                variant="fs24"
                color={base.black}
                fontWeight={600}
                fontSize={{ xs: '18px', md: '24px' }}
              >
                CauseCard
              </Typography>
              <Typography
                variant="fs16"
                fontSize={{ xs: '14px', md: '16px' }}
                color={base.black}
                fontWeight={600}
              >
                One-stop app for everything Dogecoin
              </Typography>
              <Typography variant="fs18" fontSize={{ xs: '14px', md: '18px' }}>
                The DogeCoin is a card built for the Dogecoin community. Everyone who uses the
                DogeCard gets Dogecoin rewards onevery purchase, and get special benefits for
                holding Dogecoin.
              </Typography>
            </Box>
            <DownloadAppPanel
              linkAppStore="https://apps.apple.com/id/app/dogecard/id1582868891"
              linkPlayStore="https://play.google.com/store/apps/details?id=com.liquidityfinancial.dogeking&ah=TtIRW8nq4Wadsdvk_lX0p2I-LQk"
            />
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
            style={{ maxWidth: '100%', height: 'auto' }}
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
              <Typography
                variant="fs24"
                color={base.black}
                fontWeight={600}
                fontSize={{ xs: '18px', md: '24px' }}
              >
                CauseCard
              </Typography>
              <Typography
                variant="fs16"
                color={base.black}
                fontWeight={600}
                fontSize={{ xs: '14px', md: '16px' }}
              >
                A debit card that fights for what&apos;s right
              </Typography>
              <Typography variant="fs18" fontSize={{ xs: '14px', md: '18px' }}>
                Turn transactions into action. Use CauseCard and automatically donate 0.75% of each
                purchase to the causes your care about.
              </Typography>
            </Box>
            <DownloadAppPanel
              linkAppStore="https://apps.apple.com/id/app/causecard-donate-to-charity/id6444664550"
              linkPlayStore="https://play.google.com/store/apps/details?id=com.liquidity.cause&pli=1"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cards;
