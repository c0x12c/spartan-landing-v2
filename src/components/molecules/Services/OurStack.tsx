import * as React from 'react';
import * as colors from '@/styles/colors';

import Container from '@/components/atoms/Container';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { StackType, Stacks } from '@/constants/stacks';
import Image from 'next/image';
interface IOurStackProps {}

const OurStack: React.FunctionComponent<IOurStackProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderProjects = (data: StackType[]) => {
    return data.map((item) => {
      return (
        <Image
          src={item.imgSrc}
          key={item.id}
          style={{ maxWidth: '100%', height: 'auto' }}
          alt={item.name}
        />
      );
    });
  };

  return (
    <Box mb="44px" bgcolor={colors.gray[100]} padding="84px 0 100px">
      <Container>
        <Box py={matchesDesktop ? '100px' : '60px'}>
          <Grid container spacing="44px">
            <Grid item xs={12} lg={4}>
              <Typography
                variant={matchesMobile ? 'fs30' : 'fs54'}
                letterSpacing="-2px"
                color={colors.base.black}
                mb="24px"
                textAlign={matchesDesktop ? 'left' : 'center'}
                component="h2"
              >
                Technology Stack
              </Typography>
              <Box display="flex" alignItems="center" gap="44px">
                <Typography
                  variant={'fs18'}
                  letterSpacing="0.01em"
                  color={colors.gray[600]}
                  mb="24px"
                  maxWidth="595px"
                  mx="auto"
                  textAlign={matchesDesktop ? 'left' : 'center'}
                >
                  At Spartan, we pride ourselves on our robust and cutting-edge tech stack that
                  enables us to deliver innovative solutions and drive operational efficiency. Our
                  tech stack is constantly evolving, staying up to date with the latest industry
                  trends and best practices.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box
                display="flex"
                flexDirection="column"
                rowGap="32px"
                alignItems={matchesDesktop ? 'flex-end' : 'flex-start'}
              >
                <Box
                  bgcolor={colors.gray[200]}
                  p="16px 20px"
                  display="flex"
                  alignItems="center"
                  gap="44px"
                  flexWrap="wrap"
                >
                  {renderProjects(Stacks.slice(0, 4))}
                </Box>
                <Box
                  bgcolor={colors.gray[200]}
                  p="16px 20px"
                  display="flex"
                  alignItems="center"
                  gap="44px"
                  flexWrap="wrap"
                >
                  {renderProjects(Stacks.slice(4, 7))}
                </Box>
                <Box
                  bgcolor={colors.gray[200]}
                  p="16px 20px"
                  display="flex"
                  alignItems="center"
                  gap="44px"
                  flexWrap="wrap"
                >
                  {renderProjects(Stacks.slice(7, 10))}
                </Box>
                <Box
                  bgcolor={colors.gray[200]}
                  p="16px 20px"
                  display="flex"
                  alignItems="center"
                  gap="44px"
                  flexWrap="wrap"
                >
                  {renderProjects(Stacks.slice(10, 12))}
                </Box>
                <Box
                  bgcolor={colors.gray[200]}
                  p="16px 20px"
                  display="flex"
                  alignItems="center"
                  gap="44px"
                  flexWrap="wrap"
                >
                  {renderProjects(Stacks.slice(12, 15))}
                </Box>
                <Box
                  bgcolor={colors.gray[200]}
                  p="16px 20px"
                  display="flex"
                  alignItems="center"
                  gap="44px"
                  flexWrap="wrap"
                >
                  {renderProjects(Stacks.slice(15))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurStack;
