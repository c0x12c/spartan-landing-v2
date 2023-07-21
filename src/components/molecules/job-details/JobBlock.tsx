import { JobDetailsProps } from '@/components/pages/JobDetails';
import React from 'react';
import JobBanner from './JobBanner';
import JobDescription from './JobDescription';
import { Box } from '@mui/material';

const JobBlock = ({ job }: JobDetailsProps) => {
  return (
    <Box>
      <JobBanner job={job} />
      <JobDescription job={job} />
    </Box>
  );
};

export default JobBlock;
