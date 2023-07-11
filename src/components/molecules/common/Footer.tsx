import * as React from 'react';
import { base, gray } from '@/styles/colors';
import { Box, Button, Typography } from '@mui/material';
import { ArrowIcon, Container, InputWButton } from '@/components/atoms';
import Image from 'next/image';
import LogoWhite from '@/assets/images/logo/logo-white.svg';
import Link from 'next/link';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { About, AboutType, Help, HelpType, ServiceType, Services, Socials } from '@/constants';

interface IFooterProps {}

interface MenuItem {
  label: string;
  href: string;
  subItems?: ServiceType[] | AboutType[] | HelpType[];
}

const footerMenu: MenuItem[] = [
  {
    label: 'Services',
    href: '/services',
    subItems: Services,
  },
  {
    label: 'About',
    href: '/about',
    subItems: About,
  },
  {
    label: 'Help',
    href: '/help',
    subItems: Help,
  },
];

export const Footer: React.FunctionComponent<IFooterProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const renderSocial = Socials.map((social) => (
    <Link
      key={social.id}
      href={social.href}
      style={{
        width: '45px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: `1px solid ${base.white}`,
        borderRadius: '22.5px',
      }}
    >
      <Image src={social.imgSrc} alt={social.label} />
    </Link>
  ));

  const renderSubMenu = (data: ServiceType[] | AboutType[] | HelpType[]) => {
    return data.map((item) => {
      return (
        <Link key={item.id} href={item.href} scroll={false}>
          <Typography variant="fs18" color={gray[300]}>
            {item.label}
          </Typography>
        </Link>
      );
    });
  };

  const renderMenu = footerMenu.map((item) => {
    return (
      <Box key={item.label}>
        <Typography
          variant="fs24"
          sx={{ color: base.white }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {item.label}
        </Typography>
        {item.subItems && (
          <Box display="flex" flexDirection="column" gap="16px" pt="20px" data-aos="fade-up">
            {renderSubMenu(item.subItems)}
          </Box>
        )}
      </Box>
    );
  });

  return (
    <Box bgcolor={base.black} py="44px">
      <Container>
        <Box display="flex" flexDirection="column" gap="44px">
          <Box
            display="flex"
            flexDirection={{ lg: 'row', xs: 'column' }}
            alignItems={{ lg: 'center', xs: 'flex-start' }}
            justifyContent="space-between"
            pb="32px"
            borderBottom="1px solid"
            borderColor={gray[600]}
            rowGap="16px"
          >
            <Link href="/">
              <Image src={LogoWhite} alt="Logo" />
            </Link>
            <Link href="/contact-us#contact-form" scroll={false}>
              <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                Get in touch
                <ArrowIcon />
              </Button>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection={{ lg: 'row', xs: 'column' }}
            // alignItems={{ lg: 'center', xs: 'flex-start' }}
            justifyContent="space-between"
            pb="44px"
            borderBottom="1px solid"
            borderColor={gray[600]}
            rowGap="44px"
            width="100%"
          >
            <Box maxWidth={{ lg: '397px', xs: '100%' }}>
              <Typography
                variant="fs24"
                color={base.white}
                letterSpacing="-0.8px"
                component="h3"
                mb="11px"
              >
                Subscribe to our newsletter
              </Typography>
              <InputWButton />
            </Box>
            <Box display="flex" gap={'42px'} flexDirection={{ lg: 'row', xs: 'column' }}>
              {renderMenu}
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ lg: 'row', xs: 'column' }}
            alignItems={{ lg: 'center', xs: 'flex-start' }}
            justifyContent="space-between"
            rowGap="16px"
          >
            <Box>
              <Typography variant="fs16" color={gray[300]}>
                Spartan &copy; 2023. All Rights Reserved.
              </Typography>
            </Box>
            {/* <Box display="flex" gap="5px">
              {renderSocial}
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
