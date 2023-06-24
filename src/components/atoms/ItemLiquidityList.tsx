import React, { useState } from 'react';
import { Button, Collapse, Box, ListItemButton, IconButton, Typography } from '@mui/material';
import ItemIcon from '../../assets/images/tick-circle.svg';
import Image from 'next/image';
import expand from '@/assets/images/expand.svg';
import { base, gray } from '@/styles/colors';

interface ListItemProps {
  title: string;
  additionalText: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ title, additionalText }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box borderBottom={`${!open ? `1px solid ${gray[700]}` : 0}`} justifyContent={'space-between'}>
      <ListItemButton
        onClick={handleToggle}
        sx={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between' }}
      >
        <Box display={'flex'}>
          <Box
            sx={{
              background: '#E7B51D',
              height: '45px',
              width: '45px',
              display: ' flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '1000px',
              marginRight: '24px',
            }}
          >
            <Image src={ItemIcon} alt="icon" width={19} />
          </Box>
          <Typography component={'p'} variant="fs28" color={gray[700]}>
            {title}
          </Typography>
        </Box>

        <Button
          onClick={handleToggle}
          aria-expanded={open}
          aria-label="Toggle additional text"
          endIcon={
            <IconButton
              aria-label="expand"
              size="large"
              sx={{
                color: base.black,
                border: '1px solid',
                borderColor: '#E7B51D',
              }}
            >
              <Image src={expand} alt="expand" />
            </IconButton>
          }
        />
      </ListItemButton>
      <Collapse in={open}>
        <div>{additionalText}</div>
      </Collapse>
    </Box>
  );
};

export default ListItem;
