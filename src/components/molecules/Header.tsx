import { SetStateAction, useState } from 'react';
import { AppBar, Toolbar, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Container from '../atoms/Container';
import CompanyLogo from '../../assets/images/Company-logo.svg';
import { MobileMenu } from '../atoms/MobileMenu';
import { HeaderNavigation } from '../atoms/HeaderNavigation';
import CompanyDarkLogo from '@/assets/images/Company-logo-dark.svg';
import { base } from '@/styles/colors';
import { useRouter } from 'next/router';

export type MenuItemDataType = {
  id: string;
  label: string;
  href?: string;
  subItems?: MenuItemDataType[];
};

const Header = () => {
  const { pathname } = useRouter();
  const isTransparent = pathname !== '/contact';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const dataMenu: MenuItemDataType[] = [
    {
      id: 'menu-item-1',
      label: 'Spartan',
      href: '/',
    },
    {
      id: 'menu-item-2',
      label: 'Services',
      subItems: [
        { id: 'sub-menu-item-1', label: 'IT Consulting', href: '/' },
        { id: 'sub-menu-item-2', label: 'Product Development', href: '/' },
        { id: 'sub-menu-item-3', label: 'Artificial Intelligence', href: '/' },
        { id: 'sub-menu-item-4', label: 'Data Platform', href: '/' },
        { id: 'sub-menu-item-5', label: 'IoT Development', href: '/' },
        { id: 'sub-menu-item-6', label: 'Case Study Intelligence', href: '/' },
      ],
    },
    {
      id: 'menu-item-3',
      label: 'Careers',
      subItems: [
        { id: 'sub-menu-item-7', label: 'About us', href: '/' },
        { id: 'sub-menu-item-8', label: 'Life at Spartan', href: '/' },
        { id: 'sub-menu-item-9', label: 'Apply for Jobs', href: '/' },
        { id: 'sub-menu-item-10', label: 'Internship Program', href: '/' },
        { id: 'sub-menu-item-11', label: 'Ready To Join?', href: '/' },
      ],
    },
  ];

  const [selectedMenuItem, setSelectMenuItem] = useState(dataMenu[0].id);
  const updateMenuItem = (id: string) => {
    setSelectMenuItem(id);
  };

  return (
    <AppBar
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        position: 'absolute',
        top: { xxl: '17px', xl: '25px', lg: '50', xs: 0 },
      }}
    >
      <Container>
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <IconButton edge="start" color="inherit" aria-label="home" href="/">
              <Image src={isTransparent ? CompanyLogo : CompanyDarkLogo} alt="Spartan Logo" />
            </IconButton>

            <HeaderNavigation
              menu={dataMenu}
              updateMenuItem={updateMenuItem}
              selectedMenuItem={selectedMenuItem}
              isTransparent={isTransparent}
            />

            {/* {isMobile ? (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                  <MenuIcon sx={{ color: mode === 'light' ? base.white : base.black }} />
                </IconButton>
                <MobileMenu
                  isMenuOpen={isMenuOpen}
                  handleMenuClose={handleMenuClose}
                  handlePageChange={handlePageChange}
                  activePage={activePage}
                />
              </>
            ) : (
              <HeaderNavigation
                handlePageChange={handlePageChange}
                activePage={activePage}
                mode={mode}
              />
            )} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
