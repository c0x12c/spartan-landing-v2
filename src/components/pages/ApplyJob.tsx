import { Box } from '@mui/material';
import { Banner, HiringProcess, Quotes, Vacancies } from '../molecules/apply-job';
import { MainTemplate } from '../templates';

export const ApplyJobPage = () => {
  return (
    <MainTemplate>
      <Box display={'flex'} flexDirection={'column'} gap={{ xs: '40px', sm: '44px' }}>
        <Banner />
        <Vacancies />
        <HiringProcess />
        <Quotes />
      </Box>
    </MainTemplate>
  );
};
