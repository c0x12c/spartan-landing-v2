import React from 'react';
import * as colors from '@/styles/colors';
import { Typography, Box, Button } from '@mui/material';
import { MenuItemDataType } from '../molecules/Header';
import MenuItem from './MenuItem';
import Image from 'next/image';
import ArrowContact from '@/assets/images/Arrow-contact.svg';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';

type HeaderNavigationType = {
  menu: MenuItemDataType[];
  isTransparent: boolean;
};

export const HeaderNavigation = ({ menu, isTransparent }: HeaderNavigationType) => {
  const renderMenu = menu.map((item, index) => {
    return (
      <Box key={item.id} display="flex" alignItems="center" gap="16px" height="100%">
        <MenuItem item={item} isTransparent={isTransparent} />
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
