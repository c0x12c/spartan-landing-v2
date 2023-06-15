import * as React from 'react';
import MainTemplate from '../templates/MainTemplate';
import AboutUs from '../molecules/AboutUs';

interface IAboutUsPageProps {}

const AboutUsPage: React.FunctionComponent<IAboutUsPageProps> = (props) => {
  return (
    <MainTemplate>
      <AboutUs />
    </MainTemplate>
  );
};

export default AboutUsPage;
