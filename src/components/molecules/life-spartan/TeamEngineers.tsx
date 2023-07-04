import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Container, SubTitle, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import team1 from '@/assets/images/life-spartan/engineers-1.png';
import team2 from '@/assets/images/life-spartan/engineers-2.png';

interface ITeamEngineersProps {}

export const TeamEngineers: React.FunctionComponent<ITeamEngineersProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isTablet ? '40px' : '100px'}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'41px'}>
          <Box textAlign={isMobile ? 'center' : 'left'}>
            <SubTitle text="Board of leading" data-aos="fade-up" data-aos-delay="200" />
          </Box>
          <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} gap={'24px'}>
            <Box maxWidth="675px" textAlign={isMobile ? 'center' : 'left'}>
              <Title
                text="Our elite founding team of Engineers"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Box>
            <Typography
              textAlign={isMobile ? 'center' : 'left'}
              component={'p'}
              maxWidth={{ md: '435px', xs: '100%' }}
              m={'0 auto'}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              With a diverse range of expertise and a shared passion for innovation, we work
              together seamlessly to bring your ideas to life. Join us on this journey of success
              and let our team be your catalyst for growth.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box display="flex" flexDirection={'column'} gap="24px">
        <Image src={team1} alt="team1" style={{ width: '100%', height: 'auto' }} />
        <Image src={team2} alt="team2" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
};
