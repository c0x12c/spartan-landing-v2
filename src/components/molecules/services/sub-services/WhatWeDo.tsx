import * as React from 'react';
import { BodyText, Container, SubTitle, Title } from '@/components/atoms';
import { ServiceWeDoContent, ServicesEnum } from '@/constants';
import { base, primary } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IWhatWeDoProps {
  tag: ServicesEnum;
}

export const WhatWeDo: React.FunctionComponent<IWhatWeDoProps> = ({ tag }) => {
  const { title, description, content } = ServiceWeDoContent.filter((item) => item.type === tag)[0];
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderContent = content.map((item) => {
    return (
      <Box
        key={item.id}
        p={isMobile ? '16px' : '24px 32px'}
        display="flex"
        flexDirection="column"
        gap="14px"
        borderRadius="8px"
        bgcolor={base.white}
        data-aos="fade-up"
        data-aos-delay="200"
        maxWidth={isMobile ? '305px' : '372px'}
        minHeight={isMobile ? '290px' : '392px'}
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
        <BodyText text={item.description} sx={{ textAlign: 'center' }} />
      </Box>
    );
  });

  return (
    <Box py={isMobile ? '40px' : '120px'}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap={isMobile ? '12px' : '24px'}
          maxWidth="806px"
          mx="auto"
          alignItems="center"
          textAlign="center"
        >
          <SubTitle text="What we do" data-aos="fade-up" data-aos-delay="200" />
          <Title text={title} data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text={description}
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ mt: isMobile ? '12px' : 0 }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor={base.blue}
          mt={isMobile ? '65px' : '128px'}
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
