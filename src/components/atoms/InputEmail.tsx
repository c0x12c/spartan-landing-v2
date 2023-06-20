import { TextField, TextFieldProps } from '@mui/material';
import * as React from 'react';

interface IInputEmailProps {
  placeholder: string;
  styledColor: string;
}

const InputEmail: React.FunctionComponent<IInputEmailProps & TextFieldProps> = ({
  placeholder,
  styledColor,
  sx,
  ...props
}) => {
  const style = {
    ...{
      '& .MuiInputLabel-root': {
        color: styledColor,
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: styledColor,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: styledColor,
      },
    },
    ...sx,
  };
  return <TextField label={placeholder} type="email" variant="standard" sx={style} {...props} />;
};

export default InputEmail;
