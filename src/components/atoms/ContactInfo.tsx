import { Box, Link, TextField, Typography, createTheme, useMediaQuery } from '@mui/material';
import ContactInfoImageLarge from '@/assets/images/ContactInfoLarge.png';
import ContactInfoImage from '@/assets/images/ContactInfo.png';
import Image from 'next/image';
import { base, gray } from '@/styles/colors';
import Linkedin from '../../assets/images/linkedin.svg';
import Twitter from '../../assets/images/twitter.svg';
import Facebook from '../../assets/images/facebook.svg';

const ContactInfo = () => {
  const theme = createTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, gap: '80px' }}>
      <Image
        src={isLargeScreen ? ContactInfoImageLarge : ContactInfoImage}
        alt="Contact information"
        style={{ maxWidth: '100%' }}
      />
      <Box sx={{ width: '100%', position: 'relative' }}>
        <Typography component={'p'} variant="fs80" sx={{ color: gray[850], marginBottom: '67px' }}>
          Contact Info
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <TextField
            label="Email"
            defaultValue="info@spartan.com"
            InputProps={{
              readOnly: true,
              style: {
                paddingBottom: '17px',
                paddingTop: '4px',
                color: gray[850],
                fontWeight: 600,
                fontSize: '22px',
              },
            }}
            variant="standard"
            sx={{ width: '100%' }}
            InputLabelProps={{
              style: { fontSize: '18px', color: gray[850] },
            }}
          />
          <TextField
            label="Phone"
            defaultValue="(123) 456-7890"
            InputProps={{
              readOnly: true,
              style: {
                paddingBottom: '17px',
                paddingTop: '4px',
                color: gray[850],
                fontWeight: 600,
                fontSize: '22px',
              },
            }}
            variant="standard"
            sx={{ width: '100%' }}
            InputLabelProps={{
              style: { fontSize: '18px', color: gray[850] },
            }}
          />
        </Box>
        <Box sx={{ marginTop: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              position: { lg: 'absolute', xs: 'static' },
              marginTop: { xs: '60px', lg: '0px' },
              bottom: 0,
            }}
          >
            <Link
              sx={{
                width: '20px',
                height: '20px',
                backgroundColor: base.grey,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={Linkedin} alt="Linkedin" style={{ width: '11px' }} />
            </Link>
            <Link
              sx={{
                width: '20px',
                height: '20px',
                backgroundColor: base.grey,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={Facebook} alt="Facebook" style={{ width: '6px' }} />
            </Link>
            <Link
              sx={{
                width: '20px',
                height: '20px',
                backgroundColor: base.grey,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={Twitter} alt="Twitter" style={{ width: '11px' }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfo;
