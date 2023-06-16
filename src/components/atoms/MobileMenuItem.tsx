import React, { useState } from 'react';
import { List, ListItem, Collapse, Typography, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { base, gray, primary } from '@/styles/colors';
import { MenuItemDataType } from '../molecules/Header';
import Image from 'next/image';
import ArrowButton from '@/assets/images/Arrow-contact-dark.svg';

type MobileMenuItemProps = {
  item: MenuItemDataType;
  updateMenuItem: (id: string) => void;
  isActive: boolean;
};

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, updateMenuItem, isActive }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const color = isActive ? primary[500] : base.black;

  return (
    <List component="nav">
      <ListItem
        onClick={() => {
          handleClick();
          updateMenuItem(item.id);
        }}
        sx={{
          padding: '10px 10px 12px',
          borderBottom: `1px solid ${gray[400]}`,
          maxWidth: '100%',
          fontWeight: 'bold',
          color: color,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="fs32">{item.label}</Typography>
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
            <ListItem
              key={index}
              sx={{
                padding: '4px 8px',
                borderBottom: `1px solid ${gray[400]}`,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ color: base.black, fontSize: '24px', lineHeight: 1.24, fontWeight: 600 }}
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
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default MobileMenuItem;
