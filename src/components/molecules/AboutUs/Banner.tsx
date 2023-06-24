import Banner from '@/components/atoms/Banner';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import desktopBanner from '@/assets/images/about-us-bg.svg';
import Container from '@/components/atoms/Container';
import { base, gray } from '@/styles/colors';
import expand from '@/assets/images/expand.svg';
import Image from 'next/image';
import ImageGroup1 from '../../../assets/images/image-group-1.jpg';
import ImageGroup2 from '../../../assets/images/image-group-2.jpg';

const HeroBanner = () => {
  const theme = useTheme();

  const matchesMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isMD = useMediaQuery(theme.breakpoints.up('md'));
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const isXL = useMediaQuery(theme.breakpoints.up('xl'));
  const isXXL = useMediaQuery(theme.breakpoints.up('xxl'));

  return (
    <Banner src={desktopBanner.src}>

      <Box
        pt={{ xxl: '199px', lg: '207px', md: '184px', sm: '184px', xs: '163px' }}
        position="relative"
      >
        <Container>
          <Box display="flex" gap="32px" flexDirection="column">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="fs80" color={base.white} maxWidth={{ lg: '760px', xs: '640px' }}>
                Top Tier Tech Savvy Engineers In World
              </Typography>
              {!matchesMobile && (
                <IconButton
                  aria-label="expand"
                  sx={{
                    border: '1px solid',
                    borderColor: base.white,
                    width: '120px',
                    height: '120px',
                  }}
                >
                  <Image
                    src={expand}
                    alt="expand"
                    style={{ filter: 'invert(1)', width: '28px', height: '28px' }}
                  />
                </IconButton>
              )}
            </Box>
            <Typography variant="fs18" color={gray[200]} maxWidth={{ lg: '652px', xs: '640px' }}>
              We are Spartan, a team of elite tech-savvy people who specialize in providing
              top-notch technical expertise to meet your goals. Our engineers are selected from the
              top 1%, signifying that they are not merely proficient coders but also exceptional
              engineers with a deep comprehension of the intricacies of software development.
            </Typography>
          </Box>
          <Box display="flex" width="100%" gap={{ xxl: '27px', xs: '12px', lg: '21px' }}>
            <Image
              src={ImageGroup1}
              alt="group of people"
              style={{
                width: '57%',
                height: '100%',
                paddingTop: `${
                  isXXL ? '140px' : isXL ? '113px' : isLG ? '88px' : isMD ? '55px' : '67px'
                }`,
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
            <Image
              src={ImageGroup2}
              alt="group of people"
              style={{
                width: `${
                  isXXL
                    ? 'calc(100% - 57% - 27px)'
                    : isLG
                    ? 'calc(100% - 57% - 21px)'
                    : 'calc(100% - 57% - 12px)'
                }`,
                height: 'fit-content',
              }}
            />
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default HeroBanner;
