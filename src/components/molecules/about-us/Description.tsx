import { Container } from '@/components/atoms';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SubTitle, Title } from '@/components/atoms';
import { DescriptionImage } from '@/assets/images/about-us';
import Image from 'next/image';
import { base, primary } from '@/styles/colors';
import { gray } from '@/styles/colors';

export const Description = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Container>
      <Box pt={'100px'} pb={'200px'}>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'41px'}>
          <SubTitle text="About us" />
          <Title text="We are Spartan, a team of elite tech-savvy people!" maxWidth={'690px'} />
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ lg: 'row', xs: 'column-reverse' }}
          width={'100%'}
          gap={{ lg: '70px', xs: '41px' }}
          alignItems={'center'}
          position={'relative'}
        >
          <Image
            src={DescriptionImage}
            alt="Image with group of people"
            style={{ width: isTablet ? '100%' : '723px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <Typography>
            The company is based in the US but works with engineers from around the world,
            leveraging remote work to take advantage of cost savings and improve startups financial
            runway. <br />
            We unite individuals from all stages of software development, prioritizing the creation
            of a strong team and nurturing the growth of our engineers.
          </Typography>
          <Box
            display={'flex'}
            gap={'44px'}
            p={'44px 0 0 44px'}
            position={'absolute'}
            right={0}
            bottom={'-186px'}
            bgcolor={base.white}
            borderRadius={'8px 0 0 0'}
          >
            <Box
              p={'20px'}
              display={'flex'}
              flexDirection={'column'}
              gap={'14px'}
              border={`1px solid ${gray[200]}`}
              borderRadius={'8px'}
            >
              <Typography variant="fs16" color={base.black}>
                People
              </Typography>
              <Typography variant="fs60" color={primary[400]}>
                150+
              </Typography>
              <Typography variant="fs16" color={base.black}>
                Talent engineer work everyday
              </Typography>
            </Box>
            <Box
              p={'20px'}
              display={'flex'}
              flexDirection={'column'}
              gap={'14px'}
              border={`1px solid ${gray[200]}`}
              borderRadius={'8px'}
            >
              <Typography variant="fs16" color={base.black}>
                World offices
              </Typography>
              <Typography variant="fs60" color={primary[400]}>
                04
              </Typography>
              <Typography variant="fs16" color={base.black}>
                Talent engineer work everyday
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
