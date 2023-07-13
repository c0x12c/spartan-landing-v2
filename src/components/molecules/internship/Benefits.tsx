import { BodyText, CardVertical, Container, SubTitle, Title } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { Box } from '@mui/material';
import CodeCircle from '@/assets/images/icons/code-circle.svg';
import People from '@/assets/images/icons/people.svg';
import TaskSquare from '@/assets/images/icons/task-square.svg';
import Image from 'next/image';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IBenefitsProps {}

export const Benefits: React.FunctionComponent<IBenefitsProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.SM);
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
    <Box width={'100%'} p={{ sm: '140px 0', xs: '40px 0' }} sx={{ backgroundColor: gray[100] }}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={{ sm: '64px', xs: '24px' }}>
          <SubTitle
            text="Benefit"
            data-aos-delay="200"
            data-aos="fade-up"
            sx={{
              textAlign: 'center',
            }}
          />
          <Title
            text="Fostering future tech innovators"
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              textAlign: 'center',
            }}
          />
          {isMobile && (
            <BodyText text="We prioritize our employees` well-being and professional growth. Enjoy competitive compensation, comprehensive benefits, and ongoing opportunities for learning and development. Join our team and experience the rewarding benefits of being a Spartan." />
          )}
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
