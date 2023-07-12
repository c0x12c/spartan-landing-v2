import * as React from 'react';
import { Box } from '@mui/material';
import { Container, SubTitle, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import team1 from '@/assets/images/life-spartan/engineers-1.png';
import team2 from '@/assets/images/life-spartan/engineers-2.png';
import { gray } from '@/styles/colors';

interface ITeamEngineersProps {}

export const TeamEngineers: React.FunctionComponent<ITeamEngineersProps> = () => {
  const isTablet = useBreakpoint(BreakPoints.LG);
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isTablet ? '40px' : '100px'} bgcolor={gray[50]}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'41px'}>
          <SubTitle text="Our team" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Life at Spartan" data-aos="fade-up" data-aos-delay="300" />
        </Box>
      </Container>
      <Box display="flex" flexDirection={'column'} gap="24px">
        <Image src={team1} alt="team1" style={{ width: '100%', height: 'auto' }} />
        <Image src={team2} alt="team2" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
};
