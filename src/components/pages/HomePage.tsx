import React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { gray } from '@/styles/colors';
// import GlobalImpact from '../molecules/Home/GlobalImpact';
// import ClientWithSpartans from '../molecules/Home/ClientWithSpartans';
// import ToBeSpartan from '../molecules/Home/ToBeSpartan';
// import WhoWeWorkWith from '../molecules/Home/WhoWeWorkWith';
// import WhyBusinessChooseUs from '../molecules/Home/WhyBusinessChooseUs';
// import ElevateStartup from '../molecules/Home/ElevateStartup';
// import OurServices from '../molecules/Home/OurServices';
// import HeroBanner from '../molecules/Home/Banner';

type Props = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <Box bgcolor={gray[800]} height="500px"></Box>
      {/* <HeroBanner />
        <OurServices />
        <ElevateStartup />
        <WhoWeWorkWith />
        <WhyBusinessChooseUs />
        <GlobalImpact />
        <ClientWithSpartans />
        <ToBeSpartan /> */}
    </MainTemplate>
  );
};
