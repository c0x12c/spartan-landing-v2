import * as React from 'react';
import MainTemplate from '../templates/MainTemplate';
import { Box } from '@mui/material';
import AboutUs from '../molecules/AboutUs/AboutUs';
import StandOut from '../molecules/AboutUs/StandOut';
import WhyChooseSpartans from '../molecules/AboutUs/WhyChooseSpartans';
import MeetTeam from '../molecules/AboutUs/MeetTeam';
import EngineerPower from '../molecules/AboutUs/EngineerPower';

interface IAboutUsPageProps {}

const AboutUsPage: React.FunctionComponent<IAboutUsPageProps> = (props) => {
  return (
    <MainTemplate>
      <Box
        sx={{
          background:
            'linear-gradient(180deg, #FFFFFF 8.48%, rgba(222, 229, 255, 0.739633) 49.33%, rgba(255, 255, 255, 0) 100%);',
        }}
        mb="42px"
      >
        <AboutUs />
        <StandOut />
      </Box>
      <WhyChooseSpartans />
      <MeetTeam />
      <EngineerPower />
    </MainTemplate>
  );
};

export default AboutUsPage;