import { Container, Title } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import ItemIcon from '@/assets/images/icons/tick-circle.svg';
import Image from 'next/image';
import { base, gray } from '@/styles/colors';
import PhoneImage from '@/assets/images/case-cf/result-image.svg';

const TheResult = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const TheResultData = [
    {
      id: 'we-do-1',
      title: 'Increased Stability',
      content:
        'By resolving critical bugs, we significantly reduced system outages, providing chargeFUZE and its users with a more stable platform.',
    },
    {
      id: 'we-do-2',
      title: 'Enhanced Performance',
      content:
        'We optimized the system`s performance, resulting in reduced latency, faster response times, and an overall smoother user experience',
    },
    {
      id: 'we-do-3',
      title: 'Improved Scalability',
      content:
        'Our enhancements empowered chargeFUZE to handle higher volumes of requests, ensuring seamless operations even during peak periods and accommodating increased user traffic',
    },
  ];
  const renderDataService = TheResultData.map((item) => {
    return (
      <Box
        key={item.id}
        display="flex"
        flexDirection="column"
        gap="4px"
        data-aos={isTablet ? 'fade-up' : 'fade-left'}
        data-aos-delay="200"
      >
        <Box display="flex" gap="24px">
          <Box
            sx={{
              background: base.darkBlue,
              height: '31px',
              minWidth: '31px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '1000px',
              marginRight: '24px',
              m: 0,
            }}
          >
            <Image src={ItemIcon} alt="icon" width={19} height={19} />
          </Box>
          <Box>
            <Typography
              variant="fs18"
              fontWeight={600}
              color={gray[700]}
              maxWidth="675px"
              component={'p'}
              mb={'10px'}
            >
              {item.title}
            </Typography>
            <Typography variant="fs18" color={gray[600]} component={'p'}>
              {item.content}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  });
  return (
    <Container>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Box width={{ md: '50%', xs: '100%' }}>
          <Title text="The Result" mb={'32px'} data-aos={'fade-up'} data-aos-delay="200" />
          <Typography mb={'44px'} data-aos={'fade-up'} data-aos-delay="300">
            Our efforts yielded significant results and tangible improvements for chargeFUZE
          </Typography>
          <Box display={'flex'} flexDirection={'column'} gap={'24px'}>
            {renderDataService}
          </Box>
        </Box>
        <Image
          src={PhoneImage}
          alt="phone"
          data-aos={'fade-left'}
          data-aos-delay="400"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
    </Container>
  );
};

export default TheResult;
