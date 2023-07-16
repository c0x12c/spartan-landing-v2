import * as React from 'react';
import { Box, Grid } from '@mui/material';
import bg from '@/assets/images/case-ursa/banner-image.png';
import { Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { base } from '@/styles/colors';

interface ICaseStudyURSABannerProps {}

export const CaseStudyURSABanner: React.FunctionComponent<ICaseStudyURSABannerProps> = () => {
  return (
    <React.Fragment>
      <Banner src={bg.src} haveBackground={false}>
        <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
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
                  text=" Ursa live is produces livestream events for new and established artists."
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
