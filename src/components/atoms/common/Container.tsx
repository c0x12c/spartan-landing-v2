import * as React from 'react';
import { Box } from '@mui/material';

interface IContainerProps {
  children: React.ReactNode;
}

export const Container: React.FunctionComponent<IContainerProps> = ({ children, ...props }) => {
  return (
    <Box
      width="100%"
      margin="0px auto"
      position={'relative'}
      {...props}
      sx={{
        maxWidth: {
          xl: '1208px',
          xs: '100%',
        },
        padding: {
          xs: '0 16px',
        },
      }}
    >
      {children}
    </Box>
  );
};
