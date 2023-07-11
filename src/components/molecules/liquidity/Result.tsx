import { base } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Container } from '@/components/atoms/common/Container';
import Image from 'next/image';
import ResultImage from '@/assets/images/case-liquidity/result-image.svg';

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
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        pt={'80px'}
        gap={{ xs: '40px', md: '0' }}
      >
        <Box display={'flex'} flexDirection={'column'} gap={'51px'}>
          <Box display={'flex'} flexDirection={'column'} gap={'32px'}>
            <Typography variant="fs48" color={base.black} data-aos="fade-up" data-aos-delay="200">
              The Result
            </Typography>
            <Typography variant="fs18" maxWidth={'700px'} data-aos="fade-up" data-aos-delay="300">
              We made significant achievements in the Liquidity Financial project, leading to
              remarkable outcomes and advancements. Here are the key accomplishments:We were
              impressed by their ability to seamlessly blend modern design elements with natural
              materials and surroundings, creating a vacation home that exceeded our expectations in
              every way
            </Typography>
          </Box>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} data-aos="fade-right" data-aos-delay="200">
                <ListItemIcon sx={{ minWidth: '18px' }}>
                  <FiberManualRecordIcon style={{ color: '#E7B51D', width: '8px' }} />
                </ListItemIcon>
                <Typography variant="fs16" sx={{ fontWeight: 600, maxWidth: '520px' }}>
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
