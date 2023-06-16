import { SetStateAction, useState } from 'react';
import { AppBar, Toolbar, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Container from '../atoms/Container';
import CompanyLogo from '../../assets/images/Company-logo.svg';
import { MobileMenu } from '../atoms/MobileMenu';
import { HeaderNavigation } from '../atoms/HeaderNavigation';
import CompanyDarkLogo from '@/assets/images/Company-logo-dark.svg';
import { base } from '@/styles/colors';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Spartan');
  const theme = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;
  const mode = currentPath === '/aboutus' ? 'dark' : 'light';
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handlePageChange = (page: SetStateAction<string>) => {
    setActivePage(page);
  };

  return (
    <AppBar
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        position: 'absolute',
        top: { xs: '34px', sm: '41px', md: '41px', lg: '50px', xl: '31px', xxl: '24px' },
      }}
    >
      <Container>
        <Toolbar
          sx={{ padding: 0, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            href="/"
            sx={{ padding: 0, margin: 0 }}
          >
            <Image src={mode === 'light' ? CompanyLogo : CompanyDarkLogo} alt="Company Logo" />
          </IconButton>

          {isMobile ? (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
