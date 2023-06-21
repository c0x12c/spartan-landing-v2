import Container from '@/components/atoms/Container';
import { base, gray, primary } from '@/styles/colors';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import ClockIcon from '@/assets/images/ClockIcon.svg';
import outerLinkSmall from '@/assets/images/outer-link-small.svg';

const offices = [
  {
    clockTime: '03:05',
    country: 'USA',
    location: 'Los Angeles',
    address: '4131 Pheasant Trail Ct #5 Arlington Heights, IL 60004',
    phoneNumber: '+1 872-225-30-73',
  },
  {
    clockTime: '03:05',
    country: 'VN',
    location: 'Da Nang',
    address: '51 Tran Van Tru, Binh Hien, Hai Chau, Da Nang, Vietnam',
    phoneNumber: '+84 872-225-30-73',
  },
  {
    clockTime: '03:05',
    country: 'UA',
    location: 'Los Angeles',
    address: '4131 Pheasant Trail Ct #5 Arlington Heights, IL 60004',
    phoneNumber: '+1 872-225-30-73',
  },
  {
    clockTime: '03:05',
    country: 'CO',
    location: 'Los Angeles',
    address: '4131 Pheasant Trail Ct #5 Arlington Heights, IL 60004',
    phoneNumber: '+1 872-225-30-73',
  },
];

const TableOffices = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          gap: '38px',
          paddingBottom: '79px',
          flexDirection: { xl: 'row', xs: 'column' },
        }}
      >
        <Typography
          variant="fs54"
          sx={{
            width: { xl: '21%', xs: '100%' },
            color: gray[800],
            textAlign: { lg: 'center', xl: 'start' },
          }}
        >
          Peek into our offices
        </Typography>
        <List sx={{ width: { xl: '79%', xs: '100%' } }}>
          {offices.map((office, index) => (
            <ListItem
              key={index}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                padding: '25px 0',
                justifyContent: 'space-between',
                borderTop: `1px solid ${gray[400]}`,
                borderBottom: index === offices.length - 1 ? `1px solid ${gray[400]}` : 'none',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '24px',
                  left: '12px',
                  display: 'flex',
                  gap: '12px',
                }}
              >
                {' '}
                <Image src={ClockIcon} alt="Clock" />
                <Typography
                  sx={{ fontSize: '14px', fontWeight: 600, lineHeight: '20px', color: gray[70] }}
                >
                  {office.clockTime}
                </Typography>
              </Box>
              <Typography
                variant="fs32"
                sx={{ color: base.black, marginLeft: '125px', fontWeight: 700 }}
                component={'p'}
              >
                {office.country},{' '}
                <Typography sx={{ fontWeight: 400 }} variant="fs32" component={'span'}>
                  {office.location}
                </Typography>
              </Typography>
              <Box sx={{ display: 'flex', gap: '44px' }}>
                {/* <Box>
                  <Typography variant="fs16" component={'p'} sx={{ color: base.black }}>
                    {office.address}
                  </Typography>
                  <Typography
                    variant="fs16"
                    component={'p'}
                    sx={{ color: base.black, fontWeight: 600 }}
                  >
                    {office.phoneNumber}
                  </Typography>
                </Box> */}

                <IconButton
                  aria-label="learn-more"
                  size="large"
                  sx={{
                    border: '1px solid',
                    borderColor: primary[500],
                    height: '40px',
                  }}
                >
                  <Image src={outerLinkSmall} alt="outerLinkSmall" />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TableOffices;
