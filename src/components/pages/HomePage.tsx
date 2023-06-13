import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import MainTemplate from '../templates/MainTemplate';
import GlobalImpact from '../molecules/GlobalImpact';
import ClientWithSpartans from '../molecules/ClientWithSpartans';

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
        <ClientWithSpartans />
      </Box>
    </MainTemplate>
  );
};

export default HomePage;
