import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Container from '@/components/atoms/Container';
import { voltaStacks } from '@/constants/volta-stacks';
import { IBM_Plex_MonoFont } from '@/styles/muiTheme';
interface ITechStackProps {}

const TechStack: React.FunctionComponent<ITechStackProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderStacks = voltaStacks.map((tech) => {
    return (
      <Grid item xs={6} sm={4} key={tech.id}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="6px"
          p={matchesMobile ? '6px' : '6px 22px'}
          bgcolor={colors.gray[200]}
          maxWidth="236px"
        >
          <Image src={tech.imgSrc} alt={tech.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography
            sx={{
              fontFamily: IBM_Plex_MonoFont.style.fontFamily,
              fontSize: '13px',
              fontWeight: 600,
              lineHeight: 1.2,
              textTransform: 'uppercase',
              color: colors.gray[700],
            }}
          >
            {tech.name}
          </Typography>
        </Box>
      </Grid>
    );
  });

  return (
    <Box my="44px" py={matchesDesktop ? '140px' : '60px'} bgcolor={colors.gray[100]}>
      <Container>
        <Grid container flexDirection={matchesDesktop ? 'row' : 'column-reverse'} spacing="40px">
          <Grid item container xs={12} lg={8} spacing="14px">
            {renderStacks}
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography
              variant={matchesMobile ? 'fs40' : 'fs54'}
              color={colors.gray[900]}
              mb="24px"
              component="h2"
            >
              Technology Stack
            </Typography>
            <Typography variant="fs16" color={colors.gray[600]} display="block">
              At Spartan, we pride ourselves on our robust and cutting-edge tech stack that enables
              us to deliver innovative solutions and drive operational efficiency.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TechStack;
