import { Job, vacancies } from '@/constants/vacancies';
import React from 'react';
import HeroBanner from '../../assets/images/about-us/hero-banner.svg';
import Image from 'next/image';
import { MainTemplate } from '../templates';
import { JobBlock } from '../molecules/job-details/';
import { Box } from '@mui/material';
import JobList from '../molecules/job-details/JobList';
import { Container } from '../atoms';

export interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  return (
    <MainTemplate>
      <Image
        src={HeroBanner}
        alt="Banner"
        style={{ height: '396px', width: '100%', objectFit: 'cover' }}
      />
      <Container>
        <Box
          position={'relative'}
          height={'auto'}
          width={'100%'}
          marginBottom={'-217px'}
          top={'-217px'}
        >
          {vacancies.length > 1 ? (
            <Box display={'flex'} gap={'24px'} flexDirection={{ xs: 'column', md: 'row' }}>
              <Box width={{ xs: '100%', md: '65%' }}>
                <JobBlock job={job} />
              </Box>
              <JobList currentId={job.id} />
            </Box>
          ) : (
            <Box width={'100%'}>
              <JobBlock job={job} />
            </Box>
          )}
        </Box>
      </Container>
    </MainTemplate>
  );
};

export default JobDetails;
