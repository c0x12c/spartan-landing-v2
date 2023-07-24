import * as React from 'react';
import { Box, Button, styled } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { gray } from '@/styles/colors';
import { ArrowIcon, BodyText, CardProject, Container, SubTitle, Title } from '@/components/atoms';
import Link from 'next/link';
import { Projects } from '@/constants';
import Slider, { Settings } from 'react-slick';

interface IServiceCasesStudyProps {}

const CustomInner = styled(Box)(({ theme }) => ({
  '& .slick-list': {
    overflow: 'visible',
    margin: '0 -24px',
  },
  [theme.breakpoints.down('md')]: {
    '& .slick-list': {
      overflow: 'hidden',
    },
  },
}));

export const ServiceCasesStudy: React.FunctionComponent<IServiceCasesStudyProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const [dragging, setDragging] = React.useState(false);

  const handleBeforeChange = React.useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = React.useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = React.useCallback(
    (e: React.MouseEvent, callback: () => void) => {
      if (dragging) e.stopPropagation();
      else callback();
    },
    [dragging]
  );

  const slider = React.useRef<Slider | null>(null);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '35px',
        },
      },
    ],
  };

  const renderProjects = Projects.map((project) => {
    return (
      <Box key={project.id} maxWidth={isMobile ? '319px' : '384px'}>
        <CardProject item={project} onClick={handleOnItemClick} isSliderItem={true} />
      </Box>
    );
  });

  return (
    <Box bgcolor={gray[50]} py={isMobile ? '60px' : '120px'}>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={isMobile ? '24px' : '84px'}
        >
          <Box display={'flex'} flexDirection={'column'} gap={'24px'} maxWidth="664px">
            <SubTitle text="Our projects" data-aos="fade-up" data-aos-delay="200" />
            <Title
              text="Case studies"
              data-aos="fade-up"
              data-aos-delay="300"
              sx={{
                maxWidth: '690px',
              }}
            />
            <BodyText
              text="Join us at Spartan projects and experience the strength of our capabilities, complemented by the humility that drives our success. Together, we will achieve remarkable outcomes and forge a path toward excellence."
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </Box>
          {!isMobile && (
            <Link href="/case-study" scroll={false}>
              <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                Show all case studies
                <ArrowIcon />
              </Button>
            </Link>
          )}
        </Box>
        <CustomInner position="relative">
          <Slider
            ref={slider}
            {...settings}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {renderProjects}
          </Slider>
        </CustomInner>
        {isMobile && (
          <Box display="flex" justifyContent="center" mt="24px">
            <Link href="/case-study" scroll={false}>
              <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                Show all case studies
                <ArrowIcon />
              </Button>
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
};
