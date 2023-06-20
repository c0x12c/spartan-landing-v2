import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CaseStudyVoltaBanner from '../molecules/CaseStudyVolta/Banner';

type Props = {
  children?: React.ReactNode;
};

const CaseStudyPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <CaseStudyVoltaBanner />
    </MainTemplate>
  );
};

export default CaseStudyPage;
