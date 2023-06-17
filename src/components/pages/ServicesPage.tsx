import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import ServicesBanner from '../molecules/Services/Banner';
import BizGrow from '../molecules/Services/BizGrow';
import OurServices from '../molecules/Services/OurServices';

type Props = {
  children?: React.ReactNode;
};

const ServicesPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <ServicesBanner />
      <BizGrow />
      <OurServices />
    </MainTemplate>
  );
};

export default ServicesPage;
