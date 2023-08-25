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

  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box
      py={isMobile ? '40px' : '100px'}
      sx={{
        background: 'black',
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap={isMobile ? '12px' : '24px'}
          maxWidth="668px"
          mb={isMobile ? '24px' : '64px'}
        >
          <SubTitle
            text="Our services"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ color: 'white' }}
          />
          <Title
            text="What services do we offer?"
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ color: 'white' }}
          />
          <BodyText
            text="Spartans is renowned for its affordable, reliable, and expert IT consulting services. We provide top-of-the-line technologies, software, and applications that help startups and enterprises gain a competitive edge in the market."
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{
              mt: isMobile ? '12px' : 0,
              color: 'white',
            }}
          />
        </Box>
        <Grid container justifyContent="center" spacing={isMobile ? '16px' : '32px'}>
          {renderData}
        </Grid>
      </Container>
    </Box>
  );
};
