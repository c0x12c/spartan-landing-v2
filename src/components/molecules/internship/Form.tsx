import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';
import Image from 'next/image';
import { Container, TextFieldWithLabel, Title, UploadFile } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import formImage from '@/assets/images/internship/form-image.png';
import internshipFormImage from '@/assets/images/internship/internship-form.png';

interface IInternshipFormProps {}

export const InternshipForm: React.FunctionComponent<IInternshipFormProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box mb="44px" id="internship-form">
      <Container>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          gap={isMobile ? '60px' : '113px'}
        >
          <Box maxWidth="424px" mx={isMobile ? 'auto' : '0'}>
            <Box position="relative" minWidth={isMobile ? '100%' : '526px'} mx="auto">
              <Image
                src={formImage}
                alt="banner"
                style={{ maxWidth: '100%', height: 'auto' }}
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                padding="32px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Box></Box>
                <Image
                  src={internshipFormImage}
                  alt="form"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  data-aos="fade-left"
                  data-aos-delay="200"
                />
              </Box>
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
            <Box component="form" display="flex" flexDirection="column" gap="32px">
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
