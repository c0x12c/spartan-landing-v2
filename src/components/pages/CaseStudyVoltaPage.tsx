import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CaseStudyVoltaBanner from '../molecules/CaseStudyVolta/Banner';
import VoltaStory from '../molecules/CaseStudyVolta/Story';

type Props = {
  children?: React.ReactNode;
};

const CaseStudyPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <CaseStudyVoltaBanner />
      <VoltaStory />
    </MainTemplate>
  );
};

export default CaseStudyPage;
