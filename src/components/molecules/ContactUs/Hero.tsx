import Container from '@/components/atoms/Container';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ContactImage from '@/assets/images/Contact-page.jpg';
import { gray } from '@/styles/colors';
import Banner from '@/components/atoms/Banner';
import heroBanner from '@/assets/images/decor-contact-us.svg';

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <Banner src={heroBanner.src}>
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
    </Banner>
  );
};
export default Hero;
