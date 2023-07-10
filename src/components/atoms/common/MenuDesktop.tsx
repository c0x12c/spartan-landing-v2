import React from 'react';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { MenuItemType } from '@/components/molecules';
import { ArrowIcon } from '../icons/Arrow';
import { MenuItemDesktop } from '@/components/atoms';

type MenuDesktopType = {
  menu: MenuItemType[];
  isTransparent: boolean;
};

export const MenuDesktop = ({ menu, isTransparent }: MenuDesktopType) => {
  const router = useRouter();
  const goToContactPage = () => {
    router.push(
      {
        pathname: '/contact-us',
        hash: 'contact-form',
      },
      undefined,
      { scroll: false }
    );
  };

  const renderMenu = menu.map((item) => {
    return (
      <Box key={item.id} display="flex" alignItems="center" gap="16px" height="100%">
        <MenuItemDesktop item={item} isTransparent={isTransparent} />
      </Box>
    );
  });

  return (
    <Box sx={{ display: 'flex', gap: '44px' }}>
      <Box component="nav" display="flex" alignItems="center" gap="16px">
        {renderMenu}
      </Box>
      <Button
        variant={isTransparent ? 'transparent' : 'contained'}
        onClick={goToContactPage}
        sx={{
          padding: '14px 24px',
        }}
      >
        Contact us
        <ArrowIcon />
      </Button>
    </Box>
  );
};
