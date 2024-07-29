import { Stack, Typography } from '@mui/material';
import React from 'react';
import { ServiceCard } from '..';
import ai_icon from '@/assets/images/services/new/ai-icon.png';
import web_icon from '@/assets/images/services/new/web-icon.png';
import be_icon from '@/assets/images/services/new/be-icon.png';
import cloud_service_icon from '@/assets/images/services/new/cloud-service-icon.png';
import cloud_solution_icon from '@/assets/images/services/new/cloud-solution-icon.png';
import { StaticImageData } from 'next/image';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';

export type TService = {
  imgSrc: StaticImageData;
  title: string;
  desc: string;
};

const services = [
  {
    imgSrc: ai_icon,
    title: 'AI Development',
    desc: 'Our experts offer modern LLM development and NLP technologies to help your business succeed with artificial intelligence',
  },
  {
    imgSrc: web_icon,
    title: 'Web and Mobile App Development',
    desc: 'Crafting custom web and app experiences tailored to your business needs.',
  },
  {
    imgSrc: be_icon,
    title: 'Backend Development',
    desc: 'Building the core engines for your products with our efficient backend development services.',
  },
  {
    imgSrc: cloud_solution_icon,
    title: 'Cloud Solutions',
    desc: 'Elevate your business to the cloud for enhanced flexibility, security, and scalability.',
  },
  {
    imgSrc: cloud_service_icon,
    title: 'Integration Services',
    desc: 'Seamlessly connecting disparate systems with custom integration services for streamlined operations.',
  },
];

export const OurServicesV2 = () => {
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();
  return (
    <Grid2
      container
      bgcolor={'white'}
      paddingX={{ xs: 2, lg: 4 }}
      paddingY={6}
      spacing={2}
      maxWidth={1440}
      margin={'auto'}
    >
      <Grid2 py={5} data-aos="fade-up" data-aos-delay="200" xs={12} sm={6} md={6} xl={4}>
        <Stack maxWidth={{ xs: 'unset', sm: '270px' }}>
          <Typography
            variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
            fontWeight={500}
            color={'black'}
          >
            Our{' '}
            <Typography
              variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
              fontWeight={300}
              color={'black'}
              fontStyle={'italic'}
            >
              Services
            </Typography>
          </Typography>
        </Stack>
      </Grid2>
      {services.map((service) => {
        return (
          <Grid2 key={service.title} xs={12} sm={6} md={6} xl={4}>
            <ServiceCard data={service} data-aos="flip-up" data-aos-delay={200} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};
