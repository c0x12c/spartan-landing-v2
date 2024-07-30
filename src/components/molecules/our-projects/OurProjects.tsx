import { BlockLayout } from '@/components/templates';
import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { Button, IconButton, Stack, Typography } from '@mui/material';

import React, { useRef } from 'react';
import liquidity_image from '@/assets/images/our-projects/liquidity.png';
import chargefuze_image from '@/assets/images/our-projects/chargefuze.png';
import foresight_image from '@/assets/images/our-projects/foresight.png';
import livecast_image from '@/assets/images/our-projects/livecast.png';
import puzzle_image from '@/assets/images/our-projects/puzzle.png';
import sidecar_image from '@/assets/images/our-projects/sidecar.png';
import ursalive_image from '@/assets/images/our-projects/ursalive.png';
import volta_image from '@/assets/images/our-projects/volta.png';
import agora_icon from '@/assets/images/our-projects/icons/agora.png';
import chargefuze_icon from '@/assets/images/our-projects/icons/chargefuze.png';
import foresight_icon from '@/assets/images/our-projects/icons/foresight.png';
import liquidity_icon from '@/assets/images/our-projects/icons/liquidity.png';
import puzzle_icon from '@/assets/images/our-projects/icons/puzzle.png';
import sidecar_icon from '@/assets/images/our-projects/icons/sidecar.png';
import ursa_icon from '@/assets/images/our-projects/icons/ursa.png';
import volta_icon from '@/assets/images/our-projects/icons/volta.png';
import { ProjectCard } from './ProjectCard';
import Slider, { Settings } from 'react-slick';
import { StaticImageData } from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type Project = {
  imgSrc: StaticImageData;
  iconSrc: StaticImageData;
  name: string;
  desc: string;
};

const projects: Project[] = [
  {
    imgSrc: livecast_image,
    name: 'LiveCast',
    iconSrc: agora_icon,
    desc: 'Agora is a pioneer and global',
  },
  {
    imgSrc: foresight_image,
    name: 'Foresight',
    iconSrc: foresight_icon,
    desc: 'Foresight, our latest ground dv..',
  },
  {
    imgSrc: ursalive_image,
    name: 'URSA Live',
    iconSrc: ursa_icon,
    desc: 'URSA Live simplifies artists',
  },
  {
    imgSrc: chargefuze_image,
    name: 'ChargeFUZE',
    iconSrc: chargefuze_icon,
    desc: 'ChargeFUZE: Rent portable c',
  },
  {
    imgSrc: sidecar_image,
    name: 'Sidecardata',
    iconSrc: sidecar_icon,
    desc: 'Sidecar Data is a platform de...',
  },
  {
    imgSrc: liquidity_image,
    name: 'Liquidity Financial',
    iconSrc: liquidity_icon,
    desc: 'Transforming Banking and Spen....',
  },
  {
    imgSrc: volta_image,
    name: 'Volta',
    iconSrc: volta_icon,
    desc: 'Foresight, our latest ground db...',
  },
  {
    imgSrc: puzzle_image,
    name: 'Puzzle',
    iconSrc: puzzle_icon,
    desc: 'Your portal to Aleo, zkGames & giveaways',
  },
];

export const OurProjects = () => {
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();
  const sliderRef = useRef<Slider>(null);

  const handleNextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef?.current?.slickPrev();
  };

  const settings: Settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BlockLayout>
      <Stack gap={{ xs: 6.5, sm: 8.5 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', lg: 'center' }}
          gap={6}
        >
          <Typography
            variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
            fontWeight={500}
            lineHeight={1.2}
            color={'black'}
            maxWidth={isPhone ? 338 : isTablet ? 590 : 911}
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            Our work with leading startups from around the globe
          </Typography>
          <Stack direction={'row'} gap={2} data-aos="fade-up-right" data-aos-delay="200">
            <IconButton
              onClick={handlePrevSlide}
              sx={{
                width: '50px',
                height: '50px',
                border: '1px solid rgba(0, 0, 0, 0.70)',
                color: 'black',
              }}
            >
              <ArrowBackIcon color="inherit" />
            </IconButton>
            <IconButton
              onClick={handleNextSlide}
              sx={{
                width: '50px',
                height: '50px',
                border: '1px solid rgba(0, 0, 0, 0.70)',
                color: 'black',
              }}
            >
              <ArrowForwardIcon color="inherit" />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          data-aos="zoom-in-up"
          data-aos-delay="200"
          sx={{
            '.slick-slide > div': {
              padding: '0 10px',
            },
            '.slick-list': {
              margin: `0 -7px`,
            },
          }}
        >
          <Slider {...settings} ref={sliderRef}>
            {projects.map((project) => {
              return <ProjectCard key={project.name} data={project} />;
            })}
          </Slider>
        </Stack>
      </Stack>
    </BlockLayout>
  );
};
