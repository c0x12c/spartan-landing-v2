import React, { useState, useEffect, useRef } from 'react';
import * as colors from '@/styles/colors';
import { Typography, Box, Button } from '@mui/material';
import { MenuItemDataType } from '../molecules/Header';
import MenuItem from './MenuItem';
import Image from 'next/image';
import ArrowContact from '@/assets/images/Arrow-contact.svg';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';

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
      <Button
        variant={isTransparent ? 'outlined' : 'contained'}
        endIcon={<Image src={isTransparent ? ArrowContact : ArrowDarkContact} alt="Outer Link" />}
        sx={{
          bgcolor: isTransparent ? 'transparent' : colors.primary[500],
          padding: '14px 24px',
          borderRadius: '60.5811px',
          borderWidth: '2.12565px',
          fontWeight: 600,
          gap: '24px',
          color: isTransparent ? colors.base.white : colors.base.black,
          '&:hover': {
            borderWidth: '2.12565px',
            bgcolor: isTransparent ? 'transparent' : colors.primary[500],
          },
        }}
      >
        Contact us
      </Button>
    </Box>
  );
};
