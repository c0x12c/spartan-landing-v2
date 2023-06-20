import { Box } from '@mui/material';
import Hero from '../molecules/ContactUs/Hero';
import MainTemplate from '../templates/MainTemplate';
import ContactInformation from '../molecules/ContactUs/ContactInformation';
import OurOffices from '../molecules/ContactUs/OurOffices';
import TableOffices from '../molecules/ContactUs/TableOffices';

interface IContactUsPageProps {}

const ContactUsPage: React.FunctionComponent<IContactUsPageProps> = () => {
  return (
    <MainTemplate>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
        <Hero />
        <ContactInformation />
        <OurOffices />
        <TableOffices />
      </Box>
    </MainTemplate>
  );
};

export default ContactUsPage;
