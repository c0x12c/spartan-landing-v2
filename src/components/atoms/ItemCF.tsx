import { base, gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ItemIcon from '@/assets/images/icons/tick-circle.svg';

export const ItemCF = ({ title }: { title: string }) => {
  return (
    <Box display="flex" alignItems="start" data-aos="fade-up" data-aos-delay="200">
      <Box
        sx={{
          background: base.darkBlue,
          height: '31px',
          minWidth: '31px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '1000px',
          marginRight: '24px',
        }}
      >
        <Image src={ItemIcon} alt="icon" width={19} height={19} />
      </Box>
      <Typography component="p" variant="fs16" color={gray[700]} mb={1}>
        {title}
      </Typography>
    </Box>
  );
};
