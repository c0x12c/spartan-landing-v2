import { Button, ButtonProps } from '@mui/material';
import * as React from 'react';
import * as colors from '@/styles/colors';

interface ITagProps {
  textTag: string;
}

const Tag: React.FunctionComponent<ITagProps & ButtonProps> = ({ textTag, sx, ...props }) => {
  const styleTag = {
    ...{
      p: '10px 43.5px',
      border: '1px solid',
      borderColor: colors.primary[700],
      color: colors.primary[700],
      fontSize: '14px',
      borderRadius: '40px',
      letterSpacing: '-0.13px',
    },
    ...sx,
  };
  return (
    <Button sx={styleTag} {...props}>
      {textTag}
    </Button>
  );
};

export default Tag;
