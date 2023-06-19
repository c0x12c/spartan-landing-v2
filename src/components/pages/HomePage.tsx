import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import MainTemplate from '../templates/MainTemplate';
import GlobalImpact from '../molecules/Home/GlobalImpact';
import ClientWithSpartans from '../molecules/Home/ClientWithSpartans';
import ToBeSpartan from '../molecules/Home/ToBeSpartan';
import WhoWeWorkWith from '../molecules/Home/WhoWeWorkWith';
import WhyBusinessChooseUs from '../molecules/Home/WhyBusinessChooseUs';
import ElevateStartup from '../molecules/Home/ElevateStartup';
import OurServices from '../molecules/Home/OurServices';
import Hero from '../molecules/Hero';

type Props = {
  children?: React.ReactNode;
};

const HomePage: React.FC<Props> = () => {
  const sxMain: SxProps<Theme> = {
    position: 'relative',
  };

  return (
    <MainTemplate>
      <Box sx={sxMain}>
        <Hero />
        <OurServices />
        <ElevateStartup />
        <WhoWeWorkWith />
        <WhyBusinessChooseUs />
        <GlobalImpact />
        <ClientWithSpartans />
        <ToBeSpartan />
      </Box>
    </MainTemplate>
  );
};

export default HomePage;
