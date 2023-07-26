import * as React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowIcon, BodyText, Container, TextFieldWithLabel, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { base, gray } from '@/styles/colors';
import Link from 'next/link';

interface IContactUsFormProps {}

export const ContactUsForm: React.FunctionComponent<IContactUsFormProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <Box
      py={isMobile ? '40px' : '44px'}
      id="contact-form"
      bgcolor={isMobile ? gray[50] : base.white}
    >
      <Container>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          gap={isMobile ? '40px' : '113px'}
        >
          <Box maxWidth="442px">
            <Box display="flex" flexDirection="column" gap="24px">
              <BodyText
                text="Have a question about our services or want to get started on your design project? We're here to help!"
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
              <BodyText
                text="Fill out the contact form below and one of our team members will get back to you within 24 hours."
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ letterSpacing: '0.32px' }}
              />
              <BodyText
                text="Alternatively, you can reach out to us via phone or email using the contact information provided below. We can't wait to hear from you!"
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
              <TextFieldWithLabel
                title="First name"
                updateValue={setFirstName}
                id="firstName"
                isRequired
              />
              <TextFieldWithLabel
                title="Last name"
                updateValue={setLastName}
                id="lastName"
                isRequired
              />
              <TextFieldWithLabel title="Email" placeholder="work@mail.com" id="email" isRequired />
              <TextFieldWithLabel
                title="Your message"
                placeholder="Message"
                id="message"
                updateValue={setMessage}
                minRows={4}
                multiline
                isRequired
              />
            </Box>
            <Link
              href={`mailto:thuy.nguyen@c0x12c.com?body=Dear ${lastName}, please leave your message here, and we will contact you soon.`}
              target="_blank"
            >
              <Button
                variant="contained"
                size={isMobile ? 'small' : 'medium'}
                sx={{ width: 'fit-content' }}
              >
                Submit now
                <ArrowIcon />
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
