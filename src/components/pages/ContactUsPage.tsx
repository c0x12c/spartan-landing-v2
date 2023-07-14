import * as React from 'react';
import { MainTemplate } from '../templates';
import { Box } from '@mui/material';
import { AroundTheWorld, ContactInfo, ContactUsBanner, ContactUsForm } from '../molecules';

interface IContactUsPageProps {}

export const ContactUsPage: React.FunctionComponent<IContactUsPageProps> = () => {
  return (
    <MainTemplate>
      <Box display="flex" flexDirection="column" gap={{ md: '44px', xs: '24px' }}>
        <ContactUsBanner />
        <ContactUsForm />
        <ContactInfo />
        <AroundTheWorld />
      </Box>
    </MainTemplate>
  );
};
