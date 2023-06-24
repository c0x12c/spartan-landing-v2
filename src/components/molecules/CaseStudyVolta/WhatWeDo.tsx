import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Container from '@/components/atoms/Container';
import star from '@/assets/images/case-volta/star.svg';
import weDo from '@/assets/images/case-volta/we-do.png';
import AccordionItemWeDo from '@/components/atoms/AccordionItemWeDo';

interface IWhatWeDoProps {}

const WhatWeDo: React.FunctionComponent<IWhatWeDoProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dataWeDo = [
    {
      id: 'we-do-1',
      title: 'Defined requirements and architecture',
      content:
        'Defined the requirements by conducting meetings with Volta to understand their needs. Proposed a suitable architecture for the crypto wallet application, including the mobile applications (iOS and Android) and the backend platform.',
    },
    {
      id: 'we-do-2',
      title: 'Developed a solid backend and infrastructure for Volta Wallet',
      content:
        'Developed secure iOS and Android applications with top security measures. Implemented functionality for creating and backing up cryptocurrency wallets using encryption techniques. Built the AppClip and Instant App feature:',
    },
    {
      id: 'we-do-3',
      title: 'Implemented the appclip and Instant app feature for Volta Wallet.',
      content:
        'Enabled users to create a new account without installing the full app. Utilized during promotional campaigns, providing users with a free Skin NFT for their app. Built backend and infrastructure:',
    },
    {
      id: 'we-do-4',
      title: ' Developed a solid backend and infrastructure for Volta Wallet.',
      content:
        'Implemented a system that is easily monitored, maintained, and scalable. Used technologies like Kotlin, Go, Swift, JavaScript, TypeScript, HCL.',
    },
  ];

  const renderDataService = dataWeDo.map((item) => {
    return <AccordionItemWeDo key={item.id} {...item} />;
  });

  return (
    <Box my="44px">
      <Container>
        <Grid container alignItems="center" mb="85px">
          <Grid item lg={6} xs={12}>
            <Typography
              variant={matchesMobile ? 'fs30' : 'fs54'}
              color={colors.gray[800]}
              component="h2"
              textAlign={matchesDesktop ? 'right' : 'center'}
              mr="48px"
            >
              What we do
            </Typography>
          </Grid>

          <Grid
            item
            lg={6}
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
        <Grid container alignItems="center" rowGap="32px">
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Image src={weDo} alt="we-do" />
          </Grid>
          <Grid item xs={12} md={6}>
            {renderDataService}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
