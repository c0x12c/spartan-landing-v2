import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type SlideClientItem = {
  id: string;
  title: string;
  content: string;
  client: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imgSrc: any;
    name: string;
    position: string;
  };
};

interface ISliderClientProps {
  data: SlideClientItem[];
}

const SliderClient: React.FunctionComponent<ISliderClientProps> = ({ data }) => {
  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderData = data.map((item, index) => {
    return (
      <Box key={item.id}>
        <Typography
          variant="fs32"
          color={colors.gray[800]}
          letterSpacing={'0.01em'}
          mb="32px"
          component="h3"
        >
          {item.title}
        </Typography>
        <Typography variant="fs16" color={colors.gray[500]} mb="18px" component="p">
          {item.content}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap="24px">
            <Box width="69px" height="69px" borderRadius="50%" overflow="hidden">
              <Image src={item.client.imgSrc} alt={item.client.name} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="fs18" color={colors.gray[900]} component="p">
                {item.client.name}
              </Typography>
              <Typography variant="fs20" color={colors.primary[500]} component="p">
                {item.client.position}
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
              disabled={index == data.length - 1}
              sx={{
                opacity: index == data.length - 1 ? 0.5 : 1,
                border: '1.62px solid',
                borderColor: index == data.length - 1 ? colors.base.grey : colors.primary[500],
                color: `${
                  index == data.length - 1 ? colors.base.grey : colors.primary[500]
                } !important`,
              }}
            >
              <ArrowForwardIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <React.Fragment>
      <Slider ref={slider} {...settings}>
        {renderData}
      </Slider>
    </React.Fragment>
  );
};

export default SliderClient;
