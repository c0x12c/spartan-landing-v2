import * as React from 'react';
import { Box } from '@mui/material';
import { BodyText, Container, Stacks, SubTitle, Title } from '@/components/atoms';
import { Fields } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ITechStacksProps {}

export const TechStacks: React.FunctionComponent<ITechStacksProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '120px'}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems="center"
          gap={'24px'}
          mb={isMobile ? '24px' : '64px'}
          maxWidth={800}
          mx="auto"
          textAlign="center"
        >
          <SubTitle text="Our services" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Technology Stack" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency. Our tech stack is
            constantly evolving, staying up to date with the latest industry trends and best
            practices."
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </Box>
        <Stacks data={Fields} />
      </Container>
    </Box>
  );
};
