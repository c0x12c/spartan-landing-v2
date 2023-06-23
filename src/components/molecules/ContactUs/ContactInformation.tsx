import ContactInfo from '@/components/atoms/ContactInfo';
import Container from '@/components/atoms/Container';
import SubmitForm from '@/components/atoms/SubmitForm';
import { Box } from '@mui/material';

const ContactInformation = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '136px', paddingBottom: '44px' }}>
        <SubmitForm />
        <ContactInfo />
      </Box>
    </Container>
  );
};

export default ContactInformation;
