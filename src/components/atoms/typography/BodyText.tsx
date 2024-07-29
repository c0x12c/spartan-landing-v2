import * as React from 'react';
import { SxProps, Theme, Typography } from '@mui/material';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IBodyTextProps {
  text: string;
  sx?: SxProps<Theme>;
}

export const BodyText: React.FunctionComponent<IBodyTextProps> = ({ text, sx, ...props }) => {
  const isIphone = useBreakpoint(BreakPoints.SM);

  return (
    <Typography
      component="p"
      variant={isIphone ? 'fs16' : 'fs20'}
      color={gray[600]}
      display="block"
      letterSpacing={isIphone ? '0.21px' : 'normal'}
      sx={sx}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};
