import React from 'react';
import { JobDetailsProps } from '@/components/pages/JobDetails';
import { Box, Divider, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import Link from 'next/link';
import Image from 'next/image';
import { ShareSocials } from '@/constants/socials';
import JobDetailsSection from '@/components/atoms/JobDetailsSection';
import { ContentType } from '@/components/atoms/JobDetailsSection';
import { BenefitsData, LoveWorking } from '@/constants/benefits';

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

  // Функція перевірки, чи тип міститься в об'єкті
  const isContentTypeInJob = (contentType: ContentType) => contentType in job;

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
      {isContentTypeInJob(ContentType.Paragraph) && (
        <JobDetailsSection
          contentType={ContentType.Paragraph}
          title="About the job"
          text={job.aboutJob}
        />
      )}
      {isContentTypeInJob(ContentType.List) && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="Responsibilities"
          list={job.responsibilities}
        />
      )}
      {isContentTypeInJob(ContentType.List) && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="What we'll love about you"
          list={job.requirements}
        />
      )}
      {isContentTypeInJob(ContentType.List) && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="Technology we use"
          list={job.technologies}
        />
      )}
      {isContentTypeInJob(ContentType.GroupedList) && (
        <JobDetailsSection
          contentType={ContentType.GroupedList}
          title="Benefit and perks"
          groupList={BenefitsData}
        />
      )}
      {isContentTypeInJob(ContentType.List) && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="Why you'll love working here"
          list={LoveWorking}
        />
      )}
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
