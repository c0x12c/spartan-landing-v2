import React from 'react';
import OurWorkImage from '@/assets/images/case-cf/OurWork.svg';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

const AboutProject = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Box py={{ xs: '40px', md: '80px' }}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={{ xs: 0, md: '44px' }}
          margin={'0 auto'}
          maxWidth={{ xs: '100%', md: '814px' }}
          alignItems={'center'}
        >
          <Box display={'flex'} flexDirection={'column'} gap={'32px'} alignItems={'center'}>
            <Title text="About the Project" data-aos="fade-up" data-aos-delay="200" />
            <BodyText
              text="chargeFUZE offers a convenient and accessible way to charge devices anytime, anywhere. With the largest network of mobile charging kiosks, chargeFUZE empowers users to rent portable chargers on the go. Whether you're at a bustling event, traveling, or simply out and about, chargeFUZE ensures that a reliable power source is always within reach."
              sx={{ textAlign: 'center', color: base.grey }}
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </Box>
          <Image
            src={OurWorkImage}
            alt="chargeFUZE on mobiles"
            style={{ paddingTop: isMobile ? '22px' : '44px', maxWidth: '100%', height: 'auto' }}
            data-aos="zoom-in"
            data-aos-delay="300"
          />
          <Typography
            textAlign={'center'}
            sx={{ width: '100%' }}
            component={'p'}
            variant="fs40"
            fontSize={{ xs: '20px', md: '40px' }}
            color={base.black}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            &quot;Say goodbye to low battery anxiety with chargeFUZE&apos;s seamless and accessible
            charging solution&quot;
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutProject;
