import { Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Arrow from '@/assets/images/icons/arrow.svg';
import BannerImage from '@/assets/images/apply-job/banner-image.svg';
import { BreakPoints, useBreakpoint } from '@/hooks';

const ApplyJobBanner = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Banner haveBackground={false}>
      <Box position="absolute" top="50%" width="100%" sx={{ transform: 'translateY(-50%)' }}>
        <Container>
          <Box
            display={'flex'}
            alignItems={'center'}
            gap={{ xs: '32px', sm: '50px' }}
            flexDirection={{ md: 'row', xs: 'column' }}
          >
            <Box data-aos="fade-right" data-aos-delay="300">
              <MainTitle
                isLightMode={false}
                text="Spartan's remote high-paying tech jobs"
                sx={{
                  fontSize: { xs: '40px', sm: '64px' },
                  mb: '24px',
                }}
              />
              <BodyText
                sx={{ marginBottom: '32px', maxWidth: { xs: '100%', sm: '544px' } }}
                text=" Join 100+ of the world's best engineers & get full-time, long-term remote
                software jobs with better compensation and career growth."
              />
              <Button variant="contained" endIcon={<Image src={Arrow} alt="arrow" width={24} />}>
                Apply now
              </Button>
            </Box>
            {!isMobile && (
              <Image
                data-aos="fade-left"
                data-aos-delay="300"
                src={BannerImage}
                alt="group of people discussing vacancies"
                style={{ maxWidth: isMobile ? '100%' : '43%', height: 'auto', maxHeight: '100%' }}
              />
            )}
          </Box>
        </Container>
      </Box>
    </Banner>
  );
};

export default ApplyJobBanner;
