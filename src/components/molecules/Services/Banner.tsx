import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '@/components/atoms/Container';
import Image from 'next/image';
import bg from '@/assets/images/case-study-bg.svg';
import servicesImage from '@/assets/images/services-image.svg';
import Banner from '@/components/atoms/Banner';
import InputEmail from '@/components/atoms/InputEmail';
import ButtonDiscuss from '@/components/atoms/ButtonDiscuss';

interface IServicesBannerProps {}

const ServicesBanner: React.FunctionComponent<IServicesBannerProps> = (props) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Banner src={bg.src}>
      <Box pt={{ xxl: '333px', lg: '103px', sm: '163px', xs: '103px' }}>
        <Container>
          <Box display="flex" gap={{ xl: '80px', lg: '35px' }}>
            <Box>
              <Typography
                variant={matchesMobile ? 'fs40' : 'fs80'}
                color={colors.base.white}
                component="h1"
                mb={matchesMobile ? '17px' : '34px'}
              >
                Looking for an efficient and cost effective team of engineers?
              </Typography>
              <Box display="flex" gap="15px">
                <InputEmail
                  placeholder="Enter your email"
                  styledColor={colors.gray[200]}
                  inputProps={{ style: { paddingBottom: '18.5px' } }}
                  sx={{
                    width: 'calc(100% - 127px - 15px)',
                  }}
                />
                <ButtonDiscuss />
              </Box>
            </Box>
            {matchesDesktop && (
              <Box>
                <Image src={servicesImage} alt="servicesImage" />
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default ServicesBanner;
