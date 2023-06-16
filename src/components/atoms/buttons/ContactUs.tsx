import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowContact from '@/assets/images/Arrow-contact.svg';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';
import { base } from '@/styles/colors';
import { IBM_Plex_MonoFont } from '@/styles/muiTheme';

export function ContactUsButton({ mode, text }: { mode: 'light' | 'dark'; text: string }) {
  return (
    <>
      <Button
        variant={mode === 'light' ? 'outlined' : 'contained'}
        sx={{
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          borderRadius: '60.5811px',
          color: mode === 'light' ? base.white : base.black,
        }}
      >
        <Typography sx={{ fontSize: '12px', fontFamily: IBM_Plex_MonoFont.style }}>
          {text}
        </Typography>
        <Image src={mode === 'light' ? ArrowContact : ArrowDarkContact} alt="Company Logo" />
      </Button>
    </>
  );
}
