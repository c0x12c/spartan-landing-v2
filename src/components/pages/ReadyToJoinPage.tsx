import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { ReadyToJoinBanner } from '../molecules';

interface IReadyToJoinPageProps {}

export const ReadyToJoinPage: React.FunctionComponent<IReadyToJoinPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <ReadyToJoinBanner />
      </Box>
    </MainTemplate>
  );
};
