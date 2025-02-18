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
    fs12: React.CSSProperties;
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
    fs56: React.CSSProperties;
    fs60: React.CSSProperties;
    fs64: React.CSSProperties;
    fs72: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fs12: React.CSSProperties;
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
    fs56: React.CSSProperties;
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
    fs56: true;
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
            padding: '0 !important',
            margin: 0,
            scrollBehavior: 'smooth',
            overflowX: 'hidden',
            /* Custom Scrollbar Styling */
            '&::-webkit-scrollbar': {
              width: '8px', // Set scrollbar width
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent', // Remove background color
              border: 'none', // Remove any border if it appears
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0, 0.5)', // Set thumb color
              border: 'none', // Remove any border on the thumb
              borderRadius: '4px', // Optional: rounded corners for the thumb
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#666', // Darker color on hover for better visibility
            },
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
            fontSize: '16px',
            lineHeight: 1.37,
            border: '1px solid',
            borderRadius: '8px',
            textTransform: 'none',
            padding: '14px 24px',
          },
          contained: {
            borderColor: 'transparent',
            backgroundColor: primary[400],
            color: base.white,
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
            padding: '12px 16px !important',
            fontSize: '14px',
            lineHeight: 1.43,
          },
        },
        variants: [
          {
            props: { variant: 'transparent' },
            style: {
              backgroundColor: 'transparent',
              color: base.white,
              borderColor: base.white,
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
      fs12: {
        fontSize: '12px',
        lineHeight: 1.5,
        fontWeight: 400,
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
      fs56: {
        fontSize: '56px',
        lineHeight: 1.2,
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
