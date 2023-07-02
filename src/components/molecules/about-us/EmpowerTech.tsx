import { Container, Title } from '@/components/atoms';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import ImageEmpowerTech from '@/assets/images/about-us/EmpowerTech-image.jpg';
import Arrow from '@/assets/images/icons/arrow.svg';
import { base } from '@/styles/colors';
import { useTheme } from '@mui/system';

export const EmpowerTech = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Container>
      <Box
        display={'flex'}
        position={'relative'}
        pt={'100px'}
        pb={'100px'}
        mb={'64px'}
        flexDirection={{ xs: 'column-reverse', lg: 'row' }}
      >
        <Image
          src={ImageEmpowerTech}
          alt="group of people"
          style={{ width: isTablet ? '100%' : 'auto', objectFit: 'cover', objectPosition: 'top' }}
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
            textAlign={{ xs: 'center', lg: 'end' }}
          />
          <Typography width={{ xs: '100%', lg: '493px' }} textAlign={{ xs: 'center', lg: 'end' }}>
            At Spartan, we differentiate ourselves by placing a strong emphasis on the development
            and advancement of our engineering team. We are committed to cultivating a culture of
            growth and empowerment, enabling our engineers to excel and contribute to the success of
            our client&apos;s projects.
          </Typography>
          <Button
            variant="contained"
            endIcon={<Image src={Arrow} alt="arrow" />}
            sx={{
              width: 'fit-content',
            }}
          >
            Being next spartan
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
