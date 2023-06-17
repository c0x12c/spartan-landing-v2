import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import ServicesBanner from '../molecules/Services/Banner';

type Props = {
  children?: React.ReactNode;
};

const ServicesPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <ServicesBanner />
    </MainTemplate>
  );
};

export default ServicesPage;
