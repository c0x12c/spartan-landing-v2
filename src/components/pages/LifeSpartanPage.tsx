import * as React from 'react';
import { MainTemplate } from '../templates';
import {
  LifeSpartanBanner,
  LifeSpartanFeatures,
  LifeSpartanSentence,
  OurBenefits,
  TeamEngineers,
} from '../molecules';
import { Box } from '@mui/material';
import { GetInTouch } from '../atoms';

interface ILifeSpartanPageProps {}

export const LifeSpartanPage: React.FunctionComponent<ILifeSpartanPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <LifeSpartanBanner />
        <LifeSpartanSentence />
        <OurBenefits />
        <LifeSpartanFeatures />
        <TeamEngineers />
        <GetInTouch
          title="Being the next Spartan"
          textButton="Being next spartan"
          linkButton="/apply-job"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </Box>
    </MainTemplate>
  );
};
