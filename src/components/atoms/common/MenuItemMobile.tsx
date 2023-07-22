import React, { useState } from 'react';
import { List, ListItem, Collapse, Typography, Box } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { base, gray, primary } from '@/styles/colors';
import { useRouter } from 'next/router';
import { MenuItemType } from '@/components/molecules';
import { ArrowIcon } from '@/components/atoms';
import Link from 'next/link';

type MenuItemMobileProps = {
  item: MenuItemType;
  toggleMenu: (value: boolean) => void;
};

export const MenuItemMobile: React.FC<MenuItemMobileProps> = ({ item, toggleMenu }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const router = useRouter();
  const goToPath = (path?: string) => {
    if (!path) return;
    router.push(path);
    toggleMenu(false);
  };

  const color = base.black;

  return (
    <List component="nav">
      <ListItem
        onClick={() => {
          handleClick();
        }}
        sx={{
          cursor: 'pointer',
          padding: '10px 10px 12px',
          borderBottom: `1px solid ${gray[400]}`,
          maxWidth: '100%',
          fontWeight: 'bold',
          color: color,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="fs18"
          fontWeight={600}
          onClick={() => {
            goToPath(item.href);
          }}
        >
          {item.label}
        </Typography>
        {item.subItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          sx={{
            pt: item.subItems && open ? '12px' : 0,
            pb: item.subItems && open ? 'unset' : 0,
            width: 'calc(100% - 34px)',
            ml: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {item.subItems?.map((subItem, index) => (
            <Link href={subItem.href} key={index}>
              <ListItem
                sx={{
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderBottom: `1px solid ${gray[400]}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  '&:hover': {
                    '& .submenu-text': {
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
                <Typography className="submenu-text" variant="fs16" color={base.black}>
                  {subItem.label}
                </Typography>
                <Box className="submenu-icon">
                  <ArrowIcon color={base.black} />
                </Box>
              </ListItem>
            </Link>
          ))}
          {item.label === 'Services' && (
            <Link href="/case-study">
              <ListItem
                sx={{
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderBottom: `1px solid ${gray[400]}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  '&:hover': {
                    '& .submenu-text': {
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
                <Typography className="submenu-text" variant="fs16" color={base.black}>
                  Case Studies
                </Typography>
                <Box className="submenu-icon">
                  <ArrowIcon color={base.black} />
                </Box>
              </ListItem>
            </Link>
          )}
        </List>
      </Collapse>
    </List>
  );
};
