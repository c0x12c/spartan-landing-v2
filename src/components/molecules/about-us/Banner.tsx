import { Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { HeroBanner } from '@/assets/images/about-us';
import { Box } from '@mui/material';
import { gray } from '@/styles/colors';

export const AboutUsBanner = () => {
  return (
    <Banner src={HeroBanner.src}>
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            gap="24px"
            maxWidth={{ md: '655px', xs: '100%' }}
          >
            <MainTitle
              text="Top tier, tech savvy /Engineers/"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <BodyText
              text="We are Spartan, a team of elite, tech-savvy professionals who specialize in providing outstanding technical expertise to meet your goals. Our engineers are selected from the top 3%, signifying that they are not merely proficient coders but also exceptional engineers with a deep comprehension of the intricacies of software development."
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ color: gray[300] }}
            />
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};
