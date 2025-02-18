import * as React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Slider from 'react-slick';
import { Container, Title } from '@/components/atoms';
import { Projects } from '@/constants';
import Image from 'next/image';
import { base, gray, primary } from '@/styles/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BreakPoints, useBreakpoint } from '@/hooks';
import QuoteTag from '@/components/atoms/QuoteTag';
// import QuoteTag from '@/components/atoms/QuoteTag';

interface IClientsProps {}

export const Clients: React.FunctionComponent<IClientsProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderTags = (data: string[]) => {
    return data.map((tag, index: number) => <QuoteTag key={`tag-${index + 1}`} text={tag} />);
  };

  const renderQuotes = Projects.map((item, index) => {
    return (
      <Box key={item.id}>
        <Box position="relative">
          <Image
            src={item.quote.imgSrc}
            alt={item.name}
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              margin: '0 auto',
              borderRadius: isMobile ? '6.25px' : '18.75px',
            }}
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </Box>
        <Grid container mt={isMobile ? '24px' : '44px'} columnSpacing="120px" rowSpacing="40px">
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            flexDirection="column"
            gap={isMobile ? '12px' : '24px'}
          >
            <Typography
              variant={isMobile ? 'fs18' : 'fs32'}
              fontWeight={600}
              color={gray[900]}
              letterSpacing="-0.8px"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {item.name}
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap={isMobile ? '8px' : '18px'}
              pb="16px"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Typography variant={isMobile ? 'fs14' : 'fs18'} color={gray[600]}>
                {item.content}
              </Typography>
              <Box display="flex" gap="12px" flexWrap="wrap">
                {renderTags(item.tags)}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            {/* <Typography
              variant={isMobile ? 'fs18' : 'fs24'}
              color={gray[800]}
              fontWeight={600}
              mb="24px"
              component="h3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {item.quote.title}
            </Typography> */}
            <Typography
              variant={isMobile ? 'fs14' : 'fs18'}
              color={gray[600]}
              mb="26px"
              component="p"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {item.quote.content}
            </Typography>
            <Box
              display="flex"
              flexDirection={isMobile ? 'column' : 'row'}
              alignItems={isMobile ? 'flex-start' : 'center'}
              justifyContent="space-between"
              rowGap="12px"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Box display="flex" alignItems="center" gap="24px">
                <Box width="58px" height="58px" borderRadius="50%" overflow="hidden">
                  <Image
                    src={item.quote.userImgSrc}
                    alt={item.quote.userName}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant={isMobile ? 'fs14' : 'fs18'} color={gray[900]} component="p">
                    {item.quote.userName}
                  </Typography>
                  <Typography
                    variant={isMobile ? 'fs14' : 'fs20'}
                    color={primary[500]}
                    component="p"
                  >
                    {item.quote.userPosition}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap="16px">
                <IconButton
                  aria-label="back"
                  size={isMobile ? 'small' : 'large'}
                  onClick={() => slider?.current?.slickPrev()}
                  disabled={index === 0}
                  sx={{
                    border: '1.62px solid',
                    opacity: index === 0 ? 0.5 : 1,
                    borderColor: index === 0 ? base.grey : primary[500],
                    color: index === 0 ? base.grey : primary[500],
                  }}
                >
                  <ArrowBackIcon fontSize="inherit" color="inherit" />
                </IconButton>
                <IconButton
                  aria-label="back"
                  size={isMobile ? 'small' : 'large'}
                  onClick={() => slider?.current?.slickNext()}
                  disabled={index == Projects.length - 1}
                  sx={{
                    opacity: index == Projects.length - 1 ? 0.5 : 1,
                    border: '1.62px solid',
                    borderColor: index == Projects.length - 1 ? base.grey : primary[500],
                    color: `${index == Projects.length - 1 ? base.grey : primary[500]} !important`,
                  }}
                >
                  <ArrowForwardIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  });

  return (
    <Box py={isMobile ? '40px' : '64px'}>
      <Container>
        <Box mb={isMobile ? '24px' : '44px'} textAlign={isMobile ? 'left' : 'center'}>
          <Title text="Clients love Spartans and our work!" />
        </Box>
        <Slider ref={slider} {...settings}>
          {renderQuotes}
        </Slider>
      </Container>
    </Box>
  );
};
