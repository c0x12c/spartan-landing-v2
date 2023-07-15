import { BodyText, Container, ProcessList, SubTitle, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import workProcessImage from '@/assets/images/services/work-process.png';
import Image from 'next/image';
import { ProcessType } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';

interface ISubServiceWorkingProcess {
  items: ProcessType[];
}

export const SubServiceWorkingProcess = ({ items }: ISubServiceWorkingProcess) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '100px'} bgcolor={gray[50]}>
      <Container>
        <Grid container spacing={isMobile ? 0 : '60px'}>
          <Grid item xs={12} lg={6}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={isMobile ? '12px' : '24px'}
              mb={'80px'}
            >
              <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
              <Title text="Work Process" data-aos="fade-up" data-aos-delay="300" />
              <BodyText
                text="Our process involves understanding your requirements for emerging technologies,
                designing the integration or solution, developing and testing, and deploying it. We
                provide ongoing support and updates to keep your applications at the forefront of
                innovation."
                data-aos="fade-up"
                data-aos-delay="300"
                sx={{ maxWidth: '437px', mt: isMobile ? '12px' : 0 }}
              />
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
