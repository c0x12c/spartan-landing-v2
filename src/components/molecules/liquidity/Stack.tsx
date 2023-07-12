import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { GeneraLiquiditylStack, LiquidityStack } from '@/constants/case-liquidity';
import { base, gray } from '@/styles/colors';
import { Container, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ILiquidityTechStacksProps {}

const LiquidityTechStacks: React.FunctionComponent<ILiquidityTechStacksProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderStacks = LiquidityStack.map((tech, index) => {
    return (
      <Grid
        item
        key={tech.id}
        xs={6}
        sm={4}
        md={3}
        lg={2}
        data-aos="fade-left"
        data-aos-delay={String(index) + '00'}
      >
        <Box
          height={'100%'}
          borderRadius="6px"
          p={'20px'}
          bgcolor={base.white}
          display={'flex'}
          gap={'14px'}
          flexDirection={'column'}
          justifyContent={tech.name ? 'space-between' : 'center'}
          alignItems={'center'}
          sx={{
            ':hover': {
              transitionProperty: 'background-color',
              transitionDuration: '0.3s',
              transitionTimingFunction: 'ease-in-out',
              backgroundColor: gray[15],
            },
          }}
        >
          <Image
            src={tech.imgSrc}
            alt={tech.name ? tech.name : tech.id}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {tech.name && (
            <Typography variant="fs14" color={gray[900]} component={'p'}>
              {tech.name}
            </Typography>
          )}
        </Box>
      </Grid>
    );
  });

  const generalStack = GeneraLiquiditylStack.map((general, index) => {
    return (
      <Box
        width={`calc((100% - (12px * ${GeneraLiquiditylStack.length - 1})) / ${
          GeneraLiquiditylStack.length
        })`}
        data-aos="fade-left"
        data-aos-delay={String(index) + '00'}
        minWidth={'max-content'}
        key={general.id}
        borderRadius={'100px'}
        p={'14px 10px'}
        m={'0'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        bgcolor={base.white}
        sx={{
          ':hover': {
            transitionProperty: 'background-color',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease-in-out',
            backgroundColor: gray[15],
          },
        }}
      >
        <Typography variant="fs14" fontWeight={500} color={base.black}>
          {general.name}
        </Typography>
      </Box>
    );
  });

  return (
    <Box py={!isTablet ? '140px' : '60px'} bgcolor={gray[100]}>
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
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables us
            to deliver innovative solutions and drive operational efficiency.
          </Typography>
          <Box
            width={'100%'}
            display={'flex'}
            gap={'12px'}
            sx={{ flexWrap: { lg: 'nowrap', xs: 'wrap' }, justifyContent: 'center' }}
            m={0}
          >
            {generalStack}
          </Box>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {renderStacks}
        </Grid>
      </Container>
    </Box>
  );
};

export default LiquidityTechStacks;
