import React, { useState, useEffect, useRef } from 'react';
import * as colors from '@/styles/colors';
import { Typography, Box } from '@mui/material';
import { MenuItemDataType } from '../molecules/Header';
import MenuItem from './MenuItem';

type HeaderNavigationType = {
  menu: MenuItemDataType[];
  updateMenuItem: (id: string) => void;
  selectedMenuItem: string;
  isTransparent: boolean;
};

export const HeaderNavigation = ({
  menu,
  updateMenuItem,
  selectedMenuItem,
  isTransparent,
}: HeaderNavigationType) => {
  const [openSubMenu, setOpenSubMenu] = useState('');
  const toggleSubMenu = (value: string) => {
    setOpenSubMenu(value);
  };

  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubMenu('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderMenu = menu.map((item, index) => {
    return (
      <Box key={item.id} display="flex" gap="16px">
        <MenuItem
          item={item}
          updateMenuItem={updateMenuItem}
          isActive={selectedMenuItem === item.id}
          isTransparent={isTransparent}
          openSubMenu={openSubMenu}
          toggleSubMenu={toggleSubMenu}
          ref={menuRef}
        />
        {index !== menu.length - 1 && (
          <Typography variant="fs18" color={isTransparent ? colors.gray[200] : colors.base.black}>
            /
          </Typography>
        )}
      </Box>
    );
  });

  return (
    <Box sx={{ display: 'flex', gap: '44px' }}>
      <Box component="nav" display="flex" alignItems="center" gap="16px">
        {renderMenu}
      </Box>
      {/* <ContactUsButton mode={mode} text="Contact Us" /> */}
    </Box>
  );
};
