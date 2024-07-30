import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { Stack, Typography } from '@mui/material';
import React from 'react';
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
import { ManagementCard } from './ManagementCard';
import Image from 'next/image';
import { BlockLayout } from '@/components/templates';

const teams = [
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
            //   data-aos="fade-down"
            //   data-aos-delay="200"
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
          >
            <Image
              src={group_banner}
              alt="group_banner"
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Stack>
        <ManagementCard />
      </BlockLayout>
    </Stack>
  );
};
