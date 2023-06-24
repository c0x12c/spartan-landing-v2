import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import NextProjectImage from '../../../assets/images/next-project.svg';
import { base } from '@/styles/colors';
import Container from '@/components/atoms/Container';
import Arrow from '../../../assets/images/Arrow-contact.svg';

const NextProject = () => {
  return (
    <Container>
      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        borderRadius={'20px'}
        mb={'124px'}
        mt={'36px'}
      >
        <Image
          src={NextProjectImage}
          style={{ width: '64%', objectFit: 'cover', borderRadius: '20px 0px 0px 20px' }}
          alt="notebook image with map"
        />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          p={'70px 40px'}
          sx={{ background: base.black, borderRadius: '0px 20px 20px 0px' }}
          width={'36%'}
        >
          <Typography textTransform={'uppercase'} variant="fs32">
            Next project
          </Typography>
          <Box display={'flex'} width={'100%'} gap={'24px'} flexDirection={'column'}>
            <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
              <Typography variant="fs48" color={base.white}>
                Volta <br /> Wallet
              </Typography>
              <Image src={Arrow} alt="arrow" style={{ width: '32px', height: '32px' }} />
            </Box>
            <Typography variant="fs18">Discover more about our project here! </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NextProject;
