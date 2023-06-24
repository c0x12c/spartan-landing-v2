import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@/components/atoms/Container';
import Image from 'next/image';
import resultImage from '@/assets/images/case-volta/result.png';
interface IResultProps {}

const Result: React.FunctionComponent<IResultProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const dataResult = [
    {
      id: 'result-1',
      text: 'Established a robust backend and infrastructure that is easily monitored and maintained',
    },
    {
      id: 'result-2',
      text: 'Created attractive and user-friendly mobile applications with responsive performance.',
    },
    {
      id: 'result-3',
      text: 'Developed a tool for conducting promotional campaigns and collaborating with sponsors or partners',
    },
  ];

  const renderResult = dataResult.map((item) => {
    return (
      <Box
        component="li"
        key={item.id}
        position="relative"
        sx={{
          '&:before': {
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            content: '"• "',
            color: '#39E991',
            fontWeight: 'bold',
            display: 'inline-block',
            width: '8px',
          },
        }}
      >
        <Typography
          variant="fs16"
          color={colors.base.grey}
          fontWeight={600}
          letterSpacing="0.24px"
          component="p"
          display="inline-block"
          marginLeft="20px"
        >
          {item.text}
        </Typography>
      </Box>
    );
  });

  return (
    <Box my="44px" py={matchesDesktop ? '80px' : '60px'}>
      <Container>
        <Grid
          container
          flexDirection={matchesDesktop ? 'row' : 'column'}
          rowSpacing="40px"
          columnSpacing="114px"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <Typography
              variant={matchesMobile ? 'fs40' : 'fs80'}
              color={colors.gray[900]}
              mb="32px"
              component="h2"
            >
              The Result
            </Typography>
            <Typography
              variant="fs16"
              color={colors.base.grey}
              display="block"
              letterSpacing="0.32px"
              mb="44px"
              component="p"
            >
              Volta Wallet is still in its early startup phase, but we have already achieved several
              milestones
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap="22px"
              component={'ul'}
              sx={{ listStyle: 'none' }}
            >
              {renderResult}
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Image
              src={resultImage}
              alt="resultImage"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Result;
