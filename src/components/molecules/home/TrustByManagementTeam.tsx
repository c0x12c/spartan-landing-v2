import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { IconButton, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';
import group_banner from '@/assets/images/home/group-banner.png';
import chargeFuze_icon from '@/assets/images/trust-management-team/chargeFuze.png';
import gabe_avatar from '@/assets/images/trust-management-team/gabe.png';
import agora_icon from '@/assets/images/trust-management-team/agora.png';
import liquidity_icon from '@/assets/images/trust-management-team/liquidity.png';
import ursa_icon from '@/assets/images/trust-management-team/ursa.png';
import volta_icon from '@/assets/images/trust-management-team/volta.png';
import george_avatar from '@/assets/images/trust-management-team/george.png';
import ryan_avatar from '@/assets/images/trust-management-team/ryan.png';
import chad_avatar from '@/assets/images/trust-management-team/chad.png';
import cody_avatar from '@/assets/images/trust-management-team/cody.png';
import { ManagementCard } from '../trust-by-management-team/ManagementCard';
import Image, { StaticImageData } from 'next/image';
import { BlockLayout } from '@/components/templates';
import Slider, { Settings } from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export type TManagementTeam = {
  desc: string;
  name: string;
  position: string;
  avatarSrc: StaticImageData;
  iconSrc: StaticImageData;
};

const teams: TManagementTeam[] = [
  {
    desc: '“Spartan delivers top-quality, timely projects with clear communication. Their focus on scalability and experience with high-growth startups adds significant value for clients.”',
    name: 'Gabe Esler',
    position: 'ChargeFUZE’s Product and Strategy',
    avatarSrc: gabe_avatar,
    iconSrc: chargeFuze_icon,
  },
  {
    desc: '“Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations.”',
    name: 'George Melika',
    position: 'Volta’s Co-Founder ',
    avatarSrc: george_avatar,
    iconSrc: volta_icon,
  },
  {
    desc: '“Switching from in-house teams to Spartan for my Fintech startup was a game-changer. Their rapid, high-quality software engineering exceeded expectations.”',
    name: 'Ryan Fujiu',
    position: 'Liquidity Financial’s Founder & CEO ',
    avatarSrc: ryan_avatar,
    iconSrc: liquidity_icon,
  },
  {
    desc: `“Spartan's collaboration was phenomenal. Their technical proficiency and quick turnaround transformed our messy code into working apps within a month.”`,
    name: 'Chad Royce',
    position: 'Ursa Live’s Founder & CEO  ',
    avatarSrc: chad_avatar,
    iconSrc: ursa_icon,
  },
  {
    desc: '“Spartan quickly became my go-to for high-quality, fast-paced software engineering. Within a month, I migrated all my projects to them.”',
    name: 'Cody Zhang',
    position: 'Agora’s Product & Engineering Lead',
    avatarSrc: cody_avatar,
    iconSrc: agora_icon,
  },
];

export const TrustByManagementTeam = () => {
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
    className: 'slider variable-width',
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          className: undefined,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed: 500,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <Stack bgcolor={'black'} alignItems={{ xs: 'flex-start', md: 'center' }}>
      <BlockLayout>
        <Stack flexDirection={'row'} justifyContent={'space-between'} position={'relative'}>
          <Typography
            variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
            fontWeight={500}
            lineHeight={1.2}
            color={'white'}
            maxWidth={isPhone ? 338 : isTablet ? 590 : 911}
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            We are{' '}
            <Typography
              variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
              fontWeight={300}
              lineHeight={1.2}
              color={'white'}
              fontStyle={'italic'}
            >
              trusted
            </Typography>{' '}
            by top management teams at
          </Typography>
          <Stack
            position={{ xs: 'absolute', sm: 'relative' }}
            top={{ xs: '70%', sm: 'unset' }}
            right={{ xs: '5px', sm: 'unset' }}
            sx={{
              width: {
                xs: '70px',
                sm: '120px',
              },
            }}
            data-aos="fade-up-right"
            data-aos-delay="200"
          >
            <Image
              src={group_banner}
              alt="group_banner"
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Stack>
        <Stack gap={6.5}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
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
              {teams.map((team) => {
                return <ManagementCard key={team.name} data={team} />;
              })}
            </Slider>
          </Stack>
          <Stack
            direction={'row'}
            gap={2}
            data-aos="fade-up"
            data-aos-delay="200"
            justifyContent={'center'}
          >
            <IconButton
              onClick={handlePrevSlide}
              sx={{
                width: '50px',
                height: '50px',
                border: '1px solid white',
                color: 'white',
              }}
            >
              <ArrowBackIcon color="inherit" />
            </IconButton>
            <IconButton
              onClick={handleNextSlide}
              sx={{
                width: '50px',
                height: '50px',
                border: '1px solid white',
                color: 'white',
              }}
            >
              <ArrowForwardIcon color="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </BlockLayout>
    </Stack>
  );
};
