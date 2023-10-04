import { CardVertical, Container, SubTitle, Title } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { Box } from '@mui/material';
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
      title: 'Hands-on experience',
      description:
        'As an intern at Spartan, you’ll gain practical, hands-on experience by working on real projects and collaborating with experienced professionals. This invaluable experience will enhance your skills and boost your confidence, preparing you for a successful career in your chosen field.',
    },
    {
      id: 'benefit-2',
      icon: <Image src={CodeCircle} alt="Engineer Process icon" />,
      title: 'Real Salary',
      description:
        'We value your contributions and dedication as an intern and offer a competitive salary during your time at Spartan. This acknowledges your hard work and ensures you can focus on your internship without financial concerns.',
    },
    {
      id: 'benefit-3',
      icon: <Image src={TaskSquare} alt="Hiring icon" />,
      title: 'Job opportunity',
      description:
        'Joining our internship program opens the door to potential job opportunities within Spartan. We recognize and nurture talent, and outstanding interns may have the chance to transition into full-time positions, kickstarting a rewarding career journey with us.',
    },
  ];

  const renderItems = dataBenefit.map((item) => {
    return (
      <Box key={item.id} flex="1">
        <CardVertical {...item} />
      </Box>
    );
  });

  return (
    <Box width={'100%'} p={{ md: '140px 0', xs: '40px 0' }} sx={{ backgroundColor: gray[100] }}>
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
