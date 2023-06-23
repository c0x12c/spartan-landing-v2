import * as React from 'react';
import * as colors from '@/styles/colors';
import { useScroll } from 'framer-motion';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import ScrollTitle from '../../atoms/ScrollTitle';
import Container from '../../atoms/Container';
import Image from 'next/image';
import aboutUs from '@/assets/images/about-us-image.svg';

interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Container>
        <Box mb="40px">
          <ScrollTitle scrollYProgress={scrollYProgress} scrollRef={scrollRef} title={'About Us'} />
        </Box>
        <Grid
          container
          mb="120px"
          spacing="52px"
          flexDirection={matchesDesktop ? 'row' : 'column-reverse'}
        >
          <Grid item xs={12} lg={6}>
            <Image src={aboutUs} alt="aboutUs" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              maxWidth: {
                lg: '100%',
                xs: '540px',
              },
            }}
          >
            <Typography
              variant={matchesMobile ? 'fs30' : 'fs54'}
              color={colors.gray[800]}
              mb="23px"
              component="h2"
            >
              We Are Spartans!
            </Typography>
            <Typography variant={'fs16'} color={colors.base.grey} mb="23px" component="h2">
              The company is based in the US but works with engineers from around the world,
              leveraging remote work to take advantage of cost savings and improve startup&apos;s
              financial runway.
            </Typography>
            <Typography variant={'fs16'} color={colors.base.grey} mb="23px" component="h2">
              We unite individuals from all stages of software development, prioritizing the
              creation of a strong team and nurturing the growth of our engineers.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AboutUs;
