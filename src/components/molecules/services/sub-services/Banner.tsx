import * as React from 'react';
import { Box } from '@mui/material';
import bg from '@/assets/images/case-study/banner-image.png';
import { Container, MainTitle } from '@/components/atoms';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ISubServiceBannerProps {
  title: string;
}

export const SubServiceBanner: React.FunctionComponent<ISubServiceBannerProps> = ({ title }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <React.Fragment>
      <Box
        height={isMobile ? '347px' : '559px'}
        display="flex"
        alignItems="center"
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Box maxWidth="773px" mx="auto" display="flex" flexDirection="column" alignItems="center">
            <MainTitle
              text={title}
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                textAlign: 'center',
              }}
            />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
