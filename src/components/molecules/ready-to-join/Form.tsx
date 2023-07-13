import * as React from 'react';
import { Box, Button } from '@mui/material';
import {
  ArrowIcon,
  BodyText,
  Container,
  TextFieldWithLabel,
  Title,
  UploadFile,
} from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base, gray } from '@/styles/colors';

interface IReadyToJoinFormProps {}

export const ReadyToJoinForm: React.FunctionComponent<IReadyToJoinFormProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box
      mb={isMobile ? '24px' : '44px'}
      py="40px"
      id="join-form"
      bgcolor={isMobile ? gray[50] : base.white}
    >
      <Container>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          gap={isMobile ? '60px' : '113px'}
        >
          <Box maxWidth="442px">
            <Box display="flex" flexDirection="column" gap="24px">
              <BodyText
                text="Hello,"
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
              <BodyText
                text="We appreciate your interest in our company. Please fill out this form, and it will give us a chance to learn a bit more about you."
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
              <BodyText
                text="For any updates about job opportunities and company news, you're invited to visit our Linkedin. And if you have any questions, don't hesitate to contact us via email: hello@c0x12c.com"
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
              <BodyText
                text="We're looking forward to talking with you!"
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
              <BodyText
                text="Best Regards, \n Spartan Recruitment Team."
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
            </Box>
          </Box>
          <Box
            maxWidth="638px"
            mx={isMobile ? 'auto' : '0'}
            width="100%"
            display="flex"
            flexDirection="column"
            gap={isMobile ? '24px' : '44px'}
          >
            <Title text="Submit form" sx={{ fontSize: isMobile ? '28px' : '48px' }} />
            <Box component={'form'} display="flex" flexDirection="column" gap="32px">
              <TextFieldWithLabel title="First name" id="firstName" isRequired />
              <TextFieldWithLabel title="Last name" id="lastName" isRequired />
              <TextFieldWithLabel title="Email" id="email" isRequired />
              <UploadFile
                title="Attach your résume here"
                text="Attach file"
                helpText="(Format: .doc, .docx, .pdf, .xls, .xlsx; <=5MB)"
                isRequired
              />
            </Box>
            <Button
              variant="contained"
              size={isMobile ? 'small' : 'medium'}
              sx={{
                width: 'fit-content',
              }}
            >
              Submit now
              <ArrowIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
