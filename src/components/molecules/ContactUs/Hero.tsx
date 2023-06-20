import Container from '@/components/atoms/Container';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ContactImage from '@/assets/images/Contact-page.jpg';
import { base, gray } from '@/styles/colors';

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <Box sx={{ paddingTop: { xs: '214px', xl: '202px', paddingBottom: '48px' } }}>
      <Container>
        <Typography component="h1" variant="fs80" sx={{ marginBottom: '51px', color: gray[850] }}>
          Contact us
        </Typography>
        <Image
          src={ContactImage}
          alt="Contact Us image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Container>
    </Box>
  );
};
export default Hero;
