import React, { SetStateAction, useState } from 'react';
import { List, ListItem, Collapse, Typography } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { base, gray, primary } from '@/styles/colors';
import { ManropeFont } from '../../styles/muiTheme';
import LinkButton from './buttons/ArrowButtonMobileMenu';

type DropdownItemProps = {
  title: string;
  subItems?: { label: string; href: string }[];
  activePage: string;
  handlePageChange: (page: SetStateAction<string>) => void;
};

type ItemProps = {
  title: string;
  subItems?: { label: string; href: string }[];
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  subItems,
  activePage,
  handlePageChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <List component="nav" sx={{ width: '90%', margin: '0 auto' }}>
      <ListItem
        onClick={() => {
          handleClick();
          handlePageChange(title);
        }}
        sx={{
          padding: '10px',
          borderBottom: `1px solid ${gray[400]}`,
          maxWidth: '100%',
          fontFamily: ManropeFont.style,
          fontWeight: 'bold',
          color: activePage === title ? primary[500] : base.black,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="fs32">{title}</Typography>
        {subItems && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems?.map((subItem, index) => (
            <ListItem
              key={index}
              sx={{
                marginLeft: '2rem',
                padding: '10px',
                borderBottom: `1px solid ${gray[400]}`,
                maxWidth: '90%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{ color: base.black, fontSize: '24px', lineHeight: 1.24, fontWeight: 600 }}
              >
                {subItem.label}
              </Typography>
              <LinkButton href={subItem.href} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

type DropdownListProps = {
  dropdownItems: ItemProps[];
  activePage: string;
  handlePageChange: (page: SetStateAction<string>) => void;
};

const DropdownList: React.FC<DropdownListProps> = ({
  dropdownItems,
  activePage,
  handlePageChange,
}) => {
  return (
    <>
      {dropdownItems.map((item, index) => (
        <DropdownItem
          key={index}
          title={item.title}
          subItems={item.subItems}
          activePage={activePage}
          handlePageChange={handlePageChange}
        />
      ))}
    </>
  );
};

export default DropdownList;
