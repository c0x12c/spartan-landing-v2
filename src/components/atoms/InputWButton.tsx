import * as React from 'react';
import { base, gray } from '@/styles/colors';
import { Box, Button, TextField } from '@mui/material';
import { Check, Clear } from '@mui/icons-material'; // Імпортуємо іконки Check та Clear
import { addContact } from '@/service/braveAPI';

interface IInputWButtonProps {}

export const InputWButton: React.FunctionComponent<IInputWButtonProps> = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsSubmitted(false);
    setIsValidEmail(true);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    addContact({ email });
    setIsSubmitted(true);
    setEmail('');
    setIsValidEmail(true);
  };

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <Box display="flex" alignItems="flex-end">
      <TextField
        label="Email address"
        type="email"
        variant="standard"
        fullWidth
        value={email}
        onChange={handleInputChange}
        error={!isValidEmail}
        sx={{
          '& .MuiInputLabel-root': {
            color: gray[200],
          },
          '& .MuiInputBase-input': {
            color: isValidEmail ? 'inherit' : 'red',
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
        onClick={handleSubmit}
        disabled={isSubmitted || !isValidEmail}
        sx={{
          height: '50px',
          color: base.black,
          borderRadius: '8px 8px 0px 0px',
          transition: 'background-color 0.3s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSubmitted ? (
          <Check fontSize="inherit" sx={{ color: base.black }} />
        ) : isValidEmail ? (
          '>'
        ) : (
          <Clear fontSize="inherit" sx={{ color: base.black }} />
        )}
      </Button>
    </Box>
  );
};
