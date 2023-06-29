import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { gray } from '@/styles/colors';

interface ITitleProps {
  text: string;
}

export const Title: React.FunctionComponent<ITitleProps & TypographyProps> = ({
  text,
  ...props
}) => {
  return (
    <Typography variant="fs60" color={gray[800]} {...props}>
      {text}
    </Typography>
  );
};
