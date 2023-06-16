import React from 'react';
import { Box, Button, Typography, TextField, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { Facebook, Twitter, LinkedIn, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import CompanyLogo from '@/assets/images/Company-logo.svg';
import Container from '../atoms/Container';
import { base, gray } from '@/styles/colors';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';

interface IFooterProps {}

interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Services',
    href: '/services',
    subItems: [
      { label: 'IT Consulting', href: '/' },
      { label: 'Product Development', href: '/' },
      { label: 'Data Platform', href: '/' },
      { label: 'Quality Assurance (QA) & Testing', href: '/' },
      { label: 'IOT Development', href: '/' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    subItems: [
      { label: 'About us', href: '/' },
      { label: 'Case study', href: '/' },
      { label: 'Life at Spartan', href: '/' },
      { label: 'Ready To Join?', href: '/' },
      { label: 'Internship Program', href: '/' },
    ],
  },
  {
    label: 'Help',
    href: '/help',
    subItems: [
      { label: 'FAQs', href: '/' },
      { label: 'Contact Us', href: '/' },
    ],
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
            <Box>
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
                    height: '50px',
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
              {menuItems.map((menuItem) => (
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
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              ))}
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
              <Link
                href="https://facebook.com"
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
                <Facebook sx={{ width: '16px', color: base.white }} />
              </Link>
              <Link
                href="https://twitter.com"
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
                <Twitter sx={{ width: '16px', color: base.white }} />
              </Link>
              <Link
                href="https://instagram.com"
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
                <LinkedIn sx={{ width: '16px', color: base.white }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
