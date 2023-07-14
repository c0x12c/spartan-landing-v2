import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { Benefits, InternshipBanner, InternshipForm } from '../molecules';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IInternshipPageProps {}

export const InternshipPage: React.FunctionComponent<IInternshipPageProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={isMobile ? '40px' : '44px'}>
        <InternshipBanner />
        <Benefits />
        <InternshipForm />
      </Box>
    </MainTemplate>
  );
};
