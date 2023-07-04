import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { InternshipBanner } from '../molecules';

interface IInternshipPageProps {}

export const InternshipPage: React.FunctionComponent<IInternshipPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <InternshipBanner />
      </Box>
    </MainTemplate>
  );
};
