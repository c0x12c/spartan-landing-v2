/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import hatSpartan from '@/assets/images/logo-hat-spartan.svg';

interface IBusinessItemProps {
  icon: any;
  textButton: string;
  title: string;
  content: React.ReactNode;
}

const BusinessItem: React.FunctionComponent<IBusinessItemProps> = ({
  icon,
  textButton,
  title,
  content,
}) => {
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Button
          startIcon={<Image src={icon} alt="icon" />}
          sx={{
            bgcolor: colors.primary[500],
            borderRadius: '57px',
            padding: '12.5px 54px',
            fontSize: '16px',
            lineHeight: 1.125,
            letterSpacing: '-0.13px',
            color: colors.base.white,
            border: '1px solid',
            borderColor: 'transparent',
            '&:hover': {
              bgcolor: colors.primary[500],
            },
          }}
        >
          {textButton}
        </Button>
        <Box
          mt="10px"
          height="64px"
          width="1px"
          bgcolor="transparent"
          border="1px dashed"
          borderColor={colors.primary[400]}
        />
        <Box display="flex" position="relative" mb="19px">
          <Box position="absolute" top="0" left="-45px">
            <Image src={hatSpartan} alt="hatSpartan" />
          </Box>
          <Typography variant="fs44" letterSpacing="-2px" color={colors.base.black} mt="23px">
            {title}
          </Typography>
        </Box>
        <Box textAlign="center">{content}</Box>
      </Box>
    </React.Fragment>
  );
};

export default BusinessItem;
