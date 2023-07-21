import { SEO } from '@/components/atoms';
import JobDetails from '@/components/pages/JobDetails';
import { EPages } from '@/documents/types';
import { vacancies } from '@/constants/vacancies';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Job } from '@/constants/vacancies';

interface JobDetailsPageProps {
  job: Job;
}

export default function JobDetailsPage({ job }: JobDetailsPageProps) {
  return (
    <>
      <SEO page={EPages.JOB_DETAILS} />
      <JobDetails job={job} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = vacancies.map((job) => ({
    params: { id: job.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<JobDetailsPageProps> = async ({ params }) => {
  const job = vacancies.find((job) => job.id === params?.id);
  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
    },
  };
};
