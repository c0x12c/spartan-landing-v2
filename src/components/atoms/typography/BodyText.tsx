import * as React from 'react';
import { SxProps, Theme, Typography } from '@mui/material';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IBodyTextProps {
  text: string;
  sx?: SxProps<Theme>;
}

export const BodyText: React.FunctionComponent<IBodyTextProps> = ({ text, sx, ...props }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const arrayStr = text.split('\\n').filter((item) => item !== '');

  return (
    <Typography
      component="p"
      variant={isMobile ? 'fs14' : 'fs18'}
      color={gray[600]}
      display="block"
      letterSpacing={isMobile ? '0.21px' : 'normal'}
      sx={sx}
      {...props}
    >
      {arrayStr.map((item) => {
        return (
          <React.Fragment key={item}>
            {item} <br />
          </React.Fragment>
        );
      })}
    </Typography>
  );
};