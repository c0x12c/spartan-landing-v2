import * as React from 'react';
import { Box, Grid } from '@mui/material';
import bg from '@/assets/images/case-agora/banner-image.webp';
import bgSp from '@/assets/images/case-agora/banner-image-sp.webp';
import { Banner, BodyText, Container, MainTitle } from '@/components/atoms';
import { gray } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ICaseStudyAgoraBannerProps {}

export const CaseStudyAgoraBanner: React.FunctionComponent<ICaseStudyAgoraBannerProps> = () => {
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
                  text="Agora"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  sx={{
                    my: '24px',
                  }}
                />
                <BodyText
                  text="Agora is a pioneer and global leader in Real-Time Engagement, providing developers
                  with simple, flexible, and powerful APIs, to embed real-time voice, video,
                  interactive streaming, chat, and artificial intelligence capabilities into their
                  applications."
                  sx={{ display: 'block', maxWidth: '538px', color: gray[200] }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Banner>
    </React.Fragment>
  );
};
