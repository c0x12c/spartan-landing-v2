import { Drawer, Toolbar, IconButton, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import DarkCompanyLogo from '../../assets/images/Company-logo-dark.svg';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

import { base } from '@/styles/colors';
import DropdownList from './DropdownList';
import { SetStateAction } from 'react';

const dropdownItems = [
  { title: 'Spartan' },
  {
    title: 'Services',
    subItems: [
      { label: 'About us', href: '/' },
      { label: 'Product Development', href: '/' },
      { label: 'Artificial Intelligence', href: '/' },
      { label: 'Data Platform', href: '/' },
      { label: 'IoT Development', href: '/' },
      { label: 'Case Study Intelligence', href: '/' },
    ],
  },
  {
    title: 'Careers',
    subItems: [
      { label: 'About us', href: '/' },
      { label: 'Life at Spartan', href: '/' },
      { label: 'Apply for Jobs', href: '/' },
      { label: 'Intership Program', href: '/' },
      { label: 'Ready To Join?', href: '/' },
    ],
  },
];

export const MobileMenu = ({
  isMenuOpen,
  handleMenuClose,
  activePage,
  handlePageChange,
}: {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  activePage: string;
  handlePageChange: (page: SetStateAction<string>) => void;
}) => {
  return (
    <>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            width: '100vw',
            backgroundColor: base.white,
          },
        }}
      >
        <Toolbar
          sx={{
            padding: 0,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            marginTop: '27px',
            marginBottom: '44px',
          }}
        >
          <Link href="/" onClick={handleMenuClose}>
            <Image src={DarkCompanyLogo} alt="Company Logo" />
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClose}
            sx={{ color: base.black }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <DropdownList
          activePage={activePage}
          handlePageChange={handlePageChange}
          dropdownItems={dropdownItems}
        />
      </Drawer>
    </>
  );
};
