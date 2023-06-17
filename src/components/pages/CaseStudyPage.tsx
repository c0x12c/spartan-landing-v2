import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CaseStudyBanner from '../molecules/CaseStudy/Banner';
import Cases from '../molecules/CaseStudy/Cases';

type Props = {
  children?: React.ReactNode;
};

const CaseStudyPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <CaseStudyBanner />
      <Cases />
    </MainTemplate>
  );
};

export default CaseStudyPage;
