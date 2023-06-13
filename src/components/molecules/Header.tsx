import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, Box, useTheme, ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Container from '../atoms/Container';
import CompanyLogo from '../../assets/images/Company-logo.svg';
import createThemeByMode from '../../styles/muiTheme';

import ContactUsButton from '../atoms/buttons/ContactUs';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <ThemeProvider theme={createThemeByMode()}>
      <AppBar position="static" sx={{ background: 'black', boxShadow: 'none' }}>
        <Container>
          <Toolbar sx={{ padding: 0, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
            <IconButton edge="start" color="inherit" aria-label="home" href="/">
              <Image src={CompanyLogo} alt="Company Logo" />
            </IconButton>

            {isMobile ? (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                  <MenuIcon />
                </IconButton>
                <Menu id="header-menu" anchorEl={isMenuOpen} open={isMenuOpen} onClose={handleMenuClose}>
                  <MenuItem>
                    <Link href="/">
                      <Typography variant="fs18">Home</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/about">
                      <Typography variant="fs18">About</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/contact">
                      <Typography variant="fs18">Contact</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: '44px' }}>
                <nav>
                  <Link href="/">
                    <Typography variant="fs18">Home</Typography>
                  </Link>
                  <Link href="/about">
                    <Typography variant="fs18">About</Typography>
                  </Link>
                  <Link href="/contact">
                    <Typography variant="fs18">Contact</Typography>
                  </Link>
                  <style jsx>{`
                    nav {
                      display: flex;
                      align-items: center;
                    }

                    nav :global(a) {
                      position: relative;
                      margin-right: 8px;
                      text-decoration: none;
                      color: inherit;
                    }

                    nav :global(a):after {
                      content: "/";
                      margin-right: 16px;
                      margin-left: 16px;
                    }

                    nav :global(a):last-child:after {
                      display: none;
                    }
                  `}</style>
                </nav>
                <ContactUsButton/>
              </Box>
            )}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider >
  );
};

export default Header;
