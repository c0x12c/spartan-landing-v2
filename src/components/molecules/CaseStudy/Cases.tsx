import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useScroll } from 'framer-motion';
import Container from '@/components/atoms/Container';
import ScrollTitle from '@/components/atoms/ScrollTitle';
import Image from 'next/image';
import star from '@/assets/images/star.svg';
import Tag from '@/components/atoms/Tag';
import Projects from './Projects';

interface ICasesProps {}

const Cases: React.FunctionComponent<ICasesProps> = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dataTags = [
    { id: 'tag-1', name: 'NFT market' },
    { id: 'tag-2', name: 'NFT market' },
    { id: 'tag-3', name: 'NFT market' },
    { id: 'tag-4', name: 'NFT market' },
  ];

  const renderTags = dataTags.map((tag) => {
    return (
      <Tag
        key={tag.id}
        textTag={tag.name}
        sx={{ color: colors.primary[500], borderColor: colors.primary[500], padding: '10px 23px' }}
      />
    );
  });

  return (
    <Box my="44px">
      <Box ref={scrollRef}>
        <Container>
          <Box mb="32px">
            <ScrollTitle
              scrollYProgress={scrollYProgress}
              scrollRef={scrollRef}
              title={'Case study'}
            />
          </Box>
          <Box mb={'32px'}>
            <Grid container mb="32px">
              {matchesDesktop && (
                <Grid item lg={6.5} xs={12}>
                  <Typography
                    variant={matchesMobile ? 'fs30' : 'fs54'}
                    color={colors.gray[800]}
                    mb="32px"
                    component="h2"
                  >
                    Elevate Your Startup&apos;s Journey
                  </Typography>
                </Grid>
              )}

              {!matchesDesktop && (
                <Grid item lg={6.5} xs={12}>
                  <Typography
                    variant={matchesMobile ? 'fs30' : 'fs54'}
                    color={colors.gray[800]}
                    component="h2"
                  >
                    Elevate Your Startup&apos;s
                  </Typography>
                </Grid>
              )}
              {!matchesDesktop && (
                <Grid item xs={4}>
                  <Typography
                    variant={matchesMobile ? 'fs30' : 'fs54'}
                    color={colors.gray[800]}
                    mb="32px"
                    component="h2"
                  >
                    Journey
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
                  <Divider
                    sx={{ bgcolor: colors.gray[300], width: 'calc(100% - 100px)', height: '1px' }}
                  />
                  <Image src={star} alt="star" />
                </Box>
              </Grid>
            </Grid>
            <Typography
              variant="fs16"
              letterSpacing="0.01em"
              color={colors.gray[500]}
              component="p"
              maxWidth="640px"
            >
              Share your concerns with us, and we are here to provide you with the best solutions
              from top-notch engineers around the world.
            </Typography>
          </Box>
          <Box mb="36px" display="flex" flexWrap="wrap" gap="10px">
            {renderTags}
          </Box>
        </Container>
      </Box>
      <Container>
        <Projects />
      </Container>
    </Box>
  );
};

export default Cases;
