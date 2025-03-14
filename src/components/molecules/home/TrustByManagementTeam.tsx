import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { IconButton, Stack, Typography } from '@mui/material';
import React, { useRef } from 'react';

import group_banner from '@/assets/images/home/group-banner.png';
import chargeFuze_icon from '@/assets/images/trust-management-team/chargeFuze.png';
import liquidity_icon from '@/assets/images/trust-management-team/liquidity.png';
import ursa_icon from '@/assets/images/trust-management-team/ursa.png';
import volta_icon from '@/assets/images/trust-management-team/volta.png';
import sidecar_icon from '@/assets/images/trust-management-team/sidecar.png';
import pura_icon from '@/assets/images/trust-management-team/pura.png';
import heru_icon from '@/assets/images/trust-management-team/heru.png';
import atrix_icon from '@/assets/images/trust-management-team/atrix.png';
import regimen_icon from '@/assets/images/trust-management-team/regimen.png';
import intrinsic_icon from '@/assets/images/trust-management-team/intrinsic.png';
import exialabs_icon from '@/assets/images/trust-management-team/exialabs.png';
import bird_icon from '@/assets/images/trust-management-team/bird.png';

import gabe_avatar from '@/assets/images/trust-management-team/avatar/gabe.png';
import george_avatar from '@/assets/images/trust-management-team/avatar/george.png';
import ryan_avatar from '@/assets/images/trust-management-team/avatar/ryan.png';
import chad_avatar from '@/assets/images/trust-management-team/avatar/chad.png';
import asa_avatar from '@/assets/images/trust-management-team/avatar/asa.png';
import scott_avatar from '@/assets/images/trust-management-team/avatar/scott.png';
import james_avatar from '@/assets/images/trust-management-team/avatar/james.png';
import travis_avatar from '@/assets/images/trust-management-team/avatar/travis.png';
import broc_avatar from '@/assets/images/trust-management-team/avatar/broc.jpeg';
import ray_avatar from '@/assets/images/trust-management-team/avatar/ray.jpeg';
import serj_avatar from '@/assets/images/trust-management-team/avatar/serj.jpeg';
import vera_avatar from '@/assets/images/trust-management-team/avatar/vera.jpeg';

import { ManagementCard } from '@/components/molecules';
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
    desc: `"Having spent my entire career working with in-house teams, I was initially hesitant to explore a new approach for my AI startup. However, after just a month of collaborating with the Spartan team, I was thoroughly impressed by their efficiency, proactiveness, and the quality of their work. Their ability to consistently deliver top-notch software engineering at an impressive speed has exceeded my expectations.”`,
    name: 'Travis VanderZanden',
    position: 'SkyAI Founder/CEO of Bird/COO at Lyft',
    avatarSrc: travis_avatar,
    iconSrc: bird_icon,
  },
  {
    desc: `“Spartan Is A Remarkable Team with Unmatched Expertise. Having worked on multiple projects with Spartan across multiple companies, I am confident to say they are one of the best firms you can ask for. They ramp up quickly and add value every time. Their leadership has decades of experience and has seen it all!”`,
    name: 'Scott Rushforth',
    position: 'CTO of Pura Ex CTO of Bird',
    avatarSrc: scott_avatar,
    iconSrc: pura_icon,
  },
  {
    desc: `"Highly recommend partnering with Spartan for your engineering and technical needs! They offer stellar talent across various areas and levels of expertise. Chan and his team go above and beyond in ensuring that your needs are met -- we appreciate their flexibility in helping us identify the right type of talent we need at what stage (Sometimes you don't know until you try!) as well as their flexibility in bringing onboard additional talent on a need basis.”`,
    name: 'Vera Kutsenko',
    position: 'Atrix Founder & CEO',
    avatarSrc: vera_avatar,
    iconSrc: atrix_icon,
  },
  {
    desc: `"In the fast-paced and constantly changing environment of a startup, the Spartan team has been indispensable. They build high-quality code at a fast pace and always keep us informed of what they are building and why. They are able to meet our tight deadlines, switch gears and products on a dime when needed, and do it all in a very async low-touch way. They can work independently when needed, or with clear guidance when needed, and they handle both styles with no problem.”`,
    name: 'Serj Kazar',
    position: 'ExiaLabs Co-found/CTO',
    avatarSrc: serj_avatar,
    iconSrc: exialabs_icon,
  },
  {
    desc: '“Working with the Spartan team to build our product has been an incredible experience. Their expertise, dedication, and technical skills have exceeded our expectations.”',
    name: 'George Melika',
    position: 'Volta’s Co-Founder ',
    avatarSrc: george_avatar,
    iconSrc: volta_icon,
  },
  {
    desc: '“Spartan delivers top-quality, timely projects with clear communication. Their focus on scalability and experience with high-growth startups adds significant value for clients.”',
    name: 'Gabe Esler',
    position: 'ChargeFUZE’s Product and Strategy',
    avatarSrc: gabe_avatar,
    iconSrc: chargeFuze_icon,
  },
  {
    desc: '“After working with in-house teams my whole career, I hired development agencies for my Fintech startup. Building a great, reliable product was a struggle until I came across Spartan. Initially, I was skeptical, but within just a month of collaborating with the Spartan team, I transferred all my remaining projects to them. Their capacity to deliver high-quality software engineering at a rapid pace is a rare find.”',
    name: 'Ryan Fujiu',
    position: 'Liquidity Financial’s Founder & CEO ',
    avatarSrc: ryan_avatar,
    iconSrc: liquidity_icon,
  },
  {
    desc: `“Our collaboration with the Spartan team in software development has been nothing short of phenomenal. Their technical proficiency, commitment, and depth of knowledge have outperformed our expectations. They took our messy code and fixed it into working apps in less than a month. It's not easy to find a team that can make such big changes so quickly and still do great work!”`,
    name: 'Chad Royce',
    position: 'UrsaLive’s Founder & CEO  ',
    avatarSrc: chad_avatar,
    iconSrc: ursa_icon,
  },
  {
    desc: `“As an early-stage startup, we are always racing against the clock. Spartan jump-started our product development. Instead of spending months recruiting an engineering team, we had a full team of excellent engineers off and running within days. Using Spartan allows us to control our costs and extend our runway, which means more time to find product-market fit.”`,
    name: 'James Webb',
    position: 'Founder at SidecarData',
    avatarSrc: james_avatar,
    iconSrc: sidecar_icon,
  },
  {
    desc: `"Spartan stands out for startups and scale-ups exploring outsourcing. Their engineering team excels, offering more than just solutions - they're dedicated partners in your success.”`,
    name: 'Asa Downs',
    position: 'Principal Software Engineer at Heru, Senior Software Engineer at Biolog.',
    avatarSrc: asa_avatar,
    iconSrc: heru_icon,
  },
  {
    desc: `"Chan and the Spartan team are hands down the best engineering team I’ve ever worked with. Their organization, thorough research, intuition, and work ethic are truly exceptional.”`,
    name: 'Rey Mendoza',
    position: 'Regimen Founder/CEO',
    avatarSrc: ray_avatar,
    iconSrc: regimen_icon,
  },
  {
    desc: `"Spartan is fantastic to work with! The engineers are top talent, super engaged, responsive, and collaborative. I highly recommend them if you need a turn-key team and want an experience that feels like it's in-house. Outstanding Value!”`,
    name: 'Broc TenHouten',
    position: 'IntrinsicPower CEO',
    avatarSrc: broc_avatar,
    iconSrc: intrinsic_icon,
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
    speed: 3000,
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
          speed: 3000,
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
              maxWidth: '1200px',
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
