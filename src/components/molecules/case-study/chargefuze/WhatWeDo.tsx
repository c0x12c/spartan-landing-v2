import { Container, Title } from '@/components/atoms';
import { Divider, Box } from '@mui/material';
import React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Star from '@/assets/images/case-cf/Star-blue.svg';
import Image from 'next/image';
import WhatWeDoImage from '@/assets/images/case-cf/what-we-do-image.svg';
import { gray } from '@/styles/colors';
import CaseStudyItem, { Variant } from '@/components/atoms/CaseCtudyItems';
import checked from '@/assets/images/case-cf/checked-blue.svg';

const WhatWeDo = () => {
  const isMD = useBreakpoint(BreakPoints.MD);
  const items = [
    "Conducted a thorough assessment of the system's state upon project transfer.",
    'Swiftly identified numerous bugs that were causing frequent outages.',
    'Meticulously addressed and resolved the identified bugs.',
    'Utilized rigorous testing methodologies and thorough debugging processes.',
    'Restored stability and reliability to the system.',
  ];

  return (
    <Container>
      <Box py={{ xs: 0, lg: '80px' }}>
        <Box display="flex" alignItems="center" maxWidth="100%" gap={'48px'}>
          <Title
            text=" What we do"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              minWidth: 'max-content',
              mt: { xs: 0, lg: '24px' },
              mb: '24px',
              mx: { xs: 'auto', lg: '0' },
            }}
          />
          {!isMD && (
            <Box
              display="flex"
              gap="8px"
              alignItems="center"
              data-aos="fade-left"
              data-aos-delay="200"
              width="100%"
            >
              <Box component={Divider} width="calc(100% - 77px)" height="1px" bgcolor={gray[300]} />
              <Image src={Star} alt="blue star" />
            </Box>
          )}
        </Box>
        <Box
          display="flex"
          gap={{ md: '50px', xs: 0 }}
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          alignItems={'center'}
        >
          <Image
            src={WhatWeDoImage}
            alt="mobile phone chargefuze"
            style={{ maxWidth: '100%', height: 'auto' }}
            data-aos="fade-right"
            data-aos-delay="200"
          />
          <Box width="100%" display={'flex'} flexDirection={'column'} gap={'24px'}>
            {items.map((item, index) => (
              <CaseStudyItem variant={Variant.NO_TITLE} key={index} content={item} icon={checked} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatWeDo;
