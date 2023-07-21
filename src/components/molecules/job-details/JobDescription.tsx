import React from 'react';
import { JobDetailsProps } from '@/components/pages/JobDetails';
import { Box, Divider, Typography } from '@mui/material';
import WhyUs from './WhyUs';
import AboutJob from './AboutJob';
import Responsibilities from './Responsibilities';
import Benefits from './Benefits';
import { base, gray } from '@/styles/colors';
import Requirements from './Requirements';
import TechnologyWeUse from './TechnologyWeUse';
import LoveWork from './LoveWork';
import Link from 'next/link';
import Image from 'next/image';
import { ShareSocials } from '@/constants/socials';

const JobDescription = ({ job }: JobDetailsProps) => {
  const renderSocial = ShareSocials.map((social) => (
    <Link
      key={social.id}
      href={social.href}
      style={{
        width: '32px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px solid ${gray[500]}`,
        borderRadius: '22.5px',
      }}
    >
      <Image src={social.imgSrc} alt={social.label} />
    </Link>
  ));
  return (
    <Box
      width={'100%'}
      p={'24px'}
      display={'flex'}
      flexDirection={'column'}
      gap={'16px'}
      bgcolor={base.white}
      boxShadow={` 0px 10px 47px 0px ${gray[75]}`}
      borderRadius={'16px'}
      mb={{ xs: 0, md: '46px' }}
    >
      <WhyUs />
      <AboutJob text={job.aboutJob} />
      <Responsibilities list={job.responsibilities} />
      <Requirements list={job.requirements} />
      <TechnologyWeUse list={job.technologies} />
      <Benefits />
      <LoveWork />
      <Box component={Divider} />
      <Box display={'flex'} alignItems={'center'}>
        <Typography fontWeight={600} mr={'18px'}>
          Share job
        </Typography>
        <Box display={'flex'} gap={'10px'}>
          {renderSocial}
        </Box>
      </Box>
    </Box>
  );
};

export default JobDescription;
