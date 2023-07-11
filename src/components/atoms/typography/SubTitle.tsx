import * as React from 'react';
import { SxProps, Theme, Typography } from '@mui/material';
import { primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ISubTitleProps {
  text: string;
  sx?: SxProps<Theme>;
}

export const SubTitle: React.FunctionComponent<ISubTitleProps> = ({ text, sx, ...props }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Typography
      variant={isMobile ? 'fs14' : 'fs18'}
      color={primary[500]}
      fontWeight={600}
      display="block"
      sx={sx}
      {...props}
    >
      {text}
    </Typography>
  );
};
