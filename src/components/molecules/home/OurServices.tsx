import * as React from 'react';
import { BodyText, CardVertical, Container, SubTitle, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

import { BreakPoints, useBreakpoint } from '@/hooks';
import { Services } from '@/constants';

interface IOurServicesProps {}

export const OurServices: React.FunctionComponent<IOurServicesProps> = () => {
  const renderData = Services.slice(0, 5).map((item) => {
    return (
      <Grid item xs={12} md={4} key={item.id}>
        <CardVertical
          title={item.label}
          description={item.content}
          icon={<Image src={item.icon} alt={item.label} />}
          link={item.href}
          data-aos="fade-up"
          data-aos-delay={`${200}`}
        />
      </Grid>
    );
  });

  const isTablet = useBreakpoint(BreakPoints.LG);

  return (
    <Box
      py={isTablet ? '40px' : '100px'}
      sx={{
        background:
          'linear-gradient(180deg, #FFF 0%, rgba(226, 233, 255, 0.74) 51.57%, rgba(236, 236, 251, 0.48) 86.96%, rgba(255, 255, 255, 0.00) 100%)',
      }}
    >
      <Container>
        <Box display="flex" flexDirection="column" rowGap="24px" maxWidth="668px" mb="64px">
          <SubTitle text="Our services" data-aos="fade-up" data-aos-delay="200" />
          <Title text="What services we offer" data-aos="fade-up" data-aos-delay="300" />
          <BodyText
            text="Spartans is renowned for its affordable, reliable, and expert IT consulting services. We
            provide top-of-the-line technologies, software, and applications that help enterprises
            gain a competitive edge in the market."
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </Box>
        <Grid container justifyContent="center" spacing={'32px'}>
          {renderData}
        </Grid>
      </Container>
    </Box>
  );
};
