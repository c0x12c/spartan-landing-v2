import { Container, ProcessList, SubTitle, Title } from '@/components/atoms';
import { Box, Grid, Typography } from '@mui/material';
import workProcessImage from '@/assets/images/services/work-process.png';
import Image from 'next/image';
import { ProcessType } from '@/constants';

interface ISubServiceWorkingProcess {
  items: ProcessType[];
}

export const SubServiceWorkingProcess = ({ items }: ISubServiceWorkingProcess) => {
  return (
    <Box py="100px">
      <Container>
        <Grid container spacing={'60px'}>
          <Grid item xs={12} lg={6}>
            <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'80px'}>
              <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
              <Title text="Work  Process" data-aos="fade-up" data-aos-delay="300" />
              <Typography maxWidth={'437px'} variant="fs18" data-aos-delay="500" data-aos="fade-up">
                Our process involves understanding your requirements for emerging technologies,
                designing the integration or solution, developing and testing, and deploying it. We
                provide ongoing support and updates to keep your applications at the forefront of
                innovation.
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
            <ProcessList data={items} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
