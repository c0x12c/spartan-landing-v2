import { useTheme, useMediaQuery } from '@mui/material';

export enum BreakPoints {
  'XXL' = 'xxl',
  'XL' = 'xl',
  'LG' = 'lg',
  'MD' = 'md',
  'SM' = 'sm',
  'XS' = 'xs',
}

export const useBreakpoint = (breakpoint: BreakPoints) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};
