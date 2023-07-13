import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';
import Image from 'next/image';
import { Container, TextFieldWithLabel } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import formImage from '@/assets/images/internship/form-image.png';
import internshipFormImage from '@/assets/images/internship/internship-form.png';
import { base, gray } from '@/styles/colors';
import AttachFile from '../../../assets/images/icons/attach-circle.svg';

interface IInternshipFormProps {}

export const InternshipForm: React.FunctionComponent<IInternshipFormProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Do something with the selected file
    }
  };

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
            gap="44px"
          >
            <Typography
              component="h2"
              variant="h4"
              color={gray[850]}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Submit form
            </Typography>
            <Box component="form" display="flex" flexDirection="column" gap="32px">
              <TextFieldWithLabel title="First name" id="firstName" isRequired />
              <TextFieldWithLabel title="Last name" id="lastName" isRequired />
              <TextFieldWithLabel title="Email" id="email" isRequired />
              <label htmlFor="resume" style={{ display: 'none' }}>
                Attach file
              </label>
              <input
                type="file"
                id="resume"
                accept=".doc, .docx, .pdf, .xls, .xlsx"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <label
                htmlFor="resume"
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  fontSize: isMobile ? '14px' : '18px',
                  alignItems: 'center',
                  padding: isMobile ? '16px 24px' : '20px 24px',
                  backgroundColor: gray[100],
                  border: `1px solid ${gray[200]}`,
                  borderRadius: '8px',
                  color: base.black,
                  gap: '8px',
                  width: isMobile ? '80%' : '45%',
                }}
              >
                <Image src={AttachFile} alt="attach file image" />
                Attach file
              </label>
              <Typography variant="subtitle1" mt="-17px" color={gray[700]}>
                Format: .doc, .docx, .pdf, .xls, .xlsx; &lt;=5MB
              </Typography>
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
