import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItemType } from '@/components/molecules';
import { ArrowIcon } from '@/components/atoms';
import ai from '@/assets/images/icons/ai.png';
import Image from 'next/image';
import { Services } from '@/constants';

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

  const submenuCareers = (item.subItems ?? []).map((subItem, subIndex) => {
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
  });

  const renderServices = Services.map((item) => {
    return (
      <Grid item key={item.id} xs={6} lg={4}>
        <Link href={item.href}>
          <Box
            display="flex"
            gap="12px"
            p="8px"
            borderRadius="8px"
            sx={{
              '&:hover': {
                bgcolor: primary[50],
                transition: 'all 0.2s',
              },
            }}
          >
            <Image src={item.icon} alt={item.label} />
            <Box display="flex" flexDirection="column" gap="12px">
              <Typography variant="fs14" color={gray[900]} fontWeight="600" component="h4">
                {item.label}
              </Typography>
              <Typography variant="fs14" fontSize="12px" color={gray[500]} component="p">
                {item.content}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Grid>
    );
  });

  const submenuServices = (
    <Box display="flex">
      <Box flex="1" p="24px 24px 64px 24px" display="flex" flexDirection="column" gap="40px">
        <Typography variant="fs24" color={gray[900]} fontWeight="600" component="h3">
          Service
        </Typography>
        <Grid container columnSpacing="32px" rowSpacing="56px">
          {renderServices}
        </Grid>
      </Box>
      <Box
        width="302px"
        p="24px"
        sx={{
          background: '#12144F',
        }}
      >
        <Box display="flex" justifyContent="center" mb="50px">
          <Image src={ai} alt="ai" />
        </Box>
        <Box mb="16px">
          <Typography
            variant="fs16"
            color={base.white}
            fontWeight="600"
            lineHeight="1.8"
            component="h3"
            mb="8px"
          >
            Ready to start your tailored project?
          </Typography>
          <Typography variant="fs16" color={gray[100]} fontSize="12px" component="p">
            Let’s build incredible products together
          </Typography>
        </Box>
        <Link href="/contact-us#contact-form" scroll={false}>
          <Button
            variant="contained"
            sx={{
              py: '12px',
            }}
          >
            Meet our expert
          </Button>
        </Link>
      </Box>
    </Box>
  );

  return (
    <Box
      className={`submenu ${item.label.toLowerCase()}`}
      component="ul"
      position="absolute"
      top="120%"
      left={isServices ? 0 : '-100%'}
      right={isServices ? 0 : 'unset'}
      bgcolor={base.white}
      p={isServices ? 0 : '20px 32px 32px'}
      width={isServices ? '90vw' : '417px'}
      maxWidth={isServices ? '1208px' : 'unset'}
      borderRadius="8px"
      boxShadow={'0px 8px 32px 0px rgba(0, 0, 0, 0.12)'}
      overflow="hidden"
      sx={{
        visibility: 'hidden',
        opacity: 0,
        transition: 'all .5s',
      }}
    >
      {isServices ? submenuServices : submenuCareers}
    </Box>
  );
};
