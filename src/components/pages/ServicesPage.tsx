import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import ServicesBanner from '../molecules/Services/Banner';
import BizGrow from '../molecules/Services/BizGrow';
import OurServices from '../molecules/Services/OurServices';
import WorkProcess from '../molecules/Services/WorkProcess';
import OurStack from '../molecules/Services/OurStack';
import ServiceCaseStudy from '../molecules/Services/CaseStudy';

type Props = {
  children?: React.ReactNode;
};

const ServicesPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <ServicesBanner />
      <BizGrow />
      <OurServices />
      <WorkProcess />
      <OurStack />
      <ServiceCaseStudy />
    </MainTemplate>
  );
};

export default ServicesPage;
