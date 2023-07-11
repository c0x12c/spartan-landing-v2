import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { base, gray } from '@/styles/colors';

interface ICardWeDoProps {
  icon: StaticImageData;
  bgIcon: string;
  title: string;
  description: string;
}

export const CardWeDo: React.FunctionComponent<ICardWeDoProps> = ({
  icon,
  bgIcon,
  title,
  description,
}) => {
  return (
    <Box
      bgcolor="transparent"
      borderRadius="8px"
      border="1px solid"
      borderColor={gray[200]}
      p="20px"
      height="336px"
      display="flex"
      flexDirection="column"
      gap="20px"
      sx={{
        '&:hover': {
          bgcolor: base.white,
          borderColor: 'transparent',
          boxShadow: '0px 10px 47px 0px #EFEFEF',
          transition: 'all 0.2s',
        },
      }}
    >
      <Box
        bgcolor={bgIcon}
        width="72px"
        height="72px"
        borderRadius="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={icon} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Box display="flex" flexDirection="column" gap="12px">
        <Typography variant="fs24" fontWeight={600} color={base.black}>
          {title}
        </Typography>
        <Typography variant="fs16" color={gray[600]}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
