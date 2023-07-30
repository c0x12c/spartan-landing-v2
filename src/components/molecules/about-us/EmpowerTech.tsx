import { BodyText, Container, Title } from '@/components/atoms';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import ImageEmpowerTech from '@/assets/images/about-us/EmpowerTech-image.webp';
import Arrow from '@/assets/images/icons/arrow.svg';
import { base, gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const EmpowerTech = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Box bgcolor={isMobile ? base.white : gray[50]} py={isMobile ? '40px' : '100px'}>
      <Container>
        <Box
          display={'flex'}
          position={'relative'}
          flexDirection={{ xs: 'column', lg: 'row' }}
          rowGap="40px"
        >
          <Image
            src={ImageEmpowerTech}
            alt="group of people"
            style={{
              width: isTablet ? '100%' : 'auto',
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '8px',
            }}
            data-aos="fade-left"
            data-aos-delay="400"
          />
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'32px'}
            alignItems={{ lg: 'flex-end', xs: 'center' }}
            position={{ xs: 'static', lg: 'absolute' }}
            top={'50%'}
            p={{ xs: 0, lg: '60px 70px ' }}
            pr={'0px'}
            right={0}
            mb={{ xs: '60px', lg: 0 }}
            sx={{ transform: { lg: 'translate(0, -50%)' } }}
            width={{ xs: '100%', lg: '563px' }}
            boxSizing={{ xs: 'border-box', lg: 'content-box' }}
            bgcolor={base.white}
            borderRadius={'8px'}
          >
            <Title
              text="Focus on nurturing engineer's power"
              sx={{ textAlign: { xs: 'center', lg: 'end' } }}
            />
            <BodyText
              text="At Spartan, we differentiate ourselves by placing a strong emphasis on the development
              and advancement of our engineering team. We are committed to cultivating a culture of
              growth and empowerment, enabling our engineers to excel and contribute to the success
              of our client's projects."
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ width: { xs: '100%', lg: '493px' }, textAlign: { xs: 'center', lg: 'right' } }}
            />
            <Button
              variant="contained"
              endIcon={<Image src={Arrow} alt="arrow" />}
              size={isMobile ? 'small' : 'large'}
              sx={{
                width: 'fit-content',
              }}
            >
              Being next Spartan
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
