import { CardVertical, Container, SubTitle, Title } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import CodeCircle from '@/assets/images/icons/code-circle.svg';
import People from '@/assets/images/icons/people.svg';
import TaskSquare from '@/assets/images/icons/task-square.svg';
import Image from 'next/image';

interface IBenefitsProps {}

export const Benefits: React.FunctionComponent<IBenefitsProps> = () => {
  const dataBenefit = [
    {
      id: 'benefit-1',
      icon: <Image src={People} alt="Human element icon" />,
      title: 'Research',
      description:
        'Spartans is renowned for its affordable, reliable, and expert IT consulting services. We provide top-of-the-line technologies, software, and applications that help enterprises gain a competitive edge in the market.',
    },
    {
      id: 'benefit-2',
      icon: <Image src={CodeCircle} alt="Engineer Process icon" />,
      title: 'Research',
      description:
        'Years of refinement at various US  based startups have made our processes exceptionally robust. We employ rigorous code reviews and prioritize comprehensive automation to ensure the highest standards of quality, efficiency, and accuracy.',
    },
    {
      id: 'benefit-3',
      icon: <Image src={TaskSquare} alt="Hiring icon" />,
      title: 'Research',
      description:
        'Our hiring process is designed to attract the best talent in the industry. By offering competitive compensation and fostering a stimulating environment with intriguing and challenging projects, we attract and invest in top-tier engineers who can overcome any challenge.',
    },
  ];

  const renderItems = dataBenefit.map((item) => {
    return <CardVertical key={item.id} {...item} />;
  });

  return (
    <Box width={'100%'} p={'140px 0'} sx={{ backgroundColor: gray[100] }}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'64px'}>
          <SubTitle text="Benefit" textAlign={'center'} data-aos-delay="200" data-aos="fade-up" />
          <Title
            text="Fostering future tech innovators"
            textAlign={'center'}
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', lg: 'row' }}
          gap={'40px'}
        >
          {renderItems}
        </Box>
      </Container>
    </Box>
  );
};