import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { ExpandMore } from '@mui/icons-material';
import Image from 'next/image';
import ArrowButton from '@/assets/images/Arrow-contact-dark.svg';
import { ServiceType } from '@/constants/services';
import { AboutType } from '@/constants/about';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItemType } from '@/components/molecules/common/Header';
import { ArrowIcon } from '../icons/Arrow';

type MenuItemDesktopType = {
  item: MenuItemType;
  isTransparent: boolean;
};

export const MenuItemDesktop = ({ item, isTransparent }: MenuItemDesktopType) => {
  const color = isTransparent ? gray[200] : base.black;
  const router = useRouter();
  const goToPath = (path?: string) => {
    if (!path) return;
    router.push(path);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="10.63px"
      height="100%"
      onClick={() => goToPath(item.href)}
      sx={{
        cursor: 'pointer',
        '&:hover': {
          '& .menu-title': {
            color: primary[500],
            transition: 'color .5s',
          },
          '& .icon-expand': {
            color: primary[500],
            transition: 'color .5s',
          },
          '&::before': {
            width: '100%',
          },
          '& .submenu': {
            opacity: 1,
            top: '100%',
            visibility: 'visible',
          },
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 0,
          height: '2px',
          backgroundColor: primary[500],
          transition: 'width .5s',
        },
      }}
      px="10.63px"
      position="relative"
    >
      <Typography className="menu-title" variant="fs18" color={color} lineHeight={1.33}>
        {item.label}
      </Typography>
      {item.subItems && (
        <ExpandMore
          className="icon-expand"
          sx={{
            color: color,
          }}
        />
      )}
      {item.subItems && (
        <Box
          className="submenu"
          component="ul"
          position="absolute"
          top="120%"
          left="-100%"
          bgcolor={base.white}
          p={'20px 32px 32px'}
          width={'417px'}
          sx={{
            visibility: 'hidden',
            opacity: 0,
            transition: 'all .5s',
          }}
        >
          {(item.subItems ?? []).map((subItem, subIndex) => {
            const { href, hash } = subItem as ServiceType & AboutType;
            const link = href ? href : `/services#${hash}`;
            return (
              <Box
                key={subItem.id}
                component="li"
                borderBottom="1px solid"
                borderColor={gray[400]}
                p="4px 10px 8px"
                mb={subIndex === (item.subItems || []).length - 1 ? 0 : '17px'}
                sx={{
                  '&:hover': {
                    '& .submenu-title': {
                      color: primary[500],
                      transition: 'color .5s',
                    },
                    '& .submenu-icon': {
                      transform: 'translateX(5px)',
                      transition: 'transform .5s',
                    },
                  },
                }}
              >
                <Link href={link} scroll={false}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    <Typography
                      className="submenu-title"
                      variant="fs16"
                      sx={{ color: base.black, fontWeight: 700, paddingRight: '30px' }}
                    >
                      {subItem.label}
                    </Typography>
                    <Box className="submenu-icon">
                      <ArrowIcon color={base.black} />
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
