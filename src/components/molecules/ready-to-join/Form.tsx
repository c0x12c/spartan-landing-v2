import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowIcon, Container, TextFieldWithLabel } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';

interface IReadyToJoinFormProps {}

export const ReadyToJoinForm: React.FunctionComponent<IReadyToJoinFormProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box mb="44px">
      <Container>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          gap={isMobile ? '60px' : '113px'}
        >
          <Box maxWidth="442px">
            <Box display="flex" flexDirection="column" gap="24px">
              <Typography variant="fs18" color={gray[600]}>
                Have a question about our services or want to get started on your design project?
                We&apos;re here to help!
              </Typography>
              <Typography variant="fs18" color={gray[600]}>
                Fill out the contact form below and one of our team members will get back to you
                within 24 hours. <br /> Alternatively, you can reach out to us via phone or email
                using the contact information provided below. We can&apos;t wait to hear from you!
              </Typography>
            </Box>
          </Box>
          <Box
            maxWidth="638px"
            mx={isMobile ? 'auto' : '0'}
            width="100%"
            display="flex"
            flexDirection="column"
            gap="44px"
          >
            <Typography component="h2" variant="fs48" color={gray[850]}>
              Submit form
            </Typography>
            <Box component={'form'} display="flex" flexDirection="column" gap="32px">
              <TextFieldWithLabel title="First name" id="firstName" isRequired />
              <TextFieldWithLabel title="Last name" id="lastName" isRequired />
              <TextFieldWithLabel title="Email" id="email" isRequired />
              <TextFieldWithLabel title="Attach your résume here" id="résume" isRequired />
            </Box>
            <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
              Submit now
              <ArrowIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
