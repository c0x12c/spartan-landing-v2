import * as React from 'react';
import { base, gray } from '@/styles/colors';
import { Box, Button, TextField } from '@mui/material';

interface IInputWButtonProps {}

export const InputWButton: React.FunctionComponent<IInputWButtonProps> = (props) => {
  return (
    <Box display="flex" alignItems="flex-end">
      <TextField
        label="Email address"
        type="email"
        variant="standard"
        fullWidth
        sx={{
          '& .MuiInputLabel-root': {
            color: gray[200],
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: gray[200],
          },
          '& .MuiInput-underline::before': {
            borderWidth: '1px',
            borderBottomColor: gray[60],
            transform: 'none',
          },
          '& .MuiInput-underline::after': {
            borderWidth: '1px',
            borderBottomColor: gray[60],
            transform: 'none',
          },
          '& .MuiInput-underline:before.Mui-focused': {
            borderWidth: '1px',
            borderBottomColor: gray[60],
            transform: 'none',
          },
        }}
      />
      <Button
        aria-label="submit"
        variant="contained"
        sx={{
          height: '50px',
          color: base.black,
          borderRadius: '8px 8px 0px 0px',
        }}
      >
        {'>'}
      </Button>
    </Box>
  );
};
