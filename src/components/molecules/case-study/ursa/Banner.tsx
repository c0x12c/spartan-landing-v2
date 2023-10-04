import * as React from 'react';
import { Box, Grid } from '@mui/material';
import bg from '@/assets/images/case-ursa/banner-image.webp';
import bgSp from '@/assets/images/case-ursa/banner-image-sp.webp';

import { Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { base } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ICaseStudyURSABannerProps {}

export const CaseStudyURSABanner: React.FunctionComponent<ICaseStudyURSABannerProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <React.Fragment>
      <Banner
        src={isMobile ? bgSp.src : bg.src}
        haveBackground={false}
        bannerPosition={isMobile ? 'bottom' : 'top'}
      >
        <Box sx={{ position: 'absolute', top: '35%', transform: 'translateY(-50%)' }} width="100%">
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <MainTitle
                  text="URSA Live"
                  sx={{ my: '24px', width: 'max-content' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <BodyText
                  text=" URSA Live produces livestream events for new and established artists."
                  data-aos="fade-up"
                  data-aos-delay="300"
                  sx={{ color: base.white, maxWidth: '538px' }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Banner>
    </React.Fragment>
  );
};
