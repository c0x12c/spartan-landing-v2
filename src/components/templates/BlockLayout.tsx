import { Stack, SxProps, Theme } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export const BlockLayout: FC<Props> = ({ children, sx }) => {
  return (
    <Stack
      margin="auto"
      width={'100%'}
      maxWidth={1440}
      sx={{
        paddingX: {
          xs: 2,
          md: 5,
          lg: 15,
        },
        paddingY: {
          xs: 5,
          md: 6,
          lg: 10,
        },
        gap: {
          xs: 10,
          sm: 13,
        },
        ...(sx ?? {}),
      }}
    >
      {children}
    </Stack>
  );
};
