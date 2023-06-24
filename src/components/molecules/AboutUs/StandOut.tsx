import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '../../atoms/Container';
import StandOutItem from '../../atoms/StandOutItem';

interface IStandOutProps {}

const StandOut: React.FunctionComponent<IStandOutProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const data = [
    {
      id: 'standout-1',
      textTag: 'human',
      title: 'Human Element',
      content:
        'We have developed a distinctive approach to nurturing engineers based on three essential principles: passion, mastery, and autonomy. We trust our engineers with significant decisions, allowing them to grow in sync with our business.',
    },
    {
      id: 'standout-2',
      textTag: 'Engineer',
      title: 'Engineer Process',
      content:
        'Years of refinement at various US  based startups have made our processes exceptionally robust. We employ rigorous code reviews and prioritize comprehensive automation to ensure the highest standards of quality, efficiency, and accuracy.',
    },
    {
      id: 'standout-3',
      textTag: 'Hiring',
      title: 'Hiring Process',
      content:
        'Our hiring process is designed to attract the best talent in the industry. By offering competitive compensation and fostering a stimulating environment with intriguing and challenging projects, we attract and invest in top-tier engineers who can overcome any challenge.',
    },
  ];

  const renderData = data.map((item, index) => {
    return (
      <Grid key={item.id} item xs={12} lg={4} mb={matchesDesktop ? 0 : '32px'}>
        <Box maxWidth={!matchesDesktop ? '368.5px !important' : '100%'} mx="auto">
          <StandOutItem index={index + 1} {...item} />
        </Box>
      </Grid>
    );
  });

  return (
    <Box mt="120px" mb="42px">
      <Container>
        <Box maxWidth="664px" mx="auto" mb={matchesDesktop ? '106px' : '44px'}>
          <Typography
            variant={matchesMobile ? 'fs30' : 'fs54'}
            color={colors.gray[800]}
            mb="32px"
            component="h2"
            textAlign="center"
          >
            How do we stand out amidst a sea of technology teams?
          </Typography>
          <Typography variant={'fs16'} color={colors.base.grey} component="h2" textAlign="center">
            We believe that our dedication to the human element, strong engineering processes, and
            exceptional talent make us truly stand out in the full-remote engineering landscape.
          </Typography>
        </Box>
        <Grid
          container
          columnSpacing="54px"
          rowSpacing="32px"
          display={matchesDesktop ? 'flex' : 'block'}
        >
          {renderData}
        </Grid>
      </Container>
    </Box>
  );
};

export default StandOut;
