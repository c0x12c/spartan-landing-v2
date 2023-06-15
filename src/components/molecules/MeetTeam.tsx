import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useScroll } from 'framer-motion';
import Container from '../atoms/Container';
import ScrollTitle from '../atoms/ScrollTitle';
import Image from 'next/image';
import star from '@/assets/images/star.svg';

interface IMeetTeamProps {}

const MeetTeam: React.FunctionComponent<IMeetTeamProps> = (props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box my="44px" ref={scrollRef}>
      <Container>
        <Box>
          <ScrollTitle
            scrollYProgress={scrollYProgress}
            scrollRef={scrollRef}
            title={'Meet our team'}
          />
        </Box>
        <Box
          py={{
            lg: '100px',
            xs: '44px',
          }}
        >
          <Grid container>
            {matchesDesktop && (
              <Grid item lg={6.5} xs={12}>
                <Typography
                  variant={matchesMobile ? 'fs30' : 'fs54'}
                  color={colors.gray[800]}
                  mb="32px"
                  component="h2"
                >
                  Our Elite Founding Team of Engineers
                </Typography>
              </Grid>
            )}

            <Grid
              item
              lg={5.5}
              xs={8}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" justifyContent="flex-start">
                {matchesDesktop && (
                  <Divider sx={{ bgcolor: colors.gray[300], width: '100%', height: '1px' }} />
                )}
                {matchesDesktop && <Image src={star} alt="star" />}
              </Box>
            </Grid>
          </Grid>
          <Typography variant="fs16" color={colors.gray[500]} component="p" maxWidth="640px">
            With a diverse range of expertise and a shared passion for innovation, we work together
            seamlessly to bring your ideas to life. Join us on this journey of success and let our
            team be your catalyst for growth.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MeetTeam;
