import { CardVertical, Container, SubTitle, Title } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { Box, Typography } from '@mui/material';
import CodeCircle from '@/assets/images/icons/code-circle.svg';
import People from '@/assets/images/icons/people.svg';
import TaskSquare from '@/assets/images/icons/task-square.svg';
import Image from 'next/image';

export const SuccessFactors = () => {
  return (
    <Box width={'100%'} p={'140px 0'} sx={{ backgroundColor: gray[100] }}>
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mb={'64px'}>
          <SubTitle
            text="About us"
            data-aos-delay="200"
            data-aos="fade-up"
            sx={{
              textAlign: 'center',
            }}
          />
          <Title
            text="How do we stand out amidst a sea of technology teams?"
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              textAlign: 'center',
            }}
          />
          <Typography
            variant="fs18"
            color={gray[600]}
            component={'p'}
            textAlign={'center'}
            maxWidth={{ lg: '818px', xs: '100%' }}
            m={'0 auto'}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            We believe that our dedication to the human element, strong engineering processes, and
            exceptional talent make us truly stand out in the full-remote engineering landscape.
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', lg: 'row' }}
          gap={'40px'}
        >
          <CardVertical
            icon={<Image src={People} alt="Human element icon" />}
            title="Human Element"
            description="We have developed a distinctive approach to nurturing engineers based on three essential principles: passion, mastery, and autonomy. We trust our engineers with significant decisions, allowing them to grow in sync with our business."
          />
          <CardVertical
            icon={<Image src={CodeCircle} alt="Engineer Process icon" />}
            title="Engineer Process"
            description="Years of refinement at various US  based startups have made our processes exceptionally robust. We employ rigorous code reviews and prioritize comprehensive automation to ensure the highest standards of quality, efficiency, and accuracy."
          />
          <CardVertical
            icon={<Image src={TaskSquare} alt="Hiring icon" />}
            title="Hiring"
            description="Our hiring process is designed to attract the best talent in the industry. By offering competitive compensation and fostering a stimulating environment with intriguing and challenging projects, we attract and invest in top-tier engineers who can overcome any challenge."
          />
        </Box>
      </Container>
    </Box>
  );
};
