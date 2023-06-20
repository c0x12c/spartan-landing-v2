import React from 'react';
import { Box, Button, Typography, TextField, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import CompanyLogo from '@/assets/images/Company-logo.svg';
import Container from '../atoms/Container';
import { base, gray } from '@/styles/colors';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';
import { help } from '@/constants/help';

import { About, AboutType } from '@/constants/about';
import { ServiceType, Services } from '@/constants/services';
import FacebookLogo from '@/assets/images/facebook.svg';
import InstagramLogo from '@/assets/images/instagram.svg';
import LinkedinLogo from '@/assets/images/linkedin.svg';
import TwitterLogo from '@/assets/images/twitter.svg';
import { SocialLink } from '../atoms/SocialLink';

interface IFooterProps {}

interface MenuItem {
  label: string;
  href: string;
  subItems?: ServiceType[] | AboutType[];
}

const menuItems: MenuItem[] = [
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
    subItems: help,
  },
];

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <Box sx={{ bgcolor: base.black }}>
      <Container>
        <Box sx={{ padding: '44px 0', display: 'flex', flexDirection: 'column', gap: '44px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '32px',
              borderBottom: `1px solid ${gray[600]}`,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={CompanyLogo} alt="Company Logo" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant={'contained'}
                endIcon={<Image src={ArrowDarkContact} alt="Outer Link" />}
                sx={{
                  padding: '14px 24px',
                  borderRadius: '60.5811px',
                  borderWidth: '2.12565px',
                  fontWeight: 600,
                  gap: '24px',
                }}
              >
                Get in touch
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { lg: 'row', xs: 'column' },
              gap: { xs: '44px', lg: 0 },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <Typography
                variant="fs32"
                sx={{ color: base.white, maxWidth: { lg: '285px', xs: '100%' } }}
              >
                Subscribe to our newsletter
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <TextField
                  label="Email address"
                  type="password"
                  variant="standard"
                  sx={{
                    width: { lg: '327px', xs: '100%' },
                    '& .MuiInputLabel-root': {
                      color: gray[60],
                    },
                    '& .MuiInput-underline:before': {
                      borderBottomColor: gray[60],
                    },
                  }}
                />
                <Button
                  aria-label="submit"
                  variant="contained"
                  sx={{
                    color: base.white,
                    padding: '15px 22px',
                    borderRadius: '8px 8px 0px 0px',
                  }}
                >
                  <ArrowForwardIos
                    sx={{
                      width: '15px',
                      height: '15px',
                      color: base.black,
                    }}
                  />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: { xl: '72px', xs: '32px' },
                flexDirection: { lg: 'row', xs: 'column' },
              }}
            >
              {menuItems.map((menuItem) => {
                const { href, hash } = menuItem as ServiceType & AboutType;
                const link = href ? href : `/services#${hash}`;
                return (
                  <Box key={menuItem.label}>
                    <Typography variant="fs32" sx={{ color: base.white }}>
                      {menuItem.label}
                    </Typography>
                    {menuItem.subItems && (
                      <List
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px',
                          padding: 0,
                          paddingTop: '20px',
                        }}
                      >
                        {menuItem.subItems.map((subItem) => (
                          <ListItem key={subItem.label} sx={{ padding: 0, color: gray[200] }}>
                            <Link href={link}>{subItem.label}</Link>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { lg: 'row', xs: 'column' },
              gap: { xs: '12px', lg: 0 },
              justifyContent: 'space-between',
              alignItems: { lg: 'center', xs: 'start' },
              paddingTop: '44px',
              borderTop: `1px solid ${gray[500]}`,
            }}
          >
            <Box>
              <Typography variant="fs16" sx={{ color: gray[300] }}>
                Spartan &copy; 2023. All Rights Reserved.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <SocialLink href="https://facebook.com" alt="facebook-icon" src={FacebookLogo} />
              <SocialLink href="https://instagram.com" alt="instagram-icon" src={InstagramLogo} />
              <SocialLink href="https://twitter.com" alt="twitter-icon" src={TwitterLogo} />
              <SocialLink href="https://linkedin.com" alt="linkedin-icon" src={LinkedinLogo} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
