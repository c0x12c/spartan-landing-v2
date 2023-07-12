import { createTheme, Theme } from '@mui/material/styles';
import React from 'react';
import { PaletteMode } from '@mui/material';
import { Poppins } from 'next/font/google';
import { base, gray, primary } from './colors';

export const PoppinsFont = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fs14: React.CSSProperties;
    fs16: React.CSSProperties;
    fs18: React.CSSProperties;
    fs20: React.CSSProperties;
    fs24: React.CSSProperties;
    fs28: React.CSSProperties;
    fs32: React.CSSProperties;
    fs36: React.CSSProperties;
    fs40: React.CSSProperties;
    fs48: React.CSSProperties;
    fs60: React.CSSProperties;
    fs64: React.CSSProperties;
    fs72: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fs14: React.CSSProperties;
    fs16: React.CSSProperties;
    fs18: React.CSSProperties;
    fs20: React.CSSProperties;
    fs24: React.CSSProperties;
    fs28: React.CSSProperties;
    fs32: React.CSSProperties;
    fs36: React.CSSProperties;
    fs40: React.CSSProperties;
    fs48: React.CSSProperties;
    fs60: React.CSSProperties;
    fs64: React.CSSProperties;
    fs72: React.CSSProperties;
  }

  export interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fs14: true;
    fs16: true;
    fs18: true;
    fs20: true;
    fs24: true;
    fs28: true;
    fs32: true;
    fs36: true;
    fs40: true;
    fs48: true;
    fs60: true;
    fs64: true;
    fs72: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    text: true;
    contained: true;
    outlined: true;
    transparent: true;
  }
}

const defaultFonts =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;';
const fonts = [PoppinsFont.style.fontFamily, defaultFonts].join(', ');

// Create a theme instance.
const createThemeByMode = (): Theme => {
  return createTheme({
    palette: {
      mode: 'light' as PaletteMode,
      text: {
        primary: gray[500],
      },
      primary: {
        main: primary[500],
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            padding: 0,
            margin: 0,
            scrollBehavior: 'smooth',
            overflowX: 'hidden',
          },
          html: {
            padding: 0,
            margin: 0,
            scrollBehavior: 'smooth',
            fontFamily: fonts,
            overflowX: 'hidden',
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
          '*': {
            padding: 0,
            margin: 0,
            boxSizing: 'border-box',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: PoppinsFont.style.fontFamily,
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          contained: {
            padding: '16px 24px',
            fontSize: '16px',
            border: '1px solid',
            borderColor: 'transparent',
            backgroundColor: primary[400],
            color: base.white,
            borderRadius: '8px',
            gap: '12px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: primary[400],
            },
          },
          outlinedPrimary: {
            padding: '16px 24px',
            fontSize: '16px',
            color: primary[400],
            backgroundColor: base.white,
            border: '1px solid',
            borderColor: primary[400],
            borderRadius: '8px',
            gap: '12px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: base.white,
            },
          },
          text: {
            padding: '8px 0',
            gap: '6px',
            fontSize: '16px',
            color: base.black,
            fontWeight: 600,
          },
          sizeSmall: {
            padding: '10px 18px !important',
          },
        },
        variants: [
          {
            props: { variant: 'transparent' },
            style: {
              backgroundColor: 'transparent',
              color: base.white,
              padding: '14px 24px',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: 1.1375,
              textTransform: 'uppercase',
              gap: '23px',
              border: '2px solid',
              borderColor: base.white,
              borderRadius: '8px',
            },
          },
        ],
      },
    },
    typography: {
      allVariants: {
        fontFamily: PoppinsFont.style.fontFamily,
        fontStyle: 'normal',
      },
      fs14: {
        fontSize: '14px',
        lineHeight: 1.57,
        fontWeight: 400,
      },
      fs16: {
        fontSize: '16px',
        lineHeight: 1.5,
        fontWeight: 400,
      },
      fs18: {
        fontSize: '18px',
        lineHeight: 1.5,
        fontWeight: 400,
      },
      fs20: {
        fontSize: '20px',
        lineHeight: 1.5,
        fontWeight: 500,
      },
      fs24: {
        fontSize: '24px',
        lineHeight: 1.5,
        fontWeight: 600,
      },
      fs28: {
        fontSize: '28px',
        lineHeight: 1.28,
        fontWeight: 600,
      },
      fs32: {
        fontSize: '32px',
        lineHeight: 1.375,
        fontWeight: 600,
      },
      fs36: {
        fontSize: '36px',
        lineHeight: 1.27,
        fontWeight: 600,
      },
      fs40: {
        fontSize: '40px',
        lineHeight: 1.4,
        fontWeight: 600,
      },
      fs48: {
        fontSize: '48px',
        lineHeight: 1.167,
        fontWeight: 600,
      },
      fs60: {
        fontSize: '60px',
        lineHeight: 1.1067,
        fontWeight: 600,
      },
      fs64: {
        fontSize: '64px',
        lineHeight: 1.25,
        fontWeight: 600,
      },
      fs72: {
        fontSize: '72px',
        lineHeight: 1.194,
        fontWeight: 600,
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
