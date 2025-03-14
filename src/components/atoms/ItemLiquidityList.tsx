import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ItemIcon from '@/assets/images/icons/tick-circle.svg';
import { base, gray } from '@/styles/colors';

interface ListItemProps {
  title: string;
  additionalText: string[];
}

const ListItem: React.FC<ListItemProps> = ({ title, additionalText }) => {
  return (
    <Box
      display="flex"
      alignItems="start"
      sx={{ padding: '12px 0' }}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Box
        sx={{
          background: base.yellow,
          height: '45px',
          minWidth: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '1000px',
          marginRight: '24px',
        }}
      >
        <Image src={ItemIcon} alt="icon" width={19} height={19} />
      </Box>
      <Box>
        <Typography component="p" variant="fs16" color={gray[700]} fontWeight={600} mb={1}>
          {title}
        </Typography>
        <ul>
          {additionalText.map((text, index) => (
            <li key={index}>
              <Typography
                fontWeight={400}
                variant="fs18"
                fontSize={{ xs: '14px', lg: '18px' }}
                component="span"
              >
                {text}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default ListItem;
