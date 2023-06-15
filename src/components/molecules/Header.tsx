import { SetStateAction, useState } from 'react';
import { AppBar, Toolbar, IconButton, useMediaQuery, useTheme, ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Container from '../atoms/Container';
import CompanyLogo from '../../assets/images/Company-logo.svg';
import createThemeByMode from '../../styles/muiTheme';
import { MobileMenu } from '../atoms/MobileMenu';
import { HeaderNavigation } from '../atoms/HeaderNavigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Spartan');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            <Image src={CompanyLogo} alt="Company Logo" />
          </IconButton>

          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <MobileMenu
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
                handlePageChange={handlePageChange}
                activePage={activePage}
              />
            </>
          ) : (
            <HeaderNavigation handlePageChange={handlePageChange} activePage={activePage} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
