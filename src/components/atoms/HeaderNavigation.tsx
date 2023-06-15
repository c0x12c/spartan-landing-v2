import React from 'react';
import { Link, Typography, Box } from '@mui/material';
import { gray, primary } from '@/styles/colors';
import { ContactUsButton } from './buttons';
import { SetStateAction } from 'react';

const menuItems = [
  { label: 'Spartan', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
];

export const HeaderNavigation = ({
  activePage,
  handlePageChange,
}: {
  activePage: string;
  handlePageChange: (page: SetStateAction<string>) => void;
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '44px' }}>
      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => handlePageChange(item.label)}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              marginRight: '8px',
              ':after': {
                content: "'/'",
                marginRight: '16px',
                marginLeft: '16px',
              },
              ':last-child:after': {
                display: 'none',
              },
            }}
          >
            <Typography
              variant="fs18"
              sx={{ color: activePage === item.label ? primary[500] : gray[200] }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </nav>
      <ContactUsButton />
    </Box>
  );
};
