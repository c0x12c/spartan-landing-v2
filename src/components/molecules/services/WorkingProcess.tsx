import { BodyText, Container, ProcessList, SubTitle, Title } from '@/components/atoms';
import { Box, Grid } from '@mui/material';
import workProcessImage from '@/assets/images/services/work-process.png';
import Image from 'next/image';
import { WorkingProcessData } from '@/constants';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const WorkingProcess = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '100px'}>
      <Container>
        <Grid container spacing={'60px'}>
          <Grid item xs={12} lg={6}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={isMobile ? 0 : '24px'}
              mb={isMobile ? 0 : '80px'}
            >
              <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
              <Title text="Work  Process" data-aos="fade-up" data-aos-delay="300" />
              <BodyText
                text={
                  'Discover our streamlined process for developing cutting-edge technology solutions that cater to your specific business needs. Join us on this  journey of innovation and success.'
                }
                data-aos="fade-up"
                data-aos-delay="500"
                sx={{
                  maxWidth: '437px',
                }}
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
            <ProcessList data={WorkingProcessData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
