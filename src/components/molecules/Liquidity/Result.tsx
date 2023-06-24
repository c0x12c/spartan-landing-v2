import { base } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Container from '@/components/atoms/Container';
import Image from 'next/image';
import Phone from '@/assets/images/phone-liquidity.svg';

const items = [
  'Successfully launched PrideCard as a new mobile product',
  'Improved stability and user-friendliness of mobile applications',
  'Dramatically enhanced backend and infrastructure stability and maintainability',
  'Developed efficient tools for the support team, optimizing user complaint resolution',
];

const Result = () => {
  return (
    <Container>
      <Box display={'flex'} width={'100%'} justifyContent={'space-between'} pt={'80px'}>
        <Box display={'flex'} flexDirection={'column'} gap={'51px'}>
          <Box display={'flex'} flexDirection={'column'} gap={'32px'}>
            <Typography variant="fs80" color={base.black}>
              The Result
            </Typography>
            <Typography variant="fs16" maxWidth={'700px'}>
              We made significant achievements in the Liquidity Financial project, leading to
              remarkable outcomes and advancements. Here are the key accomplishments:We were
              impressed by their ability to seamlessly blend modern design elements with natural
              materials and surroundings, creating a vacation home that exceeded our expectations in
              every way
            </Typography>
          </Box>
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: '#E7B51D' }} />
                </ListItemIcon>
                <Typography variant="fs16" sx={{ fontWeight: 600, maxWidth: '442px' }}>
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Image src={Phone} alt="phone" />
      </Box>
    </Container>
  );
};
export default Result;
