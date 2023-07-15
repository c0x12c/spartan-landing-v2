import * as React from 'react';
import { SxProps, Theme, Typography } from '@mui/material';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ITitleProps {
  text: string;
  sx?: SxProps<Theme>;
}

export const Title: React.FunctionComponent<ITitleProps> = ({ text, sx, ...props }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Typography
      component="h2"
      variant={isMobile ? 'fs28' : 'fs48'}
      color={gray[800]}
      display="block"
      sx={sx}
      {...props}
    >
      {text}
    </Typography>
  );
};
