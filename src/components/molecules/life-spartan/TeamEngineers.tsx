import * as React from 'react';
import { Box } from '@mui/material';
import { Container, SubTitle, Title } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';

import team1 from '@/assets/images/life-spartan/our-team-1.png';
import team2 from '@/assets/images/life-spartan/our-team-2.png';
import team3 from '@/assets/images/life-spartan/our-team-3.png';
import team4 from '@/assets/images/life-spartan/our-team-4.png';
import team5 from '@/assets/images/life-spartan/our-team-5.png';
import team6 from '@/assets/images/life-spartan/our-team-6.png';
// import team7 from '@/assets/images/life-spartan/our-team-7.png';
import team8 from '@/assets/images/life-spartan/our-team-8.png';
import team9 from '@/assets/images/life-spartan/our-team-9.png';
import team10 from '@/assets/images/life-spartan/our-team-10.png';

import { gray } from '@/styles/colors';

interface ITeamEngineersProps {}

export const TeamEngineers: React.FunctionComponent<ITeamEngineersProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const dataItems = [
    { id: 'team-1', img: team1 },
    { id: 'team-2', img: team2 },
    { id: 'team-3', img: team3 },
    { id: 'team-4', img: team4 },
    { id: 'team-5', img: team5 },
    { id: 'team-6', img: team6 },
    // { id: 'team-7', img: team7 },
    { id: 'team-8', img: team8 },
    { id: 'team-9', img: team9 },
    { id: 'team-10', img: team10 },
  ];

  const renderItem = dataItems.map((item) => {
    return (
      <Box key={item.id}>
        <Image src={item.img} alt={item.id} style={{ height: 'auto' }} />
      </Box>
    );
  });

  React.useEffect(() => {
    const slider = document.querySelector('.team-items') as HTMLElement;
    let startX = 0;
    let isDragging = false;
    let scrollLeft = 0;

    if (slider && slider !== null) {
      slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDragging = false;
      });
      slider.addEventListener('mouseup', () => {
        isDragging = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  }, []);

  return (
    <Box py={isMobile ? '40px' : '100px'} bgcolor={gray[50]}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'41px'}>
          <SubTitle text="Our team" data-aos="fade-up" data-aos-delay="200" />
          <Title text="Life at Spartan" data-aos="fade-up" data-aos-delay="300" />
        </Box>
      </Container>
      <Box
        className="team-items"
        display="flex"
        gap="24px"
        px="24px"
        sx={{
          width: '100%',
          overflowX: 'visible',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          cursor: 'pointer',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {renderItem}
      </Box>
    </Box>
  );
};
