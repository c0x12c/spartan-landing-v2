import * as React from 'react';
import { Box } from '@mui/material';
import { VoltaStacks } from '@/constants';
import { base, gray } from '@/styles/colors';
import { BodyText, Container, Stacks, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
interface IVoltaTechStacksProps {}

export const VoltaTechStacks: React.FunctionComponent<IVoltaTechStacksProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  return (
    <Box py={!isTablet ? '100px' : '80px'} bgcolor={gray[100]}>
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
            sx={{ textAlign: 'center' }}
            text="At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency."
            data-aos="zoom-in"
            data-aos-delay="300"
          />
        </Box>
        <Stacks data={VoltaStacks} />
      </Container>
    </Box>
  );
};
