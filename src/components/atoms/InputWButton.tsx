import * as React from 'react';
import { base, gray } from '@/styles/colors';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { addContact } from '@/service/brevoAPI';

interface IInputWButtonProps {}

type FormData = {
  email: string;
};

export const InputWButton: React.FunctionComponent<IInputWButtonProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const res = await addContact(data);
      const json = await res.json();
      if (res.ok) {
        toast.success('Your email has been subscribed!');
      } else {
        toast.error(`${json.message}!`);
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.log('Error', error);
    }
  };

  const handleError = (errorType: string | undefined) => {
    if (!errorType) return;
    if (errorType === 'required') {
      return 'Email is required!';
    }
    return 'Please provide valid email!';
  };

  return (
    <Box component="form" display="flex" alignItems="flex-start" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email address"
        type="email"
        variant="standard"
        fullWidth
        {...register('email', {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
        error={errors && errors.email ? true : false}
        helperText={errors && errors.email && handleError(errors.email.type as string)}
        sx={{
          '& .MuiInputLabel-root': {
            color: gray[200],
          },
          '& .MuiInputBase-input': {
            color: 'inherit',
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
        type="submit"
        aria-label="submit"
        variant="contained"
        sx={{
          height: '48px',
          color: base.black,
          borderRadius: '8px 8px 0px 0px',
          transition: 'background-color 0.3s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {'>'}
      </Button>
    </Box>
  );
};
