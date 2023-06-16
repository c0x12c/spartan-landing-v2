import React, { useState, useEffect, useRef } from 'react';
import { Link, Typography, Box, ListItem } from '@mui/material';
import { base, gray, primary } from '@/styles/colors';
import { ContactUsButton } from './buttons';
import { SetStateAction } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import LinkButton from './buttons/ArrowButtonMobileMenu';

type MenuItem = {
  label: string;
  href: string;
  subItems?: {
    label: string;
    href: string;
  }[];
  isOpen: boolean;
};

const menuItems: MenuItem[] = [
  {
    label: 'Spartan',
    href: '/',
    isOpen: false,
  },
  {
    label: 'Services',
    href: '/services',
    subItems: [
      { label: 'IT Consulting', href: '/' },
      { label: 'Product Development', href: '/' },
      { label: 'Artificial Intelligence', href: '/' },
      { label: 'Data Platform', href: '/' },
      { label: 'IoT Development', href: '/' },
      { label: 'Case Study Intelligence', href: '/' },
    ],
    isOpen: false,
  },
  {
    label: 'Careers',
    href: '/careers',
    subItems: [
      { label: 'About us', href: '/' },
      { label: 'Life at Spartan', href: '/' },
      { label: 'Apply for Jobs', href: '/' },
      { label: 'Internship Program', href: '/' },
      { label: 'Ready To Join?', href: '/' },
    ],
    isOpen: false,
  },
];

export const HeaderNavigation = ({
  activePage,
  handlePageChange,
  mode,
}: {
  activePage: string;
  handlePageChange: (page: SetStateAction<string>) => void;
  mode: 'light' | 'dark';
}) => {
  const [menuItemsState, setMenuItemsState] = useState<MenuItem[]>(menuItems);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Clicked outside the menu, so close all submenus
        const updatedMenuItems = menuItemsState.map((item) => ({
          ...item,
          isOpen: false,
        }));
        setMenuItemsState(updatedMenuItems);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuItemsState]);

  const toggleSubMenu = (index: number) => {
    const updatedMenuItems = menuItemsState.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      } else {
        return {
          ...item,
          isOpen: false,
        };
      }
    });
    setMenuItemsState(updatedMenuItems);
  };

  return (
    <Box sx={{ display: 'flex', gap: '44px' }}>
      <nav style={{ display: 'flex', alignItems: 'center' }} ref={menuRef}>
        {menuItemsState.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href}
              onClick={() => handlePageChange(item.label)}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                marginRight: '8px',
                ':before': {
                  content: "'/'",
                  marginRight: '16px',
                  marginLeft: '16px',
                  color: gray[300],
                },
                ':first-child:before': {
                  display: 'none',
                },
              }}
            >
              <Typography
                variant="fs18"
                sx={{
                  color:
                    activePage === item.label
                      ? primary[500]
                      : mode === 'light'
                      ? gray[200]
                      : base.black,
                }}
              >
                {item.label}
              </Typography>
            </Link>
            {item.subItems && (
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                {item.isOpen ? (
                  <ExpandLess
                    onClick={() => toggleSubMenu(index)}
                    sx={{ color: mode === 'light' ? base.white : base.black }}
                  />
                ) : (
                  <ExpandMore
                    onClick={() => toggleSubMenu(index)}
                    sx={{ color: mode === 'light' ? base.white : base.black }}
                  />
                )}
                {item.isOpen && (
                  <ul
                    style={{
                      position: 'absolute',
                      top: '100%',
                      background: base.white,
                      padding: '20px 32px 32px',
                      width: 'max-content',
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <ListItem
                          sx={{
                            padding: '10px',
                            borderBottom: `1px solid ${gray[400]}`,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography
                            variant="fs18"
                            sx={{ color: base.black, fontWeight: 700, paddingRight: '30px' }}
                          >
                            {subItem.label}
                          </Typography>
                          <LinkButton href={subItem.href} />
                        </ListItem>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </nav>
      <ContactUsButton mode={mode} text="Contact Us" />
    </Box>
  );
};
