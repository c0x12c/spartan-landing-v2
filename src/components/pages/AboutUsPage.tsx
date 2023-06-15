import * as React from 'react';
import MainTemplate from '../templates/MainTemplate';
import { Box } from '@mui/material';
import AboutUs from '../molecules/AboutUs';
import StandOut from '../molecules/StandOut';

interface IAboutUsPageProps {}

const AboutUsPage: React.FunctionComponent<IAboutUsPageProps> = (props) => {
  return (
    <MainTemplate>
      <Box
        sx={{
          background:
            'linear-gradient(180deg, #FFFFFF 8.48%, rgba(222, 229, 255, 0.739633) 49.33%, rgba(255, 255, 255, 0) 100%);',
        }}
      >
        <AboutUs />
        <StandOut />
      </Box>
    </MainTemplate>
  );
};

export default AboutUsPage;
