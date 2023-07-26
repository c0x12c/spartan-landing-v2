import { BodyText, Container, ProcessList, SubTitle, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import HiringProcessImage from '../../../assets/images/apply-job/hiring-process-image.svg';
import Image from 'next/image';
import { gray } from '@/styles/colors';
import { HiringProcessData } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';

const HiringProcess = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box p={{ md: '120px 0', xs: '40px 0' }} bgcolor={gray[50]}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={isMobile ? '12px' : '24px'}
          maxWidth={{ lg: '50%', xs: '100%' }}
          mb={{ xs: '24px', sm: '64px' }}
        >
          <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
          <Title
            text="Rigorous screening for 3% elite engineers"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <BodyText
            text="Drawing from our extensive experience interviewing candidates at renowned tech giants
            such as Google, Facebook, Uber, and Amazon"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ maxWidth: '576px', mt: isMobile ? '12px' : 0 }}
          />
        </Box>
        <Grid container display={'flex'} spacing={'60px'} alignItems={'center'}>
          <Grid item xs={12} lg={6}>
            <Image
              src={HiringProcessImage}
              alt="Hiring process image"
              style={{ width: '100%', height: 'auto' }}
              data-aos-delay="200"
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
