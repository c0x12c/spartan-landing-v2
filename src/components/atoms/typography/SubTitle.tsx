import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { primary } from '@/styles/colors';

interface ISubTitleProps {
  text: string;
}

export const SubTitle: React.FunctionComponent<ISubTitleProps & TypographyProps> = ({
  text,
  ...props
}) => {
  return (
    <Typography variant="fs18" color={primary[500]} fontWeight={600} {...props} display="block">
      {text}
    </Typography>
  );
};
