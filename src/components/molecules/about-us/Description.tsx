import { BodyText, Container } from '@/components/atoms';
import { Box, Typography } from '@mui/material';
import { SubTitle, Title } from '@/components/atoms';
import all_employee from '@/assets/images/team/all-employee-desktop.webp';
import Image from 'next/image';
import { base, primary } from '@/styles/colors';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const Description = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Container>
      <Box p={isMobile ? '40px 0' : '100px 0 160px'} position={'relative'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={isMobile ? '12px' : '24px'}
          mb={isMobile ? '32px' : '41px'}
        >
          <SubTitle text="#who" data-aos="fade-up" data-aos-delay="200" />
          <Title
            text="We are Spartan, a team of elite, tech-savvy people!"
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              maxWidth: '690px',
            }}
          />
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ lg: 'row', xs: 'column-reverse' }}
          width={'100%'}
          gap={{ md: '70px', xs: '32px' }}
          alignItems={'center'}
          data-aos-delay="500"
        >
          <Image
            src={all_employee}
            alt="Image with group of people"
            data-aos="fade-right"
            data-aos-delay="500"
            style={{
              width: isMobile ? '100%' : '723px',
              objectFit: isMobile ? 'contain' : 'cover',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
          <BodyText
            text="The company is based in the US but works with engineers worldwide, leveraging remote work to maximize cost savings and improve startups' financial runway.<br>We unite individuals from all stages of software development, prioritizing the creation of a strong team and nurturing the growth of our engineers."
            data-aos="fade-left"
            data-aos-delay="500"
          />
        </Box>
        <Box
          data-aos="fade-up-left"
          data-aos-delay="500"
          display={'flex'}
          gap={{ sm: '44px', xs: '12px' }}
          p={{ sm: '44px 0 0 44px', xs: '12px 0 0 0' }}
          position={isMobile ? 'unset' : 'absolute'}
          right={0}
          bottom={isMobile ? 'unset' : '0'}
          bgcolor={base.white}
          borderRadius={'8px 0 0 0'}
        >
          <StatisticBox isMobile={isMobile} title="Engineers" number="100+" />
          <StatisticBox isMobile={isMobile} title="World offices" number="02" />
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
  subtitle?: string;
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
      width={isMobile ? '100%' : '260px'}
    >
      <Typography variant={isMobile ? 'fs14' : 'fs16'} color={gray[900]} fontWeight={600}>
        {title}
      </Typography>
      <Typography variant={isMobile ? 'fs40' : 'fs60'} color={primary[400]}>
        {number}
      </Typography>
      {subtitle && (
        <Typography
          variant={isMobile ? 'fs14' : 'fs16'}
          color={gray[900]}
          fontWeight={600}
          visibility="hidden"
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
