import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { vacancies } from '@/constants/vacancies';
import JobListItem from '@/components/atoms/JobListItem';
import { base, gray, primary } from '@/styles/colors';
import Arrow from '@/assets/images/icons/arrow-purple.svg';
import Image from 'next/image';

const JobList = ({ currentId }: { currentId: string }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={'min-content'}
      width={{ xs: '100%', md: 'calc(35% - 24px)' }}
      gap={'24px'}
      bgcolor={base.white}
      p={{ xs: '24px 0 34px 0', md: '24px' }}
      borderRadius={'16px'}
      boxShadow={{ md: `0 47px 47px -47px ${gray[200]}`, xs: 'none' }}
    >
      <Typography variant="fs24" color={base.black}>
        More jobs for you
      </Typography>
      {vacancies.map((job, index) => {
        if (job.id === currentId) {
          return null;
        }
        return (
          <JobListItem
            key={index}
            href={`/apply-job/${job.id}`}
            position={job.position}
            tag={job.tag}
            experienceLevel={job.experienceLevel}
            enrollmentStatus={job.enrollmentStatus}
          />
        );
      })}
      <Link
        display={'flex'}
        gap={'10px'}
        underline="none"
        href="/apply-job"
        width={'max-content'}
        color={primary[400]}
        fontWeight={600}
        borderBottom={`1px solid ${primary[400]}`}
      >
        View all open positions
        <Image src={Arrow} alt="Arrow" />
      </Link>
    </Box>
  );
};

export default JobList;
