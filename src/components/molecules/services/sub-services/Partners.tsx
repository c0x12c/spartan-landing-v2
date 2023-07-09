import * as React from 'react';
import { Container, SubTitle, Title } from '@/components/atoms';
import { PartnerType, ServicesEnum } from '@/constants';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Partners as PartnersData } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';

interface IPartnersSubServiceProps {
  tag: ServicesEnum;
}

export const PartnersSubService: React.FunctionComponent<IPartnersSubServiceProps> = ({ tag }) => {
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
    <Box py={isTablet ? '60px' : '120px'} bgcolor={gray[50]}>
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
          <SubTitle text="Project we work with" data-aos="fade-up" data-aos-delay="200" />
          <Title text="The project we have built" data-aos="fade-up" data-aos-delay="300" />
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
            {renderBiz(PartnersData.filter((item) => item.tags.includes(tag)))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
