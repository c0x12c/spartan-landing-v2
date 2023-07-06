import { Box } from '@mui/material';
import { Banner, HiringProcess, Vacancies } from '../molecules/apply-job';
import { MainTemplate } from '../templates';

export const ApplyJobPage = () => {
  return (
    <MainTemplate>
      <Box display={'flex'} flexDirection={'column'} gap={'44px'}>
        <Banner />
        <Vacancies />
        <HiringProcess />
      </Box>
    </MainTemplate>
  );
};
