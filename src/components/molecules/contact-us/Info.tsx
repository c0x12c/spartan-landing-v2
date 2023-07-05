import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box, Divider, Typography } from '@mui/material';
import { Container } from '@/components/atoms';
import Image from 'next/image';
import contactImage from '@/assets/images/contact-us/contact-image.png';
import messageImage from '@/assets/images/contact-us/message.png';
import callIcon from '@/assets/images/icons/call.svg';
import emailIcon from '@/assets/images/icons/email.svg';
import locationIcon from '@/assets/images/icons/location.svg';
import linkedin from '@/assets/images/icons/linkedin.svg';
import facebook from '@/assets/images/icons/facebook.svg';
import twitter from '@/assets/images/icons/twitter.svg';
import { gray } from '@/styles/colors';
import Link from 'next/link';

interface IContactInfoProps {}

export const ContactInfo: React.FunctionComponent<IContactInfoProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const dataContact = [
    { id: 'contact-1', text: 'Call: +0837 322 425', icon: callIcon },
    { id: 'contact-2', text: 'drhoena@gmail.com', icon: emailIcon },
    {
      id: 'contact-3',
      text: '40 Chasely St, Auchenflower QLD 4066, Australia',
      icon: locationIcon,
    },
  ];

  const renderContact = dataContact.map((item) => {
    return (
      <Box display="flex" key={item.id} gap="12px" data-aos="fade-up" data-aos-delay="200">
        <Image src={item.icon} alt="icon" />
        <Typography variant="fs18" color={gray[500]}>
          {item.text}
        </Typography>
      </Box>
    );
  });

  return (
    <Box mb="44px" id="internship-form">
      <Container>
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          gap={isMobile ? '60px' : '88px'}
        >
          <Box maxWidth="407px" mx={isMobile ? 'auto' : '0'}>
            <Box position="relative" minWidth={isMobile ? '100%' : '526px'} mx="auto">
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
                padding="32px"
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
          <Box width="100%" display="flex" flexDirection="column" gap="42px">
            <Typography
              component="h2"
              variant="fs48"
              color={gray[850]}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact us
            </Typography>
            <Box display="flex" flexDirection="column" gap="36px">
              {renderContact}
            </Box>
            <Divider />
            <Box mt="50px" display="flex" alignItems="center" gap="12px">
              <Link href="/" target="_blank">
                <Image src={linkedin} alt="linkedin" />
              </Link>
              <Link href="/" target="_blank">
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href="/" target="_blank">
                <Image src={twitter} alt="twitter" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
