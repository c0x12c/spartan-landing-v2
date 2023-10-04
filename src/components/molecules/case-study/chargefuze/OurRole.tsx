import { BodyText, Container, Title } from '@/components/atoms';
import { base, gray } from '@/styles/colors';
import { Box, Divider } from '@mui/material';
import React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import Image from 'next/image';
import Star from '@/assets/images/case-cf/Star-blue.svg';

const OurRole = () => {
  const isMD = useBreakpoint(BreakPoints.MD);

  const iframeStyles = {
    width: '100%',
    height: '0',
    paddingTop: '56.25%',
    position: 'relative',
  };

  const iframeContainerStyles = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    marginBottom: '24px',
  };

  const iframeEmbedStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    border: 'none',
  };

  return (
    <Box width={'100%'} p={'40px 0'} bgcolor={{ xs: 'none', md: base.lightBlue }}>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          maxWidth="100%"
          gap={'48px'}
          mb={{ xs: '24px', md: '10px' }}
        >
          <Title
            text="Our Role"
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{ minWidth: 'max-content', my: { xs: 0, md: '24px' } }}
          />
          {!isMD && (
            <Box
              display="flex"
              gap="8px"
              alignItems="center"
              data-aos="fade-left"
              data-aos-delay="200"
              width="100%"
            >
              <Box component={Divider} width="calc(100% - 77px)" height="1px" bgcolor={gray[300]} />
              <Image src={Star} alt="blue star" />
            </Box>
          )}
        </Box>
        <BodyText
          text="chargeFUZE approached us with the task of seamlessly taking over their project, ensuring a
          smooth continuation of work and maintaining the same level of commitment and dedication.
          With our experienced team, we specialize in understanding project requirements and
          integrating the project into existing frameworks to deliver exceptional results."
          sx={{
            maxWidth: { xs: '100%', md: '62%' },
            mb: { xs: '24px', md: '44px' },
            color: gray[500],
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <Box sx={iframeContainerStyles}>
          <Box sx={iframeStyles}>
            <Box
              component="iframe"
              sx={iframeEmbedStyles}
              src="https://www.youtube.com/embed/LzJSyHieCQs?controls=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurRole;
