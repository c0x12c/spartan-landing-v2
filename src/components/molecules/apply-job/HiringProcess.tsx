import { Container, SubTitle, Title } from '@/components/atoms';
import { Box, List, Typography } from '@mui/material';
import HiringProcessImage from '../../../assets/images/apply-job/hiring-process-image.svg';
import Image from 'next/image';
import { base, gray, primary } from '@/styles/colors';

const HiringProcess = () => {
  return (
    <Box p={'120px 0'} bgcolor={gray[50]}>
      <Container>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'24px'}
          maxWidth={{ lg: '50%', xs: '100%' }}
          mb={'64px'}
        >
          <SubTitle text="Process of work" data-aos="fade-up" data-aos-delay="200" />
          <Title
            text="Rigorous screening for 1% elite engineers"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Typography
            width={'576px'}
            variant="fs18"
            maxWidth={'100%'}
            data-aos-delay="500"
            data-aos="fade-up"
          >
            Drawing from our extensive experience interviewing candidates at renowned tech giants
            such as Google, Facebook, Uber, and Amazon
          </Typography>
        </Box>
        <Box
          display={'flex'}
          gap={'60px'}
          alignItems={'center'}
          flexDirection={{ lg: 'row', xs: 'column' }}
        >
          <Image
            src={HiringProcessImage}
            alt="Hiring process image"
            style={{ width: '100%', height: 'auto' }}
            data-aos-delay="300"
            data-aos="flip-left"
          />
          <List
            sx={{ maxWidth: { lg: 'calc((100% - 60px)/ 2)', xs: '100%' } }}
            data-aos-delay="400"
            data-aos="flip-right"
          >
            <ListItem
              number={'01'}
              title={'Resume Review'}
              description="We meticulously review each candidate's resume, paying attention to their skills, experiences, and achievements. We go beyond the surface level and dive deep into understanding their potential to contribute to our team"
            />
            <ListItem
              number={'02'}
              title={'Coding Interview'}
              description="The interview will last at least 1+ hour, including a mix of coding exercises, problem-solving challenges, and technical questions. The interview consists of only four categories, each with four possible scores. These categories are algorithms, coding, communication, and problem-solving."
            />
            <ListItem
              number={'03'}
              title={'Behavioral Interview'}
              description="We place great emphasis on the behavioral aspect of our candidates. We assess their alignment with our company values, teamwork skills, and ability to adapt to our dynamic work environment. This interview allows us to evaluate their cultural fit within our organization."
            />
            <ListItem
              number={'04'}
              title={'Decision Making'}
              description="Following the interviews, we provide constructive feedback to the candidate, highlighting their strengths and areas for improvement. If the outcome is positive, we extend an offer letter."
              isLast
            />
          </List>
        </Box>
      </Container>
    </Box>
  );
};

const ListItem = ({
  number,
  title,
  description,
  isLast,
}: {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}) => {
  return (
    <Box position="relative" p={{ xs: 0, lg: '0 16px' }} pb={{ xs: '44px' }}>
      <Box
        display="flex"
        p={{ xs: 0, lg: '0 16px' }}
        sx={{
          ':before': {
            content: "''",
            position: 'absolute',
            left: { xs: '20px', lg: '51px' },
            top: 0,
            bottom: 0,
            width: '2px',
            borderStyle: 'dashed',
            borderColor: primary[500],
            borderWidth: isLast ? 0 : '0 0 0 2px',
          },
        }}
      >
        <Typography
          variant="fs18"
          fontWeight={600}
          minWidth={'40px'}
          bgcolor={primary[500]}
          component={'p'}
          height={'40px'}
          color={base.white}
          borderRadius={'40px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mr={'20px'}
          zIndex={1}
        >
          {number}
        </Typography>
        <Box>
          <Typography
            variant="fs18"
            color={base.black}
            mb={'18px'}
            component={'p'}
            fontWeight={600}
          >
            {title}
          </Typography>
          <Typography variant="fs18" component={'p'}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HiringProcess;