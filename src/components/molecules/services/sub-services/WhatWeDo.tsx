import * as React from 'react';
import { Container, SubTitle, Title } from '@/components/atoms';
import { ServiceWeDoContent, ServicesEnum } from '@/constants';
import { base, gray, primary } from '@/styles/colors';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IWhatWeDoProps {
  tag: ServicesEnum;
}

export const WhatWeDo: React.FunctionComponent<IWhatWeDoProps> = ({ tag }) => {
  const { title, description, content } = ServiceWeDoContent.filter((item) => item.type === tag)[0];
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderContent = content.map((item) => {
    return (
      <Box
        key={item.id}
        p="24px 32px"
        display="flex"
        flexDirection="column"
        gap="14px"
        borderRadius="8px"
        bgcolor={base.white}
        data-aos="fade-up"
        data-aos-delay="200"
        maxWidth="372px"
        minHeight="392px"
      >
        <Box display="flex" flexDirection="column" gap="20px" alignItems="center">
          <Box
            width="84px"
            height="84px"
            borderRadius="50%"
            bgcolor="#FBFEFE"
            sx={{
              filter: 'drop-shadow(0px 10px 47px #EFEFEF)',
            }}
          >
            <Image src={item.icon} alt={item.title} />
          </Box>
          <Typography variant="fs24" sx={{ color: primary[400] }} textAlign="center" component="h3">
            {item.title}
          </Typography>
        </Box>
        <Typography variant="fs18" color={gray[600]} textAlign="center" component="p">
          {item.description}
        </Typography>
      </Box>
    );
  });

  return (
    <Box py={isTablet ? '60px' : '120px'}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap="24px"
          maxWidth="806px"
          mx="auto"
          alignItems="center"
          textAlign="center"
        >
          <SubTitle text="Who we do" data-aos="fade-up" data-aos-delay="200" />
          <Title text={title} data-aos="fade-up" data-aos-delay="300" />
          <Typography variant="fs18" color={gray[600]} data-aos="fade-up" data-aos-delay="500">
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap="44px"
          bgcolor={base.blue}
          mt="128px"
          p="0 16px 50px"
        >
          <Box gap="24px" display="flex" flexWrap="wrap" justifyContent="center" mt="-50px">
            {renderContent}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
