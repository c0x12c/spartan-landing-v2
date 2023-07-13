import { Container, ProcessList, SubTitle, Title } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import HiringProcessImage from '../../../assets/images/apply-job/hiring-process-image.svg';
import Image from 'next/image';
import { gray } from '@/styles/colors';
import { HiringProcessData } from '@/constants';

const HiringProcess = () => {
  return (
    <Box p={{ sm: '120px 0', xs: '40px 0' }} bgcolor={gray[50]}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'12px'}
          maxWidth={{ lg: '50%', xs: '100%' }}
          mb={{ xs: '24px', sm: '64px' }}
        >
          <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
          <Title
            text="Rigorous screening for 1% elite engineers"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Typography
            width={'576px'}
            variant="fs18"
            maxWidth={'100%'}
            data-aos-delay="500"
            data-aos="fade-up"
            mt={'12px'}
          >
            Drawing from our extensive experience interviewing candidates at renowned tech giants
            such as Google, Facebook, Uber, and Amazon
          </Typography>
        </Box>
        <Grid container display={'flex'} spacing={'60px'} alignItems={'center'}>
          <Grid item xs={12} lg={6}>
            <Image
              src={HiringProcessImage}
              alt="Hiring process image"
              style={{ width: '100%', height: 'auto' }}
              data-aos-delay="300"
              data-aos="flip-left"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ProcessList data={HiringProcessData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HiringProcess;
