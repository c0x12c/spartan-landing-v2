import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CaseStudyBanner from '../molecules/CaseStudy/Banner';

type Props = {
  children?: React.ReactNode;
};

const CaseStudyPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <CaseStudyBanner />
    </MainTemplate>
  );
};

export default CaseStudyPage;
