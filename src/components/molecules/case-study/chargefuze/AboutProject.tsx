import React from 'react';
import OurWorkImage from '@/assets/images/case-cf/OurWork.svg';
import { Container, Title } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { base } from '@/styles/colors';

const AboutProject = () => {
  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'44px'}
        margin={'0 auto'}
        maxWidth={{ xs: '100%', md: '814px' }}
        alignItems={'center'}
      >
        <Box display={'flex'} flexDirection={'column'} gap={'12px'} alignItems={'center'}>
          <Title text="About project" data-aos="fade-up" data-aos-delay="200" />
          <Typography textAlign={'center'} data-aos="fade-up" data-aos-delay="300">
            ChargeFUZE offers a convenient and accessible solution for charging devices anytime,
            anywhere. With the largest network of mobile charging kiosks, ChargeFUZE empowers users
            to rent portable chargers on the go. Whether you&apos;re at a bustling event, traveling,
            or simply out and about, ChargeFUZE ensures that a reliable power source is always
            within reach.
          </Typography>
        </Box>
        <Image
          src={OurWorkImage}
          alt="ChargeFUZE on mobiles"
          style={{ paddingTop: '44px', maxWidth: '100%', height: 'auto' }}
          data-aos="zoom-in"
          data-aos-delay="300"
        />
        <Typography
          textAlign={'center'}
          sx={{ width: '100%' }}
          component={'p'}
          variant="fs40"
          fontSize={{ xs: '28px', md: '40px' }}
          color={base.black}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          &quot;Say goodbye to low battery anxiety with ChargeFUZE`s seamless and accessible
          charging solution&quot;
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutProject;
