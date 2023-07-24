import { SubTitle, Title } from '@/components/atoms';
import { JobDetailsProps } from '@/components/pages/JobDetails';
import { base, gray } from '@/styles/colors';
import { Box, Button, Typography } from '@mui/material';
import Location from '@/assets/images/icons/location-grey.svg';
import TimerOutline from '@/assets/images/icons/time-outline.svg';
import Timer from '@/assets/images/icons/timer-grey.svg';
import React from 'react';
import Arrow from '@/assets/images/icons/arrow.svg';
import Image from 'next/image';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);

const JobBanner = ({ job }: JobDetailsProps) => {
  const renderSkills = job.skills.map((skill, index) => {
    return (
      <Box
        p={'4px 25px'}
        key={index}
        fontSize={'12px'}
        color={gray[600]}
        border={`1px solid ${gray[300]}`}
        borderRadius={'35px'}
      >
        {skill}
      </Box>
    );
  });
  return (
    <Box
      mb={'24px'}
      p={'24px'}
      bgcolor={base.white}
      width={'100%'}
      boxShadow={`0 47px 47px -47px ${gray[200]}`}
      borderRadius={'16px'}
    >
      <SubTitle text="Now hiring" sx={{ mb: '14px' }} />
      <Title text={job.position} sx={{ mb: '16px' }} />
      <Box display={'flex'} flexDirection={'column'} gap={'8px'} mb={'8px'}>
        <Box
          color={gray[500]}
          fontSize={{ xs: '14px', md: '16px' }}
          alignItems={'center'}
          gap={'12px'}
          display={'flex'}
          textTransform="capitalize"
        >
          <Image src={Location} alt="Location" style={{ width: '24px', height: '24px' }} />
          {job.location.join(', ')}
        </Box>
        <Box
          color={gray[500]}
          fontSize={{ xs: '14px', md: '16px' }}
          alignItems={'center'}
          gap={'12px'}
          display={'flex'}
          textTransform="capitalize"
        >
          <Image src={Timer} alt="Timer" style={{ width: '24px', height: '24px' }} />
          {job.enrollmentStatus.join(', ')}
        </Box>
        <Box
          color={gray[500]}
          fontSize={{ xs: '14px', md: '16px' }}
          alignItems={'center'}
          gap={'12px'}
          display={'flex'}
        >
          <Image src={TimerOutline} alt="TimerOutline" style={{ width: '24px', height: '24px' }} />
          Posted {dayjs(job.createdAt).fromNow()}
        </Box>
      </Box>
      <Box mb={'16px'} display={'flex'} alignItems={'center'}>
        <Typography variant="fs16" color={gray[600]} mr={'12px'}>
          Skills:
        </Typography>
        <Box display={'flex'} gap={'8px'} flexWrap={'wrap'}>
          {renderSkills}
        </Box>
      </Box>
      <Button
        href="/ready-to-join"
        variant="contained"
        sx={{ width: '100%' }}
        endIcon={<Image src={Arrow} alt="arrow-right" />}
      >
        Apply now
      </Button>
    </Box>
  );
};

export default JobBanner;
