import * as React from 'react';
import * as colors from '@/styles/colors';
import Image from 'next/image';
import { Box, Divider, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Container from '../../atoms/Container';
import star from '@/assets/images/star.svg';
import Slider from 'react-slick';
import { CaseStudies } from '@/constants/case-study';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IClientWithSpartansProps {}

const ClientWithSpartans: React.FunctionComponent<IClientWithSpartansProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const renderData = CaseStudies.map((item, index) => {
    return (
      <Box key={item.id}>
        <Image
          src={item.quoteImgSrc}
          alt={item.name}
          style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
        />
        <Grid container mt="44px" columnSpacing="85px">
          {matchesDesktop && (
            <Grid item lg={3.5} display="flex" flexDirection="column" gap="32px" width="285px">
              <Typography variant="fs54" color={colors.gray[900]} letterSpacing="-2px">
                {item.name}
              </Typography>
              <Box
                display="flex"
                gap="18px"
                alignItems="center"
                borderBottom="1px solid"
                borderColor={colors.gray[400]}
                pb="16px"
              >
                <Typography variant="fs54" color={colors.gray[900]} letterSpacing="-2px">
                  {item.dev}+
                </Typography>
                <Typography variant="fs18" fontWeight="700" color={colors.gray[700]}>
                  Dev in team
                </Typography>
              </Box>
              <Box display="flex" gap="18px" alignItems="center">
                <Typography variant="fs54" color={colors.gray[900]} letterSpacing="-2px">
                  {item.designer}
                </Typography>
                <Typography
                  variant="fs18"
                  fontWeight="700"
                  color={colors.gray[700]}
                  letterSpacing="0.015em"
                >
                  Designer in team
                </Typography>
              </Box>
            </Grid>
          )}
          <Grid item xs={12} lg={8.5}>
            <Typography
              variant="fs32"
              color={colors.gray[800]}
              letterSpacing={'0.01em'}
              mb="32px"
              component="h3"
            >
              {item.quoteTitle}
            </Typography>
            <Typography variant="fs16" color={colors.gray[500]} mb="18px" component="p">
              {item.quoteContent}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap="24px">
                <Box width="69px" height="69px" borderRadius="50%" overflow="hidden">
                  <Image src={item.quoteUserImage} alt={item.quoteUserName} />
                </Box>
                <Box display="flex" flexDirection="column">
                  <Typography variant="fs18" color={colors.gray[900]} component="p">
                    {item.quoteUserName}
                  </Typography>
                  <Typography variant="fs20" color={colors.primary[500]} component="p">
                    {item.quoteUserPosition}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap="16px">
                <IconButton
                  aria-label="back"
                  size="large"
                  onClick={() => slider?.current?.slickPrev()}
                  disabled={index === 0}
                  sx={{
                    border: '1.62px solid',
                    opacity: index === 0 ? 0.5 : 1,
                    borderColor: index === 0 ? colors.base.grey : colors.primary[500],
                    color: index === 0 ? colors.base.grey : colors.primary[500],
                  }}
                >
                  <ArrowBackIcon fontSize="inherit" color="inherit" />
                </IconButton>
                <IconButton
                  aria-label="back"
                  size="large"
                  onClick={() => slider?.current?.slickNext()}
                  disabled={index == CaseStudies.length - 1}
                  sx={{
                    opacity: index == CaseStudies.length - 1 ? 0.5 : 1,
                    border: '1.62px solid',
                    borderColor:
                      index == CaseStudies.length - 1 ? colors.base.grey : colors.primary[500],
                    color: `${
                      index == CaseStudies.length - 1 ? colors.base.grey : colors.primary[500]
                    } !important`,
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
    <React.Fragment>
      <Box my="44px">
        <Box py="64px">
          <Container>
            <Box
              display="flex"
              alignItems={{
                lg: 'center',
                xs: 'flex-start',
              }}
              justifyContent={{
                lg: 'flex-start',
                xs: 'space-between',
              }}
              mb="32px"
            >
              {matchesDesktop && <Image src={star} alt="star" />}
              {matchesDesktop && (
                <Divider
                  sx={{ bgcolor: colors.gray[300], width: 'calc(100% - 562px)', mr: '32px' }}
                />
              )}
              {!matchesDesktop && (
                <Box display="flex" flexDirection="column" gap="32px">
                  <Typography
                    variant={matchesMobile ? 'fs26' : 'fs40'}
                    color={colors.gray[900]}
                    letterSpacing="-0.03em"
                  >
                    {CaseStudies[currentSlide].name}
                  </Typography>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant={matchesMobile ? 'fs26' : 'fs40'}
                      color={colors.gray[900]}
                      letterSpacing="-2px"
                    >
                      {CaseStudies[currentSlide].dev}+
                    </Typography>
                    <Typography
                      variant="fs16"
                      fontWeight="600"
                      color={colors.gray[700]}
                      letterSpacing="0.015em"
                      mb="16px"
                    >
                      Dev in team
                    </Typography>
                    <Divider sx={{ bgcolor: colors.gray[400], width: '100%' }} />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography
                      variant={matchesMobile ? 'fs26' : 'fs40'}
                      color={colors.gray[900]}
                      letterSpacing="-0.03em"
                    >
                      {CaseStudies[currentSlide].designer}
                    </Typography>
                    <Typography
                      variant="fs16"
                      fontWeight="600"
                      color={colors.gray[700]}
                      letterSpacing="0.015em"
                    >
                      Designer in team
                    </Typography>
                  </Box>
                </Box>
              )}
              <Typography
                variant={matchesMobile ? 'fs30' : 'fs54'}
                color={colors.gray[800]}
                textAlign="right"
              >
                Clients Love <br /> Spartans and our <br /> work!
              </Typography>
            </Box>
            <Slider ref={slider} {...settings}>
              {renderData}
            </Slider>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ClientWithSpartans;
