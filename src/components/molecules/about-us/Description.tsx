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
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
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
            style={{ width: isTablet ? '100%' : '723px', objectFit: 'cover' }}
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
            gap={{ sm: '44px', xs: '12px' }}
            p={{ sm: '44px 0 0 44px', xs: '12px' }}
            position={'absolute'}
            right={0}
            bottom={'-186px'}
            bgcolor={base.white}
            borderRadius={'8px 0 0 0'}
          >
            <StatisticBox
              isMobile={isMobile}
              title="People"
              number="150+"
              subtitle="Talent engineer work everyday"
            />
            <StatisticBox
              isMobile={isMobile}
              title="World offices"
              number=" 04"
              subtitle="Talent engineer work everyday"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const StatisticBox = ({
  title,
  number,
  subtitle,
  isMobile,
}: {
  title: string;
  number: string;
  subtitle: string;
  isMobile: boolean;
}) => {
  return (
    <Box
      p={{ sm: '20px', xs: '12px' }}
      display={'flex'}
      flexDirection={'column'}
      gap={'14px'}
      border={`1px solid ${gray[200]}`}
      borderRadius={'8px'}
    >
      <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[900]} fontWeight={600}>
        {title}
      </Typography>
      <Typography variant={isMobile ? 'fs40' : 'fs60'} color={primary[400]}>
        {number}
      </Typography>
      <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[900]} fontWeight={600}>
        {subtitle}
      </Typography>
    </Box>
  );
};
