import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { CFStackList } from '@/constants';
import { gray } from '@/styles/colors';
import { Container, Stacks } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
interface ICFTechStacksProps {}

const CFTechStacks: React.FunctionComponent<ICFTechStacksProps> = () => {
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
          <Typography
            variant="fs48"
            fontSize={{ xs: '28px', lg: '48px' }}
            color={gray[900]}
            component="h2"
            textAlign="center"
            data-aos={'zoom-in'}
            data-aos-delay="200"
          >
            Technology Stack
          </Typography>
          <Typography
            variant="fs18"
            fontSize={{ xs: '14px', lg: '18px' }}
            textAlign={'center'}
            data-aos={'zoom-in'}
            data-aos-delay="300"
          >
            At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency.
          </Typography>
        </Box>
        <Stacks data={CFStackList} />
      </Container>
    </Box>
  );
};

export default CFTechStacks;
