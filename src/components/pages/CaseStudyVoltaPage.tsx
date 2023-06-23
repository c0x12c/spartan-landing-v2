import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import CaseStudyVoltaBanner from '../molecules/CaseStudyVolta/Banner';
import VoltaStory from '../molecules/CaseStudyVolta/Story';
import Top100Coins from '../molecules/CaseStudyVolta/Top100Coins';
import WhatWeDo from '../molecules/CaseStudyVolta/WhatWeDo';
import TechStack from '../molecules/CaseStudyVolta/TechStack';
import Result from '../molecules/CaseStudyVolta/Result';
import Download from '../molecules/CaseStudyVolta/Download';

type Props = {
  children?: React.ReactNode;
};

const CaseStudyPage: React.FC<Props> = () => {
  return (
    <MainTemplate>
      <CaseStudyVoltaBanner />
      <VoltaStory />
      <Top100Coins />
      <WhatWeDo />
      <TechStack />
      <Result />
      <Download />
    </MainTemplate>
  );
};

export default CaseStudyPage;
