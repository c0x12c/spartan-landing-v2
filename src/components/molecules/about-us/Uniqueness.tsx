import { CardHorizontal, Container } from '@/components/atoms';
import { Box } from '@mui/material';
import { SubTitle, Title } from '@/components/atoms';
import { StatisticImage } from '@/assets/images/about-us';
import Image from 'next/image';
import SubTitleImage from '@/assets/images/icons/subtitle.svg';
import StatsUpImage from '@/assets/images/icons/status-up.svg';
import MoneyImage from '@/assets/images/icons/money-recive.svg';
import SquareTaskImage from '@/assets/images/icons/task-square.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

export const Uniqueness = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Container>
      <Box
        display={'flex'}
        gap={isMobile ? '24px' : '55px'}
        flexDirection={{ lg: 'row', xs: 'column' }}
        py={isMobile ? '40px' : '100px'}
      >
        <Box
          maxWidth={{ lg: '44%', xs: '100%' }}
          display={'flex'}
          flexDirection={'column'}
          gap={'24px'}
          justifyContent={{ lg: 'start', xs: 'center' }}
        >
          <SubTitle
            text="#why"
            data-aos-delay="200"
            data-aos="fade-up"
            sx={{
              textAlign: 'left',
            }}
          />
          <Title
            text="Why do startups choose Spartan to solve their problems?"
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              textAlign: 'left',
            }}
          />
          <Image
            src={StatisticImage}
            alt="Image with statistics"
            style={{ margin: '0 auto', maxWidth: '100%' }}
            data-aos="zoom-in"
            data-aos-delay="800"
          />
        </Box>
        <Box
          width={'100%'}
          display={'flex'}
          flexDirection={'column'}
          gap={isMobile ? '16px' : '42px'}
          data-aos="flip-right"
          data-aos-delay="700"
        >
          <CardHorizontal
            title="Cross-Continental expertise"
            icon={SubTitleImage}
            content="We leverage our diverse and cross-continental expertise to deliver exceptional solutions to clients worldwide."
          />
          <CardHorizontal
            title="Strong US market experience"
            icon={StatsUpImage}
            content="Our team has extensive experience in the US market, having worked with numerous startups and established companies."
          />
          <CardHorizontal
            title="Cost-Effective Remote Model"
            icon={MoneyImage}
            content="Spartan offers a cost-effective remote model, harnessing the power of talent to provide high-quality engineering services at competitive rates."
          />
          <CardHorizontal
            title="Robust Engineering Processes"
            icon={SquareTaskImage}
            content="At Spartan, we follow robust engineering processes that have been refined over years of experience working with startups."
          />
        </Box>
      </Box>
    </Container>
  );
};
