import React from 'react';
import { BodyText, Container, Title } from '@/components/atoms';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { base, gray, primary } from '@/styles/colors';
import { quotes } from '@/constants/quotes';
import Commas from '@/assets/images/apply-job/comas.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import Star from '@/assets/images/icons/star.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

const Quotes = () => {
  const isMobile = useBreakpoint(BreakPoints.SM);
  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const renderQuotes = quotes.map((item, index) => {
    return (
      <Box
        data-aos-delay="400"
        data-aos="flip-left"
        width="100%"
        display="flex !important"
        gap={{ xs: '40px', md: '92px' }}
        flexDirection={{ xs: 'column', md: 'row' }}
        paddingTop={'44px'}
        paddingBottom={{ xs: '40px', sm: '88px' }}
        alignItems={'center'}
        key={item.id}
      >
        <Image
          src={item.img}
          alt={item.author}
          style={{ maxWidth: '263px', borderRadius: '8px', height: 'auto', paddingLeft: '2px' }}
        />
        <Box
          width={{ md: '78%', xs: '100%' }}
          position="relative"
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              top: { md: '50%', xs: '40%' },
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '152px',
              height: '110px',
              backgroundImage: `url(${Commas.src})`,
              backgroundRepeat: 'no-repeat',
              zIndex: -1,
            },
          }}
        >
          <Typography
            variant={isMobile ? 'fs16' : 'fs18'}
            color={gray[800]}
            fontWeight={600}
            mb={isMobile ? '12px' : '24px'}
            component="p"
          >
            {item.title}
          </Typography>
          <BodyText
            text={item.text}
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{ mb: isMobile ? '8px' : '18px' }}
          />
          <Box
            display="flex"
            justifyContent={{ md: 'space-between' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={{ xs: '20px', md: '0' }}
            p={isMobile ? '13px 0' : '8px 0'}
          >
            <Box>
              <Typography
                component="p"
                variant={isMobile ? 'fs16' : 'fs18'}
                color={gray[900]}
                fontWeight={700}
              >
                {item.author}
              </Typography>
              <Typography
                variant={isMobile ? 'fs16' : 'fs20'}
                component="p"
                color={primary[400]}
                fontWeight={500}
              >
                {item.authorPosition}
              </Typography>
            </Box>

            <Box display="flex" gap={isMobile ? '12px' : '20px'}>
              <IconButton
                aria-label="back"
                size={isMobile ? 'medium' : 'large'}
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
                size={isMobile ? 'medium' : 'large'}
                onClick={() => slider?.current?.slickNext()}
                disabled={index == quotes.length - 1}
                sx={{
                  opacity: index == quotes.length - 1 ? 0.5 : 1,
                  border: '1.62px solid',
                  borderColor: index == quotes.length - 1 ? base.grey : primary[500],
                  color: `${index == quotes.length - 1 ? base.grey : primary[500]} !important`,
                }}
              >
                <ArrowForwardIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <Container>
      <Box display={'flex'} alignItems={'center'} data-aos-delay="300" data-aos="fade-up">
        <Typography variant="fs14"></Typography>
        {!isMobile && (
          <Box width={'100%'} display={'flex'} alignItems={'center'}>
            <Image src={Star} alt="star" />
            <Box component={Divider} width={'80%'} />
          </Box>
        )}

        <Title
          text="What It’s Like to Work Here: Thoughts from Our Team"
          sx={{
            minWidth: { sm: '635px', xs: '100%' },
            textAlign: { sm: 'end', xs: 'start' },
          }}
        />
      </Box>
      <Slider ref={slider} {...settings}>
        {renderQuotes}
      </Slider>
    </Container>
  );
};

export default Quotes;
