import * as React from 'react';
import { Container, SubTitle, Title } from '@/components/atoms';
import { PartnerType } from '@/constants';
import { gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Partners as PartnersData } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IPartnersProps {}

export const Partners: React.FunctionComponent<IPartnersProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);

  const renderBiz = (data: PartnerType[]) => {
    return data.map((item) => {
      return (
        <Link key={item.id} href={item.href}>
          <Image src={item.imgSrc} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
        </Link>
      );
    });
  };

  return (
    <Box py={isTablet ? '60px' : '120px'}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          rowGap="24px"
          maxWidth="806px"
          mx="auto"
          alignItems="center"
          textAlign="center"
        >
          <SubTitle text="Who we work with" data-aos="fade-up" data-aos-delay="200" />
          <Title
            text="Embracing full remote Engineers for your business success"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Typography variant="fs16" color={gray[500]} data-aos="fade-up" data-aos-delay="500">
            Our clients include startups, established businesses, and enterprises who trust us to
            deliver top-notch engineering solutions for their products and projects. Join these
            successful companies who have trusted Spartan to enable their success
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap="44px"
          mt="64px"
        >
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
            columnGap="61px"
            rowGap="32px"
          >
            {renderBiz(PartnersData.slice(0, 3))}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
            columnGap="61px"
            rowGap="32px"
          >
            {renderBiz(PartnersData.slice(3))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
