import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { LiquidityStack } from '@/constants/case-liquidity';
import { gray } from '@/styles/colors';
import { Container, Stacks, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ILiquidityTechStacksProps {}

const LiquidityTechStacks: React.FunctionComponent<ILiquidityTechStacksProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  return (
    <Box py={!isTablet ? '100px' : '80px'} bgcolor={gray[100]}>
      <Container>
        <Box maxWidth={'730px'} m={'0 auto'} mb={'40px'}>
          <Title
            text="Technology Stack"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              mb: '16px',
              textAlign: 'center',
            }}
          />
          <Typography
            variant="fs18"
            textAlign={'center'}
            component={'p'}
            mb={'40px'}
            fontSize={{ xs: '14px', lg: '18px' }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency.
          </Typography>
        </Box>
        <Stacks data={LiquidityStack} />
      </Container>
    </Box>
  );
};

export default LiquidityTechStacks;
