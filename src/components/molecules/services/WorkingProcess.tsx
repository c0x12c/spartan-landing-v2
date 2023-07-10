import { Container, ProcessList, SubTitle, Title } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import workProcessImage from '@/assets/images/services/work-process.png';
import Image from 'next/image';
import { WorkingProcessData } from '@/constants';

export const WorkingProcess = () => {
  return (
    <Box py="100px">
      <Container>
        <Grid container spacing={'60px'}>
          <Grid item xs={12} lg={6}>
            <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'80px'}>
              <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
              <Title text="Work  Process" data-aos="fade-up" data-aos-delay="300" />
              <Typography maxWidth={'437px'} variant="fs18" data-aos-delay="500" data-aos="fade-up">
                Discover our streamlined process for developing cutting-edge technology solutions
                that cater to your specific business needs. Join us on this journey of innovation
                and success.
              </Typography>
            </Box>
            <Image
              src={workProcessImage}
              alt="Work process image"
              style={{ width: '100%', height: 'auto' }}
              data-aos-delay="300"
              data-aos="flip-left"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ProcessList data={WorkingProcessData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
