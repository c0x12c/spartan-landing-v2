import { Drawer, Toolbar, IconButton, Box } from '@mui/material';
import Image from 'next/image';
import LogoDark from '@/assets/images/logo/logo-dark.svg';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';

import { base } from '@/styles/colors';
import { useState } from 'react';
import { MenuItemType } from '@/components/molecules';
import { MenuItemMobile } from './MenuItemMobile';
import { BreakPoints, useBreakpoint } from '@/hooks';

type MenuMobileType = {
  menu: MenuItemType[];
  isTransparent: boolean;
};

export const MenuMobile = ({ menu, isTransparent }: MenuMobileType) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (value: boolean) => {
    setOpenMenu(value);
  };
  const isMobile = useBreakpoint(BreakPoints.SM);
  const renderMenu = menu.map((item) => {
    return (
      <Box key={item.id} display="flex" flexDirection="column" gap="24px">
        <MenuItemMobile item={item} toggleMenu={toggleMenu} />
      </Box>
    );
  });

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        size="large"
        onClick={() => toggleMenu(true)}
        sx={{ paddingRight: 0 }}
      >
        <MenuIcon fontSize="inherit" sx={{ color: isTransparent ? base.white : base.black }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => toggleMenu(false)}
        PaperProps={{
          style: {
            width: '100vw',
            backgroundColor: base.white,
          },
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            height: '87px',
            p: isMobile ? '10px 16px !important' : '40.8px 59.5px !important',
          }}
        >
          <Link href="/" onClick={() => toggleMenu(false)}>
            <Image src={LogoDark} alt="Logo" />
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
            onClick={() => toggleMenu(false)}
            sx={{ color: base.black, paddingRight: 0 }}
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
        <Box my="44px" mx={isMobile ? '16px' : '64px'}>
          {renderMenu}
        </Box>
      </Drawer>
    </>
  );
};
