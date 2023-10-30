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
import { useRouter } from 'next/router';

const JobDescription = ({ job }: JobDetailsProps) => {
  const { asPath } = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  const renderSocial = ShareSocials.map((social) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return (
      <Link
        key={social.id}
        target="_blank"
        href={social.generateShareHref(`${origin}${asPath}`)}
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
    );
  });

  return (
    <Box
      width={'100%'}
      p={'24px'}
      display={'flex'}
      flexDirection={'column'}
      gap={'24px'}
      bgcolor={base.white}
      boxShadow={` 0px 10px 47px 0px ${gray[75]}`}
      borderRadius={'16px'}
      mb={{ xs: 0, md: '46px' }}
    >
      <JobDetailsSection
        contentType={ContentType.Paragraph}
        title="Why Us?"
        text={
          'Our team comprises engineers from the US, Vietnam, and Ukraine. As we work closely with some of the finest startups in LA and Silicon Valley, we place great emphasis on your problem-solving skills, communication abilities, and teamwork. Rest assured, you will gain a wealth of knowledge and experience with us!'
        }
      />
      {job.aboutJob && (
        <JobDetailsSection
          contentType={ContentType.Paragraph}
          title="About the job"
          text={job.aboutJob}
        />
      )}
      {job.responsibilities && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="Responsibilities"
          list={job.responsibilities}
        />
      )}
      {job.qualifications && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="Qualifications"
          list={job.qualifications}
        />
      )}
      {job.requirements && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="What we'll love about you"
          list={job.requirements}
        />
      )}
      {job.technologies && (
        <JobDetailsSection
          contentType={ContentType.List}
          title="Technology we use"
          list={job.technologies}
        />
      )}
      {job.offers ? (
        <>
          <JobDetailsSection
            contentType={ContentType.GroupedList}
            title="What We Offer"
            list={job.offers}
          />
        </>
      ) : (
        <>
          <JobDetailsSection
            contentType={ContentType.GroupedList}
            title="Benefit and perks"
            groupList={BenefitsData}
          />
          <JobDetailsSection
            contentType={ContentType.List}
            title="Why you'll love working here"
            list={LoveWorking}
          />
        </>
      )}
      <Box component={Divider} />
      <Box display={'flex'} alignItems={'center'}>
        <Typography fontWeight={600} mr={'18px'}>
          Share job
        </Typography>
        <Box display={'flex'} gap={'10px'}>
          {isMounted && renderSocial}
        </Box>
      </Box>
    </Box>
  );
};

export default JobDescription;
