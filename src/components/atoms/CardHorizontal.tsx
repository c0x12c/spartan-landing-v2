import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ICardHorizontalProps {
  icon: React.ReactNode | StaticImageData;
  title: string;
  subTitle?: string;
  content: string | React.ReactNode;
}

export const CardHorizontal: React.FunctionComponent<ICardHorizontalProps> = ({
  icon,
  title,
  subTitle,
  content,
  ...props
}) => {
  return (
    <Box
      display="flex"
      padding="20px"
      flexDirection="column"
      gap="12px"
      border="1px solid"
      borderColor={gray[200]}
      borderRadius="8px"
      {...props}
      sx={{
        transition: 'all 0.5s',
        '&:hover': {
          boxShadow: '0px 10px 47px 0px #EFEFEF',
        },
      }}
    >
      <Box display="flex" alignItems="center" columnGap="14px">
        <Box
          width="48px"
          height="48px"
          padding="13px"
          borderRadius="48px"
          bgcolor={base.white}
          boxShadow="1px 1px 20px 0px rgba(0, 0, 0, 0.05)"
        >
          {React.isValidElement(icon) ? icon : <Image src={icon as StaticImageData} alt={title} />}
        </Box>
        <Typography variant="fs18" color={gray[900]} fontWeight={600}>
          {title}
        </Typography>
      </Box>
      {subTitle && (
        <Typography variant="fs24" color={base.black}>
          {subTitle}
        </Typography>
      )}
      {typeof content === 'string' ? (
        <Typography variant="fs16" color={gray[500]}>
          {content}
        </Typography>
      ) : (
        content
      )}
    </Box>
  );
};
