import * as React from 'react';
import { BodyText, Container, SubTitle, Title } from '@/components/atoms';
import { PartnerType } from '@/constants';
import { gray } from '@/styles/colors';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Partners as PartnersData } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IPartnersProps {}

export const Partners: React.FunctionComponent<IPartnersProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderBiz = (data: PartnerType[], position: string) => {
    return data.map((item) => {
      return (
        <Grid key={item.id} item xs={4} md={position === 'first' ? 3 : 2} textAlign="center">
          <Link href={item.href}>
            <Image src={item.imgSrc} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
          </Link>
        </Grid>
      );
    });
  };

  return (
    <Box py={isMobile ? '40px' : '120px'} bgcolor={gray[50]}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap={isMobile ? '12px' : '24px'}
          maxWidth="836px"
          mx="auto"
          alignItems="center"
          textAlign="center"
          mb={isMobile ? '44px' : '64px'}
        >
          <SubTitle text="Who we work with" data-aos="fade-up" data-aos-delay="200" />
          <Title
            text="Embracing fully remote engineers for your business's success"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <BodyText
            text="Our clients include startups, established businesses, and enterprises who trust us to deliver exceptional engineering solutions for their products and projects. Join these successful companies who have trusted Spartan to enable their success."
            data-aos="fade-up"
            data-aos-delay="500"
            sx={{
              maxWidth: '700px',
              mt: isMobile ? '12px' : 0,
            }}
          />
        </Box>
        <Grid
          container
          columnSpacing={isMobile ? '28px' : '62px'}
          rowSpacing={isMobile ? '20px' : '44px'}
          alignItems="center"
          justifyContent="center"
        >
          {renderBiz(PartnersData.slice(0, 3), 'first')}
          {renderBiz(PartnersData.slice(3), 'second')}
        </Grid>
      </Container>
    </Box>
  );
};
