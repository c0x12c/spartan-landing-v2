import Container from '@/components/atoms/Container';
import { base } from '@/styles/colors';
import { Box, Typography } from '@mui/material';

const AboutLiquidity = () => {
  return (
    <Container>
      <Box pt={'44px'} display={'flex'} flexDirection={'column'} gap={'32px'}>
        <Typography variant="fs80" color={base.black}>
          About Liquidity
        </Typography>
        <Typography variant="fs16" maxWidth={'682px'}>
          Discover how Liquidity Financial revolutionized the banking and spending landscape by
          empowering individuals to align their choices with their interests and values. Through
          innovative financial products and a commitment to social responsibility, Liquidity
          Financial offers a unique banking experience that reflects personal aspirations.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutLiquidity;
