import * as React from 'react';
import { MainTemplate } from '../templates';
import { LifeSpartanBanner, LifeSpartanSentence } from '../molecules';
import { Box } from '@mui/material';

interface ILifeSpartanPageProps {}

export const LifeSpartanPage: React.FunctionComponent<ILifeSpartanPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <LifeSpartanBanner />
        <LifeSpartanSentence />
      </Box>
    </MainTemplate>
  );
};
