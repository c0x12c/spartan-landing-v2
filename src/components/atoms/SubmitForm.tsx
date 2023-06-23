import { gray } from '@/styles/colors';
import { Box, Button, TextField, Typography } from '@mui/material';
import ArrowSubmitForm from '../../assets/images/ArrowSubmitForm.png';
import Image from 'next/image';
import ArrowDark from '@/assets/images/Arrow-contact-dark.svg';

const SubmitForm = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, gap: '53px' }}>
      <Box sx={{ width: { lg: '36%', xs: '100%' } }}>
        <Typography variant="fs18" component={'p'}>
          Have a question about our services or want to get started on your design project?
          We&apos;re here to help!
        </Typography>
        <br />
        <Typography variant="fs18" component={'p'}>
          Fill out the contact form below and one of our team members will get back to you within 24
          hours. Alternatively, you can reach out to us via phone or email using the contact
          information provided below. We can&apos;t wait to hear from you!
        </Typography>
      </Box>

      <Box
        sx={{
          width: { lg: '64%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '44px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="fs80" sx={{ color: gray[850] }}>
            Submit Form
          </Typography>
          <Image src={ArrowSubmitForm} alt="arrow" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <TextField
            label="Your Name"
            type="text"
            variant="standard"
            required={true}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '18px', marginLeft: '10px', color: gray[850] },
            }}
            InputProps={{
              style: { paddingLeft: '10px', borderBottomColor: 'blue' },
            }}
          />
          <TextField
            label="Email"
            type="email"
            variant="standard"
            required={true}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '18px', marginLeft: '10px', color: gray[850] },
            }}
            InputProps={{
              style: { paddingLeft: '10px', borderBottomColor: 'blue' },
            }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            variant="standard"
            required={true}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '18px', marginLeft: '10px', color: gray[850] },
            }}
            InputProps={{
              style: { paddingLeft: '10px', borderBottomColor: 'blue' },
            }}
          />
          <TextField
            label="Your Message"
            type="text"
            variant="standard"
            required={true}
            InputLabelProps={{
              shrink: true,
              style: { fontSize: '18px', marginLeft: '10px', color: gray[850] },
            }}
            InputProps={{
              style: { paddingLeft: '10px', borderBottomColor: 'blue' },
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            gap: '22px',
            width: '210px',
            padding: '18px 40px',
            fontSize: '15px',
          }}
        >
          Submit now
          <Image src={ArrowDark} alt="arrow" height={16} width={16} />
        </Button>
      </Box>
    </Box>
  );
};

export default SubmitForm;
