import * as React from 'react';
import { BodyText, CardVertical, Container, SubTitle, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

import { BreakPoints, useBreakpoint } from '@/hooks';
import { Benefits } from '@/constants';
import { gray } from '@/styles/colors';

interface IOurBenefitsProps {}

export const OurBenefits: React.FunctionComponent<IOurBenefitsProps> = () => {
  const renderData = Benefits.map((item) => {
    return (
      <Grid item xs={12} md={4} key={item.id}>
        <Box
          borderRadius="8px"
          boxShadow="0px 10px 47px 0px #EFEFEF"
          p="20px"
          display="flex"
          flexDirection="column"
          gap="20px"
        ></Box>
      </Grid>
    );
  });

  const isTablet = useBreakpoint(BreakPoints.LG);

  return (
    <Box py={isTablet ? '40px' : '100px'} bgcolor={gray[50]}>
      <Container>
        <Box display="flex" flexDirection="column" rowGap="24px" maxWidth="668px" mb="64px">
          <SubTitle text="Our benefits" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Things are ready for you!" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="We prioritize our employees' well-being and professional growth. Enjoy competitive compensation, comprehensive benefits, and ongoing opportunities for learning and development. Join our team and experience the rewarding benefits of being a Spartan."
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </Box>
        <Grid container justifyContent="center" spacing={'24px'}>
          {renderData}
        </Grid>
      </Container>
    </Box>
  );
};
