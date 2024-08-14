import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { IconButton, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';

import group_banner from '@/assets/images/home/group-banner.png';
import chargeFuze_icon from '@/assets/images/trust-management-team/chargeFuze.png';
import agora_icon from '@/assets/images/trust-management-team/agora.png';
import liquidity_icon from '@/assets/images/trust-management-team/liquidity.png';
import ursa_icon from '@/assets/images/trust-management-team/ursa.png';
import volta_icon from '@/assets/images/trust-management-team/volta.png';
import sidecar_icon from '@/assets/images/trust-management-team/sidecar.png';
import cyphr_icon from '@/assets/images/trust-management-team/cyphr.png';
import pura_icon from '@/assets/images/trust-management-team/pura.png';
import heru_icon from '@/assets/images/trust-management-team/heru.png';

import gabe_avatar from '@/assets/images/trust-management-team/avatar/gabe.png';
import george_avatar from '@/assets/images/trust-management-team/avatar/george.png';
import ryan_avatar from '@/assets/images/trust-management-team/avatar/ryan.png';
import chad_avatar from '@/assets/images/trust-management-team/avatar/chad.png';
import alaia_avatar from '@/assets/images/trust-management-team/avatar/alaia.png';
import asa_avatar from '@/assets/images/trust-management-team/avatar/asa.png';
import scott_avatar from '@/assets/images/trust-management-team/avatar/scott.png';
import travis_avatar from '@/assets/images/trust-management-team/avatar/travis.png';
import james_avatar from '@/assets/images/trust-management-team/avatar/james.png';

import { ManagementCard } from '../trust-by-management-team/ManagementCard';
import Image, { StaticImageData } from 'next/image';
import { BlockLayout } from '@/components/templates';
import Slider, { Settings } from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Aos from 'aos';

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
    desc: `"Spartan stands out for startups and scale-ups exploring outsourcing. Their engineering team excels, offering more than just solutions - they're dedicated partners in your success.”`,
    name: 'Travis VanderZanden',
    position: 'Agora’s Product & Engineering Lead',
    avatarSrc: travis_avatar,
    iconSrc: agora_icon,
  },
  {
    desc: `“My Spartan team goes above and beyond to keep me in the loop, with ample documentation, daily standups, and code reviews. With Spartan, it feels like my engineers are part of my team.”`,
    name: 'James Webb',
    position: 'Founder at Sidecar data',
    avatarSrc: james_avatar,
    iconSrc: sidecar_icon,
  },
  {
    desc: `"They didn’t just deliver a product; they delivered a solution that met all our needs and totally exceeded our expectations.”`,
    name: 'Alaia Martin',
    position: 'Co-Founder and COO Cyphr',
    avatarSrc: alaia_avatar,
    iconSrc: cyphr_icon,
  },
  {
    desc: `“Spartan is one of the best firms I've worked with across multiple projects and companies. They ramp up quickly, consistently adding value”`,
    name: 'Scott Rushforth',
    position: 'CTO of Pura Ex CTO of Bird',
    avatarSrc: scott_avatar,
    iconSrc: pura_icon,
  },
  {
    desc: `"Spartan stands out for startups and scale-ups exploring outsourcing. Their engineering team excels, offering more than just solutions - they're dedicated partners in your success.”`,
    name: 'Asa Downs',
    position: 'Principal Software Engineer at Heru, Senior Software Engineer at Biolog.',
    avatarSrc: asa_avatar,
    iconSrc: heru_icon,
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
    autoplay: true,
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
    onInit: () => {
      Aos.refresh();
    },
    onReInit() {
      Aos.refresh();
    },
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
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Stack>
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
            '.slick-dots': {
              width: {
                xs: 'calc(100vw - 32px - 15px)',
                md: 'calc(100vw - 80px - 15px)',
                lg: 'calc(100vw - 240px - 15px)',
              },
            },
            '.slick-dots > li > button::before': {
              color: 'white',
            },
            '.slick-dots > li.slick-active > button::before': {
              color: 'white',
            },
          }}
        >
          <Slider {...settings} ref={sliderRef}>
            {teams.map((team) => {
              return <ManagementCard key={team.name} data={team} />;
            })}
          </Slider>
        </Stack>
        <Stack direction={'row'} gap={2} data-aos="fade-up" justifyContent={'center'}>
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
      </BlockLayout>
    </Stack>
  );
};
