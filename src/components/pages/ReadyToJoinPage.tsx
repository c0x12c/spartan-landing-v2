import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { ReadyToJoinBanner, ReadyToJoinForm } from '../molecules';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IReadyToJoinPageProps {}

export const ReadyToJoinPage: React.FunctionComponent<IReadyToJoinPageProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={isMobile ? '24px' : '44px'}>
        <ReadyToJoinBanner />
        <ReadyToJoinForm />
      </Box>
    </MainTemplate>
  );
};
