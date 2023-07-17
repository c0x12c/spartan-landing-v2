import { BodyText, Stacks, Title } from '@/components/atoms';
import { base, gray } from '@/styles/colors';
import { Container } from '@/components/atoms';
import { UrsaStacks } from '@/constants/case-ursa';
import React from 'react';
import { Box } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';

const TechnologyStack = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  return (
    <Box
      py={!isTablet ? '0' : '80px'}
      bgcolor={isTablet ? gray[100] : 'none'}
      mt={{ xs: '24px', md: 0 }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: '24px', lg: '16px' }}
          maxWidth="736px"
          mx="auto"
          mb={{ xs: '24px', lg: '40px' }}
        >
          <Title
            text="Technology Stack"
            data-aos="zoom-in"
            data-aos-delay="200"
            sx={{ color: base.black, textAlign: 'center' }}
          />
          <BodyText
            sx={{ textAlign: 'center', color: gray[700] }}
            text="At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency."
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </Box>
        <Stacks data={UrsaStacks} />
      </Container>
    </Box>
  );
};

export default TechnologyStack;
