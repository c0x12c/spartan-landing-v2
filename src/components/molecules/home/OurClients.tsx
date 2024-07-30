import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import chargeFuze_icon from '@/assets/images/clients-icon/chargeFuze.png';
import foresight_icon from '@/assets/images/clients-icon/foresight.png';
import sidecar_icon from '@/assets/images/clients-icon/sidecar.png';
import pura_icon from '@/assets/images/clients-icon/pura.png';
import jdpower_icon from '@/assets/images/clients-icon/jdpower.png';
import jbird_icon from '@/assets/images/clients-icon/bird.png';
import volta_icon from '@/assets/images/clients-icon/volta.png';
import veraset_icon from '@/assets/images/clients-icon/veraset.png';
import liquidity_icon from '@/assets/images/clients-icon/liquidity.png';
import archie_icon from '@/assets/images/clients-icon/archie.png';
import truecar_icon from '@/assets/images/clients-icon/truecar.png';
import puzzle_icon from '@/assets/images/clients-icon/puzzle.png';
import geocipher_icon from '@/assets/images/clients-icon/geocipher.png';
import wellpoint_icon from '@/assets/images/clients-icon/wellpoint.png';
import biolog_icon from '@/assets/images/clients-icon/biolog.png';
import ursa_icon from '@/assets/images/clients-icon/ursa.png';
import sabio_icon from '@/assets/images/clients-icon/sabio.png';
import sfox_icon from '@/assets/images/clients-icon/sfox.png';
import heru_icon from '@/assets/images/clients-icon/heru.png';
import ziprecruiter_icon from '@/assets/images/clients-icon/ziprecruiter.png';
import conversant_icon from '@/assets/images/clients-icon/conversant.png';
import mobolize_icon from '@/assets/images/clients-icon/mobolize.png';
import rapattoni_icon from '@/assets/images/clients-icon/rapattoni.png';
import intrinsicpower_icon from '@/assets/images/clients-icon/intrinsic-power.png';
import admodlabs_icon from '@/assets/images/clients-icon/admodlabs.png';
import agoodup_icon from '@/assets/images/clients-icon/goodup.png';
import agora_icon from '@/assets/images/clients-icon/agora.png';
import { useIsPhone, useIsTablet } from '@/hooks/useBreakPoints';
import { BlockLayout } from '@/components/templates';

const clients = [
  {
    imgSrc: chargeFuze_icon,
    width: 283,
    height: 32,
    mobileWidth: 156,
    mobileHeight: 24,
  },
  {
    imgSrc: foresight_icon,
    width: 258,
    mobileWidth: 194,
    mobileHeight: 66,
  },
  {
    imgSrc: sidecar_icon,
    width: 204,
    mobileWidth: 153,
  },
  {
    imgSrc: pura_icon,
    width: 182,
    mobileWidth: 138,
  },
  {
    imgSrc: jdpower_icon,
    width: 237,
    mobileWidth: 178,
  },
  {
    imgSrc: jbird_icon,
    width: 228,
    mobileWidth: 171,
  },
  {
    imgSrc: volta_icon,
    width: 213,
    mobileWidth: 160,
  },
  {
    imgSrc: veraset_icon,
    width: 196,
    mobileWidth: 148,
  },
  {
    imgSrc: liquidity_icon,
    width: 224,
    mobileWidth: 176,
  },
  {
    imgSrc: archie_icon,
    width: 174,
    mobileWidth: 131,
  },
  {
    imgSrc: truecar_icon,
    width: 202,
    mobileWidth: 152,
  },
  {
    imgSrc: puzzle_icon,
    width: 156,
    mobileWidth: 117,
  },
  {
    imgSrc: geocipher_icon,
    width: 278,
    mobileWidth: 209,
  },
  {
    imgSrc: wellpoint_icon,
    width: 174,
    mobileWidth: 131,
  },
  {
    imgSrc: biolog_icon,
    width: 167,
    mobileWidth: 126,
  },
  {
    imgSrc: ursa_icon,
    width: 180,
    mobileWidth: 135,
  },
  {
    imgSrc: sabio_icon,
    width: 220,
    mobileWidth: 158,
  },
  {
    imgSrc: sfox_icon,
    width: 204,
    mobileWidth: 155,
  },
  {
    imgSrc: heru_icon,
    width: 140,
    mobileWidth: 105,
  },
  {
    imgSrc: ziprecruiter_icon,
    width: 232,
    mobileWidth: 180,
  },
  {
    imgSrc: conversant_icon,
    width: 204,
    mobileWidth: 180,
  },
  {
    imgSrc: mobolize_icon,
    width: 241,
    mobileWidth: 203,
  },
  {
    imgSrc: rapattoni_icon,
    width: 271,
    mobileWidth: 178,
  },
  {
    imgSrc: intrinsicpower_icon,
    width: 200,
    mobileWidth: 150,
  },
  {
    imgSrc: admodlabs_icon,
    width: 381,
    mobileWidth: 286,
  },
  {
    imgSrc: agoodup_icon,
    width: 168,
    mobileWidth: 126,
  },
  {
    imgSrc: agora_icon,
    width: 170,
    mobileWidth: 126,
  },
];

export const OurClients = () => {
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();
  return (
    <Stack bgcolor={'black'}>
      <BlockLayout sx={{ gap: { xs: 6, md: 6 } }}>
        <Stack gap={4} px={4} data-aos="fade-up" data-aos-delay="200" alignItems={'center'}>
          <Typography
            variant={isPhone ? 'fs32' : isTablet ? 'fs48' : 'fs56'}
            fontWeight={500}
            lineHeight={1.2}
            color={'white'}
            maxWidth={640}
            textAlign={'center'}
          >
            Partnerships that fuel our success
          </Typography>
          <Typography
            variant={isPhone ? 'fs16' : 'fs20'}
            fontWeight={400}
            lineHeight={1.6}
            color={'#86868B'}
            maxWidth={isPhone ? 331 : isTablet ? 650 : 842}
            textAlign={'center'}
          >
            Collaborating with over 20 startups, we ensure a seamless offshoring experience. Whether
            you&apos;re a startup or an enterprise, we scale with your growth.
          </Typography>
        </Stack>
        <Stack
          justifyContent={'center'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          px={{ xs: 3, md: 4, lg: 8 }}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {clients.map((elem, index) => (
            <Stack key={index} alignItems={'center'} justifyContent={'center'} minHeight={66}>
              <Image
                src={elem.imgSrc}
                alt="icon"
                width={isPhone ? elem.mobileWidth : elem.width}
                height={isPhone ? elem.mobileHeight ?? 66 : elem.height ?? 88}
              />
            </Stack>
          ))}
        </Stack>
      </BlockLayout>
    </Stack>
  );
};
