import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import ServicesBanner from '../molecules/Services/Banner';
import BizGrow from '../molecules/Services/BizGrow';
import OurServices from '../molecules/Services/OurServices';
import WorkProcess from '../molecules/Services/WorkProcess';

type Props = {
  children?: React.ReactNode;
};

const ServicesPage: React.FC<Props> = () => {
  React.useEffect(() => {
    const section = document.getElementById('services-offering');
  }, []);

  return (
    <MainTemplate>
      <ServicesBanner />
      <BizGrow />
      <OurServices />
      <WorkProcess />
    </MainTemplate>
  );
};

export default ServicesPage;
