import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItemType } from '@/components/molecules';
import ai from '@/assets/images/icons/ai.png';
import cases from '@/assets/images/icons/cases.svg';

import Image from 'next/image';
import { About, ServiceType, Services } from '@/constants';

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
      sx={{
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
      position={'unset'}
    >
      <Typography
        className="menu-title"
        variant="fs18"
        color={color}
        lineHeight={1.33}
        onClick={() => goToPath(item.href)}
        position="relative"
        sx={{
          cursor: 'pointer',
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

  const renderServices = (data: ServiceType[]) => {
    return data.map((item) => {
      return (
        <Grid item key={item.id} xs={6} lg={4}>
          <Link href={item.href}>
            <Box
              display="flex"
              gap="12px"
              p="16px"
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
  };

  const renderAbout = About.map((item) => {
    return (
      <Grid item key={item.id} xs={6} lg={4}>
        <Link href={item.href}>
          <Box
            display="flex"
            gap="12px"
            p="16px"
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
        <Grid container spacing="32px">
          {renderServices(Services.slice(0, 5))}
          <Grid item xs={6} lg={4}>
            <Link href="/case-study">
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
                <Image src={cases} alt={'cases'} />
                <Box display="flex" flexDirection="column" gap="12px">
                  <Typography variant="fs14" color={gray[900]} fontWeight="600" component="h4">
                    Case Study
                  </Typography>
                  <Typography variant="fs14" fontSize="12px" color={gray[500]} component="p">
                    Turning ideas into effective and engaging digital experiences.
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
          {renderServices(Services.slice(5))}
        </Grid>
      </Box>
      <Box
        width="302px"
        position="relative"
        sx={{
          background: '#12144F',
        }}
      >
        <Box
          position="absolute"
          p="24px"
          top="50%"
          left="0"
          width="100%"
          sx={{ transform: 'translateY(-50%)' }}
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
    </Box>
  );

  const submenuCareers = (
    <Box display="flex">
      <Box flex="1" p="24px 24px 64px 24px" display="flex" flexDirection="column" gap="40px">
        <Typography variant="fs24" color={gray[900]} fontWeight="600" component="h3">
          Career
        </Typography>
        <Grid container spacing="32px">
          {renderAbout}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Box
      className={`submenu ${item.label.toLowerCase()}`}
      component="ul"
      position="absolute"
      top="120%"
      left={0}
      right={0}
      bgcolor={base.white}
      p={0}
      width={'90vw'}
      maxWidth={'1208px'}
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
