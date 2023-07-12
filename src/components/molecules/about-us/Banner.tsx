import { Banner, Container, MainTitle } from '@/components/atoms';
import { HeroBanner } from '@/assets/images/about-us';
import { Box, Typography } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const AboutUsBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
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
              text="Top tier tech savvy /Engineers/ in world"
              data-aos="fade-up"
              data-aos-delay="200"
            />

            <Typography variant="fs18" color={gray[300]} data-aos="fade-up" data-aos-delay="300">
              We are Spartan, a team of elite tech-savvy people who specialize in providing
              top-notch technical expertise to meet your goals. Our engineers are selected from the
              top 1%, signifying that they are not merely proficient coders but also exceptional
              engineers with a deep comprehension of the intricacies of software development.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};
