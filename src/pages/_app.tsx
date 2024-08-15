import * as React from 'react';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createThemeByMode from '@/styles/muiTheme';
import { AppProps } from 'next/app';
import AOS from 'aos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/animations.css';
import '@/styles/index.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

export type MyAppProps = AppProps;

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;
  const theme = responsiveFontSizes(createThemeByMode());

  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: -50,
      duration: 800,
      delay: 200,
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    const routeChangeStart = () => {
      console.log('routeChangeStart');
    };
    const routeChangeComplete = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    const routeChangeError = (e: Error) => {
      console.error('routeChangeError', e);
    };
    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeError);
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeError);
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </ThemeProvider>
  );
};

export default MyApp;
