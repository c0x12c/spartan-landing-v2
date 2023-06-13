import * as React from 'react';
import { Box } from '@mui/material';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = ({ children, ...props }) => {
  return (
    <Box
      width="100%"
      margin="0px auto"
      {...props}
      sx={{
        maxWidth: {
          xl: '1216px',
          xs: '100%',
        },
        padding: {
          xl: 0,
          lg: '0 112px',
          md: '0 63px',
          sm: '0 48px',
          xs: '0 16px',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
