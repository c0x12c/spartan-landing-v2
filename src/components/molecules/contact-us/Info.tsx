import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box, Divider, Typography } from '@mui/material';
import { Container, Title } from '@/components/atoms';
import Image from 'next/image';
import contactImage from '@/assets/images/contact-us/contact-image.webp';
import messageImage from '@/assets/images/contact-us/message.webp';
import callIcon from '@/assets/images/icons/call.svg';
import emailIcon from '@/assets/images/icons/email.svg';
import locationIcon from '@/assets/images/icons/location.svg';
import linkedin from '@/assets/images/icons/linkedin.svg';
import facebook from '@/assets/images/icons/facebook.svg';
import { gray } from '@/styles/colors';
import Link from 'next/link';

interface IContactInfoProps {}

export const ContactInfo: React.FunctionComponent<IContactInfoProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const dataContact = [
    { id: 'contact-1', text: 'Call: 818-626-4197', icon: callIcon },
    { id: 'contact-2', text: 'hello@c0x12c.com', icon: emailIcon },
    {
      id: 'contact-3',
      text: 'Los Angeles CA',
      icon: locationIcon,
    },
  ];

  const renderContact = dataContact.map((item) => {
    return (
      <Box display="flex" key={item.id} gap="12px" data-aos="fade-up" data-aos-delay="200">
        <Image src={item.icon} alt="icon" />
        <Typography variant={isMobile ? 'fs14' : 'fs18'} color={gray[500]}>
          {item.text}
        </Typography>
      </Box>
    );
  });

  return (
    <Box id="internship-form" py={isMobile ? '40px' : '100px'}>
      <Container>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          gap={isMobile ? '40px' : '88px'}
        >
          <Box maxWidth="407px" position="relative" mx={isMobile ? 'auto' : '0'}>
            <Box minWidth={isMobile ? '100%' : '407px'} mx="auto">
              <Image
                src={contactImage}
                alt={'banner'}
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
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Box></Box>
                <Image
                  src={messageImage}
                  alt={'form'}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  data-aos="fade-left"
                  data-aos-delay="200"
                />
              </Box>
            </Box>
          </Box>
          <Box width="100%" display="flex" flexDirection="column" gap={isMobile ? '24px' : '42px'}>
            <Title
              text="Contact us"
              sx={{ fontSize: isMobile ? '28px' : '48px', color: gray[850] }}
            />
            <Box display="flex" flexDirection="column" gap="36px">
              {renderContact}
            </Box>
            <Divider />
            <Box mt={isMobile ? '24px' : '50px'} display="flex" alignItems="center" gap="12px">
              <Link href="https://www.linkedin.com/company/spartandev" target="_blank">
                <Image src={linkedin} alt="linkedin" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100088671814716" target="_blank">
                <Image src={facebook} alt="facebook" />
              </Link>
              {/* <Link href="/" target="_blank">
                <Image src={twitter} alt="twitter" />
              </Link> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
