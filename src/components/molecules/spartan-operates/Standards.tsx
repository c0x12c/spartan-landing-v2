import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box, Grid, Typography } from '@mui/material';
import { base, gray } from '@/styles/colors';
import { BodyText, Container, Title } from '@/components/atoms';

interface ISpartanOperatesStandardsProps {}

export const SpartanOperatesStandards: React.FunctionComponent<
  ISpartanOperatesStandardsProps
> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '112px'} bgcolor={gray[50]}>
      <Container>
        <Box display="flex" flexDirection="column" gap={isMobile ? '16px' : '60px'}>
          <Box display="flex" flexDirection="column" alignItems="center" gap="24px">
            <Title
              text="A few required standards"
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{ textAlign: 'center', color: base.black }}
            />
            <BodyText
              text="We believe that the application of these standards will make the project smooth and seamless, reducing costs and unnecessary risks"
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{ textAlign: 'center', maxWidth: '818px' }}
            />
          </Box>
          <Grid container spacing={isMobile ? '16px' : '32px'}>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor={base.white}
                p="32px"
                display="flex"
                flexDirection="column"
                gap="20px"
                borderRadius="8px"
                boxShadow="0px 10px 47px 0px #EFEFEF;"
                minHeight="384px"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Typography
                  variant={isMobile ? 'fs18' : 'fs24'}
                  fontWeight={600}
                  color={base.black}
                >
                  RFC
                </Typography>
                <Typography variant={isMobile ? 'fs14' : 'fs16'}>
                  We extensively utilize RFC (Request for Comments) in our software development
                  process. RFC serves as a formal document for proposing and discussing changes,
                  improvements, or new features within our projects. It enables structured and
                  collaborative discussions among team members and stakeholders, ensuring
                  transparency and informed decision-making. By leveraging the RFC process, we tap
                  into the diverse expertise of our team, thoroughly evaluate proposed changes, and
                  drive the evolution and improvement of our software systems.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor={base.white}
                p="32px"
                display="flex"
                flexDirection="column"
                gap="20px"
                borderRadius="8px"
                boxShadow="0px 10px 47px 0px #EFEFEF;"
                minHeight="384px"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <Typography
                  variant={isMobile ? 'fs18' : 'fs24'}
                  fontWeight={600}
                  color={base.black}
                >
                  RCA
                </Typography>
                <Typography variant={isMobile ? 'fs14' : 'fs16'}>
                  We prioritize RCA (Root Cause Analysis) in our software development process. RCA
                  is a systematic approach used to identify and understand the underlying causes of
                  issues or problems. By conducting thorough investigations, we uncover the root
                  cause rather than just addressing surface-level symptoms. This allows us to
                  implement effective solutions and prevent similar issues from occurring in the
                  future. RCA helps us improve our development practices, refine processes, and
                  enhance the overall quality of our software systems. Ultimately, it ensures that
                  we deliver better products and services to our clients and end-users.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
