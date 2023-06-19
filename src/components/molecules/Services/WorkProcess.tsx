import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import workProcessImage from '@/assets/images/work-process-image.svg';
import star from '@/assets/images/star.svg';
import Container from '@/components/atoms/Container';
import { WorkProcessData } from '@/constants/work-process';
import StyledAccordionItem from '@/components/atoms/StyledAccordionItem';
interface IWorkProcessProps {}

const WorkProcess: React.FunctionComponent<IWorkProcessProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesTablet = useMediaQuery(theme.breakpoints.down('md'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderDataService = WorkProcessData.map((work, index) => {
    return <StyledAccordionItem key={work.id} index={index + 1} {...work} />;
  });

  return (
    <Box my="44px">
      <Container>
        <Box mb={matchesDesktop ? '79px' : '32px'}>
          <Typography
            variant={matchesMobile ? 'fs30' : 'fs54'}
            letterSpacing="-2px"
            color={colors.base.black}
            mb="24px"
            component="h2"
          >
            Work Process
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              variant={'fs18'}
              letterSpacing="0.01em"
              color={colors.gray[600]}
              mb="24px"
              maxWidth="478px"
            >
              Discover our streamlined process for developing cutting-edge technology solutions that
              cater to your specific business needs. Join us on this journey of innovation and
              success.
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="flex-start" width="100%">
              {!matchesTablet && (
                <Divider
                  sx={{ bgcolor: colors.gray[300], width: 'calc(100% - 77px)', height: '1px' }}
                />
              )}
              {!matchesTablet && <Image src={star} alt="star" />}
            </Box>
          </Box>
          <Grid container rowGap="64px" alignItems="center" columnSpacing="64px">
            <Grid item xs={12} lg={4}>
              <Image
                src={workProcessImage}
                alt="workProcessImage"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} lg={8} mb={matchesTablet ? '64px' : 0}>
              {renderDataService}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkProcess;
