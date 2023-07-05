import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { CaseStudies, CaseStudyBanner } from '../molecules';
import { GetInTouch } from '../atoms';

interface ICaseStudyProps {}

export const CaseStudy: React.FunctionComponent<ICaseStudyProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <CaseStudyBanner />
        <CaseStudies />
        <Box mb="44px">
          <GetInTouch
            title="Let Spartan transform your visions into reality"
            textButton="Meet our expert"
            linkButton="/contact-us#contact-form"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </Box>
      </Box>
    </MainTemplate>
  );
};
