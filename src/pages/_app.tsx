import * as React from 'react';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createThemeByMode from '@/styles/muiTheme';
import { AppProps } from 'next/app';

import '@/styles/animations.css';

export type MyAppProps = AppProps;

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;
  const theme = responsiveFontSizes(createThemeByMode());

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
