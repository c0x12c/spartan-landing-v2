import { base } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Image from 'next/image';
import ResultImage from '@/assets/images/case-liquidity/result-image.webp';
import { BodyText, Container, Title } from '@/components/atoms';

const items = [
  'Successfully launched PrideCard as a new mobile product',
  'Improved stability and user-friendliness of mobile applications',
  'Dramatically enhanced backend and infrastructure stability and maintainability',
  'Developed efficient tools for the support team, optimizing user complaint resolution',
];

const Result = () => {
  return (
    <Container>
      <Box
        display={'flex'}
        width={'100%'}
        justifyContent={{ md: 'space-between', xs: 'center' }}
        alignItems={{ xs: 'center' }}
        flexDirection={{ xs: 'column', md: 'row' }}
        py={{ xs: '40px', lg: '80px' }}
        gap={{ xs: '40px', md: '0' }}
      >
        <Box display={'flex'} flexDirection={'column'} gap={{ xs: '24px', lg: '44px' }}>
          <Box display={'flex'} flexDirection={'column'} gap={{ xs: '24px', lg: '32px' }}>
            <Title
              text="The Result"
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{ color: base.black, mb: { md: '32px', xs: '24px' } }}
            />
            <BodyText
              sx={{ maxWidth: '700px' }}
              text="We made significant achievements in the Liquidity Financial project, leading to
              remarkable outcomes and advancements. Here are the key accomplishments: <br /> We were
              impressed by their ability to seamlessly blend modern design elements with natural
              materials and surroundings, creating a vacation home that exceeded our expectations in
              every way"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </Box>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} data-aos="fade-right" data-aos-delay="200">
                <ListItemIcon sx={{ minWidth: '18px' }}>
                  <FiberManualRecordIcon style={{ color: '#E7B51D', width: '8px' }} />
                </ListItemIcon>
                <Typography
                  variant="fs16"
                  fontSize={{ xs: '14px', lg: '16px' }}
                  sx={{ fontWeight: 600, maxWidth: '520px' }}
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Image
          src={ResultImage}
          alt="phone"
          style={{ maxWidth: '100%' }}
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </Box>
    </Container>
  );
};
export default Result;
