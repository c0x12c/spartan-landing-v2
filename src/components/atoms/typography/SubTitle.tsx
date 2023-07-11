import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ISubTitleProps {
  text: string;
}

export const SubTitle: React.FunctionComponent<ISubTitleProps & TypographyProps> = ({
  text,
  ...props
}) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Typography
      variant={isMobile ? 'fs14' : 'fs18'}
      color={primary[500]}
      fontWeight={600}
      {...props}
      display="block"
    >
      {text}
    </Typography>
  );
};
