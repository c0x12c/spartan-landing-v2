import React from 'react';
import { Container, Title } from '@/components/atoms';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { base, gray, primary } from '@/styles/colors';
import { quotes } from '@/constants/quotes';
import Commas from '@/assets/images/apply-job/comas.svg';
import { ProjectsHome } from '@/constants';
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
          style={{ maxWidth: '100%', borderRadius: '8px', height: 'auto', paddingLeft: '2px' }}
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
          <Typography variant="fs18" color={gray[800]} fontWeight={600} mb="24px" component="p">
            {item.title}
          </Typography>
          <Typography variant="fs18" component="p" marginBottom={'18px'}>
            {item.text}
          </Typography>
          <Box
            display="flex"
            justifyContent={{ md: 'space-between' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            gap={{ xs: '20px', md: '0' }}
          >
            <Box>
              <Typography component="p" variant="fs18" color={gray[900]} fontWeight={700}>
                {item.author}
              </Typography>
              <Typography variant="fs20" component="p" color={primary[400]} fontWeight={500}>
                {item.authorPosition}
              </Typography>
            </Box>

            <Box display="flex" gap="20px">
              <IconButton
                aria-label="back"
                size="large"
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
                size="large"
                onClick={() => slider?.current?.slickNext()}
                disabled={index == ProjectsHome.length - 1}
                sx={{
                  opacity: index == ProjectsHome.length - 1 ? 0.5 : 1,
                  border: '1.62px solid',
                  borderColor: index == ProjectsHome.length - 1 ? base.grey : primary[500],
                  color: `${
                    index == ProjectsHome.length - 1 ? base.grey : primary[500]
                  } !important`,
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
            <Box component={Divider} width={'100%'} />
          </Box>
        )}

        <Title
          text="Sharing from a secret interview for Spartans around the world"
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
