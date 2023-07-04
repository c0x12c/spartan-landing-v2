import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { ContactUsBanner, ReadyToJoinForm } from '../molecules';

interface IContactUsPageProps {}

export const ContactUsPage: React.FunctionComponent<IContactUsPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap="44px">
        <ContactUsBanner />
        <ReadyToJoinForm />
      </Box>
    </MainTemplate>
  );
};
