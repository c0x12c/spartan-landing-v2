import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CaseStudyBanner from '../molecules/CaseStudy/Banner';
import Cases from '../molecules/CaseStudy/Cases';
import TransformingVisions from '../molecules/CaseStudy/TransformingVisions';

type Props = {
  children?: React.ReactNode;
};

const CaseStudyPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <CaseStudyBanner />
      <Cases />
      <TransformingVisions />
    </MainTemplate>
  );
};

export default CaseStudyPage;
