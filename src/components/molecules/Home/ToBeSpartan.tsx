import SpartanHelmetSection from '@/components/atoms/SpartanHelmetSection';
import * as React from 'react';
interface IToBeSpartanProps {}

const ToBeSpartan: React.FunctionComponent<IToBeSpartanProps> = () => {
  return (
    <SpartanHelmetSection
      firstText="Interested in"
      secondText="knowing more about Spartan?"
      contentText="Become Next Spartan?"
      textButton="Being next spartan"
    />
  );
};

export default ToBeSpartan;
