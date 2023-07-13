import { base, gray } from '@/styles/colors';
import { PoppinsFont } from '@/styles/muiTheme';
import { Box, TextField, TextFieldProps, Typography, styled } from '@mui/material';

export const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    width: '100%',
    fontSize: '18px',
    fontFamily: PoppinsFont.style.fontFamily,
    lineHeight: 1.56,
  },
  '& .MuiInputBase-root': {
    padding: 0,
    backgroundColor: base.white,
    border: '1px solid',
    borderColor: gray[200],
    borderRadius: '8px',
    transition: 'none',
    boxShadow: 'none',
  },
  '& .MuiInputBase-root.Mui-focused': {
    backgroundColor: base.white,
    borderColor: gray[400],
    boxShadow: 'none',
  },
  '& .MuiInputBase-root .MuiInputAdornment-root p': {
    color: base.black,
  },
  '& .MuiInputBase-root.Mui-disabled': {
    opacity: 0.4,
  },
  input: {
    color: base.black,
    '&::placeholder': {
      color: gray[600],
    },
    '&[type=number]': {
      MozAppearance: 'textfield',
    },
    '&[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
});

interface ITextFieldWithLabel {
  title: string;
  id: string;
  isRequired?: boolean;
}

export const TextFieldWithLabel = ({
  title,
  id,
  isRequired = false,
  ...props
}: ITextFieldWithLabel & TextFieldProps) => {
  return (
    <Box>
      <Box component={'label'} htmlFor={id}>
        <Typography variant="fs14" color={gray[600]}>
          {title}{' '}
          {isRequired && (
            <Typography variant="fs14" color={base.red}>
              *
            </Typography>
          )}
        </Typography>
      </Box>
      <CustomTextField
        id={id}
        fullWidth
        inputProps={{ style: { padding: '12px 20px' } }}
        placeholder={title}
        {...props}
      />
    </Box>
  );
};
