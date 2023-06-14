import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import MainTemplate from '../templates/MainTemplate';
import GlobalImpact from '../molecules/GlobalImpact';
import ClientWithSpartans from '../molecules/ClientWithSpartans';
import ToBeSpartan from '../molecules/ToBeSpartan';
import WhoWeWorkWith from '../molecules/WhoWeWorkWith';

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
        <GlobalImpact />
        <WhoWeWorkWith />
        <ClientWithSpartans />
        <ToBeSpartan />
      </Box>
    </MainTemplate>
  );
};

export default HomePage;
