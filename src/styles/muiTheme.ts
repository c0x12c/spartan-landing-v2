import { createTheme, Theme } from '@mui/material/styles';
import React from 'react';
import { PaletteMode } from '@mui/material';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import * as colors from './colors';

export const ManropeFont = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const IBM_Plex_MonoFont = IBM_Plex_Mono({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fs16: React.CSSProperties;
    fs18: React.CSSProperties;
    fs20: React.CSSProperties;
    fs22: React.CSSProperties;
    fs26: React.CSSProperties;
    fs30: React.CSSProperties;
    fs32: React.CSSProperties;
    fs40: React.CSSProperties;
    fs44: React.CSSProperties;
    fs54: React.CSSProperties;
    fs80: React.CSSProperties;
    fs180: React.CSSProperties;
    fs240: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fs16: React.CSSProperties;
    fs18: React.CSSProperties;
    fs20: React.CSSProperties;
    fs22: React.CSSProperties;
    fs26: React.CSSProperties;
    fs30: React.CSSProperties;
    fs32: React.CSSProperties;
    fs40: React.CSSProperties;
    fs44: React.CSSProperties;
    fs54: React.CSSProperties;
    fs80: React.CSSProperties;
    fs180: React.CSSProperties;
    fs240: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fs16: true;
    fs18: true;
    fs20: true;
    fs22: true;
    fs26: true;
    fs30: true;
    fs32: true;
    fs40: true;
    fs44: true;
    fs54: true;
    fs80: true;
    fs180: true;
    fs240: true;
  }
}

const defaultFonts =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;';
const fonts = [ManropeFont.style.fontFamily, defaultFonts].join(', ');

// Create a theme instance.
const createThemeByMode = (): Theme => {
  return createTheme({
    palette: {
      mode: 'light' as PaletteMode,
      text: {
        primary: colors.gray[500],
      },
      primary: {
        main: colors.primary[500],
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            padding: 0,
            margin: 0,
            overflowX: 'hidden',
            scrollBehavior: 'smooth',
          },
          html: {
            overflow: 'auto',
            overflowX: 'hidden',
            padding: 0,
            margin: 0,
            scrollBehavior: 'smooth',
            fontFamily: fonts,
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
          '*': {
            boxSizing: 'border-box',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: IBM_Plex_MonoFont.style.fontFamily,
            fontWeight: IBM_Plex_MonoFont.style.fontWeight,
            fontStyle: 'normal',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '60.6px',
          },
        },
      },
    },
    typography: {
      allVariants: {
        fontFamily: ManropeFont.style.fontFamily,
        fontStyle: 'normal',
      },
      fs16: {
        fontSize: '16px',
        lineHeight: 1.31,
        fontWeight: 400,
      },
      fs18: {
        fontSize: '18px',
        lineHeight: 1.56,
        fontWeight: 400,
      },
      fs20: {
        fontSize: '20px',
        lineHeight: 1.5,
        fontWeight: 500,
      },
      fs22: {
        fontSize: '22px',
        lineHeight: 1.41,
        fontWeight: 600,
      },
      fs26: {
        fontSize: '26px',
        lineHeight: 1.5,
        fontWeight: 700,
      },
      fs30: {
        fontSize: '30px',
        lineHeight: 1.19,
        fontWeight: 700,
      },
      fs32: {
        fontSize: '32px',
        lineHeight: 1.25,
        fontWeight: 700,
      },
      fs40: {
        fontSize: '40px',
        lineHeight: 1.2,
        fontWeight: 700,
      },
      fs44: {
        fontSize: '44px',
        lineHeight: 1.45,
        fontWeight: 700,
      },
      fs54: {
        fontSize: '54px',
        lineHeight: 1.19,
        fontWeight: 700,
      },
      fs80: {
        fontSize: '80px',
        lineHeight: 1.15,
        fontWeight: 700,
      },
      fs180: {
        fontSize: '180px',
        lineHeight: 1.08,
        fontWeight: 800,
      },
      fs240: {
        fontSize: '240px',
        lineHeight: 1,
        fontWeight: 800,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 960,
        lg: 1200,
        xl: 1440,
        xxl: 1920,
      },
    },
  });
};

export default createThemeByMode;
