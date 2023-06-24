import Container from '@/components/atoms/Container';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import ArowButton from '@/assets/images/Arrow-contact-dark.svg';
import { base } from '@/styles/colors';

const Consultation = () => {
  return (
    <Container>
      <Box pt={'45px'} display={'flex'} gap={'34px'} flexDirection={'column'} margin={'0 auto'}>
        <Typography
          variant="fs54"
          maxWidth={'629px'}
          margin={'0 auto'}
          textAlign={'center'}
          color={base.black}
        >
          If you intend to act, we are ready to help!
        </Typography>
        <Button
          variant="contained"
          sx={{ display: 'flex', gap: '24px', width: '300px', margin: '0 auto' }}
        >
          Order a consultation
          <Image src={ArowButton} alt="arrow" />
        </Button>
      </Box>
    </Container>
  );
};

export default Consultation;
