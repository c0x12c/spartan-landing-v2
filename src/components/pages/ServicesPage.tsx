/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import ServicesBanner from '../molecules/Services/Banner';
import BizGrow from '../molecules/Services/BizGrow';
import OurServices from '../molecules/Services/OurServices';
import WorkProcess from '../molecules/Services/WorkProcess';
import OurStack from '../molecules/Services/OurStack';
import ServiceCaseStudy from '../molecules/Services/CaseStudy';
import ServiceTransform from '../atoms/ServiceTransform';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
};

const ServicesPage: React.FC<Props> = () => {
  const { asPath, pathname } = useRouter();
  const [isRendered, setRendered] = React.useState(false);
  React.useEffect(() => {
    setRendered(true);
  }, []);
  React.useEffect(() => {
    if (isRendered) {
      const hash = asPath.split('#')[1];
      const elm = document.getElementById(hash);
      if (elm) {
        elm?.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [isRendered, pathname]);

  return (
    <MainTemplate>
      <ServicesBanner />
      <BizGrow />
      <OurServices />
      <WorkProcess />
      <OurStack />
      <ServiceCaseStudy />
      <ServiceTransform />
    </MainTemplate>
  );
};

export default ServicesPage;
