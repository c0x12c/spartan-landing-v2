import React from 'react';
import { Typography, Box } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { ExpandMore } from '@mui/icons-material';
import { ServiceType } from '@/constants/services';
import { AboutType } from '@/constants/about';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItemType } from '@/components/molecules';
import { ArrowIcon } from '@/components/atoms';

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
          '& .menu-title::before': {
            width: '100%',
          },
          '& .icon-expand': {
            color: primary[500],
            transition: 'color .5s',
          },
          '& .submenu': {
            opacity: 1,
            top: '100%',
            visibility: 'visible',
          },
        },
      }}
      px="10.63px"
      position={item.label !== 'Services' ? 'relative' : 'unset'}
    >
      <Typography
        className="menu-title"
        variant="fs18"
        color={color}
        lineHeight={1.33}
        position="relative"
        sx={{
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
      >
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
      <SubMenu item={item} />
    </Box>
  );
};

const SubMenu = ({ item }: Pick<MenuItemDesktopType, 'item'>) => {
  if (!item.subItems) {
    return;
  }

  const isServices = item.label === 'Services';
  return (
    <Box
      className={`submenu ${item.label.toLowerCase()}`}
      component="ul"
      position="absolute"
      top="120%"
      left={isServices ? 0 : '-100%'}
      right={isServices ? 0 : 'unset'}
      bgcolor={base.white}
      p={'20px 32px 32px'}
      width={isServices ? '90vw' : '417px'}
      maxWidth={isServices ? '1208px' : '100%'}
      sx={{
        visibility: 'hidden',
        opacity: 0,
        transition: 'all .5s',
      }}
    >
      {(item.subItems ?? []).map((subItem, subIndex) => {
        const { href } = subItem;
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
            <Link href={href} scroll={false}>
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
  );
};
