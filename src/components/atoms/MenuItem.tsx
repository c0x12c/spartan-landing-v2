import React, { forwardRef } from 'react';
import { Link, Typography, Box, IconButton } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { MenuItemDataType } from '../molecules/Header';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import ArrowButton from '@/assets/images/Arrow-contact-dark.svg';
import { ServiceType } from '@/constants/services';
import { AboutType } from '@/constants/about';

type MenuItemType = {
  item: MenuItemDataType;
  updateMenuItem: (id: string) => void;
  isActive: boolean;
  isTransparent: boolean;
  openSubMenu: string;
  toggleSubMenu: (value: string) => void;
};

const MenuItem = forwardRef(function MenuItemWithoutRef(
  { item, updateMenuItem, isActive, isTransparent, openSubMenu, toggleSubMenu }: MenuItemType,
  ref
) {
  const color = isActive
    ? colors.primary[500]
    : isTransparent
    ? colors.gray[200]
    : colors.base.black;
  return (
    <Box
      display="flex"
      gap="10.63px"
      sx={{ cursor: 'pointer' }}
      onClick={() => {
        updateMenuItem(item.id);
        if (item.subItems) {
          toggleSubMenu(item.id);
        }
      }}
      px="10.63px"
      position="relative"
    >
      <Typography variant="fs18" color={color} fontWeight={isActive ? 700 : 400} lineHeight={1.33}>
        {item.label}
      </Typography>
      {item.subItems && (
        <>
          {openSubMenu === item.id ? (
            <ExpandLess
              sx={{
                color: color,
              }}
            />
          ) : (
            <ExpandMore
              sx={{
                color: color,
              }}
            />
          )}
        </>
      )}
      {openSubMenu === item.id && item.subItems && (
        <Box
          component="ul"
          position="absolute"
          top="100%"
          left="-100%"
          bgcolor={base.white}
          p={'20px 32px 32px'}
          width={'417px'}
          ref={ref}
        >
          {item.subItems.map((subItem, subIndex) => {
            const { href, hash } = subItem as ServiceType & AboutType;
            const link = href ? href : `/services#${hash}`;
            return (
              <Box
                key={subItem.id}
                component="li"
                borderBottom="1px solid"
                borderColor={gray[400]}
                p="4px 0 8px"
                mb={subIndex === (item.subItems || []).length - 1 ? 0 : '17px'}
              >
                <Link
                  href={link}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography
                    variant="fs18"
                    sx={{ color: base.black, fontWeight: 700, paddingRight: '30px' }}
                  >
                    {subItem.label}
                  </Typography>
                  <IconButton
                    aria-label="outer-link"
                    sx={{
                      border: `1.125px solid ${primary[500]}`,
                    }}
                  >
                    <Image src={ArrowButton} alt="ArrowButton" />
                  </IconButton>
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
});

export default MenuItem;
