import SpartanHelmetSection from '@/components/atoms/SpartanHelmetSection';
import * as React from 'react';
interface ITransformingVisionsProps {}

const TransformingVisions: React.FunctionComponent<ITransformingVisionsProps> = (props) => {
  return (
    <SpartanHelmetSection
      firstText="Let Spartan"
      secondText="transforming Visions into Reality."
      textButton="Meet our expert"
    />
  );
};

export default TransformingVisions;