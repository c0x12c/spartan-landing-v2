import * as React from 'react';
import { gray } from '@/styles/colors';
import { Box, Grid } from '@mui/material';
import { Container, SubTitle, Title } from '@/components/atoms';
import { Services } from '@/constants/services';
import { CardService } from '@/components/atoms';
import Image from 'next/image';
import bgTechStack from '@/assets/images/services/tech-stack.png';

interface IServicesOfferProps {}

export const ServicesOffer: React.FunctionComponent<IServicesOfferProps> = () => {
  const renderFirstPart = Services.slice(0, 2).map((item) => {
    return (
      <Grid item xs={12} md={6} lg={4} key={item.id}>
        <CardService title={item.label} serviceDetail={item.detail} />
      </Grid>
    );
  });
  const renderSecondPart = Services.slice(2, 5).map((item) => {
    return (
      <Grid item xs={12} md={6} lg={4} key={item.id}>
        <CardService title={item.label} serviceDetail={item.detail} />
      </Grid>
    );
  });

  return (
    <Box bgcolor={gray[50]} py="100px">
      <Container>
        <Box display={'flex'} flexDirection={'column'} alignItems="center" gap={'24px'} mb={'64px'}>
          <SubTitle text="Our services" data-aos="fade-up" data-aos-delay="200" />
          <Title text="What services we offer" data-aos="fade-up" data-aos-delay="300" />
        </Box>
        <Grid container columnSpacing="21px" rowSpacing="25px">
          {renderFirstPart}
          <Grid item xs={12} md={6} lg={4}>
            <Image src={bgTechStack} alt="bgTechStack" />
          </Grid>
          {renderSecondPart}
        </Grid>
      </Container>
    </Box>
  );
};
