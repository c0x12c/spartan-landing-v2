import { BodyText, Container, Title } from '@/components/atoms';
import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { base } from '@/styles/colors';
import PhoneImage from '@/assets/images/case-cf/result-image.webp';
import PhoneImageXS from '@/assets/images/case-cf/result-image-xs.webp';
import CaseStudyItem, { Variant } from '@/components/atoms/CaseCtudyItems';
import CheckedLG from '@/assets/images/case-cf/checked-blue-lg.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

const TheResult = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
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
  const renderDataService = TheResultData.map((item, index) => {
    return (
      <CaseStudyItem
        key={index}
        variant={Variant.PARAGRAPH}
        icon={CheckedLG}
        title={item.title}
        content={item.content}
      />
    );
  });
  return (
    <Container>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDirection={{ xs: 'column', md: 'row' }}
        py={{ xs: '40px', md: 0 }}
      >
        <Box width={{ md: '50%', xs: '100%' }}>
          <Title
            text="The Result"
            data-aos={'fade-up'}
            data-aos-delay="200"
            sx={{ mb: { xs: '24px', md: '32px' } }}
          />
          <BodyText
            text="Our efforts yielded significant results and tangible improvements for chargeFUZE"
            sx={{ mb: { xs: '24px', md: '44px' }, color: base.grey }}
            data-aos={'fade-up'}
            data-aos-delay="300"
          />
          <Box display={'flex'} flexDirection={'column'} gap={'24px'}>
            {renderDataService}
          </Box>
        </Box>
        <Image
          src={isMobile ? PhoneImageXS : PhoneImage}
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
