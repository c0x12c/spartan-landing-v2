import { useState } from 'react';
import { ArrowIcon, Container } from '@/components/atoms';
import QuoteTag from '@/components/atoms/QuoteTag';
import KhoaTran from '@/assets/images/apply-job/KhoaTran.jpg';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { QuoteType } from '@/constants/quotes';
import { base, gray, primary } from '@/styles/colors';
import Arrow from '@/assets/images/icons/arrow.svg';
import { quotes } from '@/constants/quotes';
import Commas from '@/assets/images/apply-job/comas.svg';

const Quotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextClick = () => {
    if (currentQuoteIndex === quotes.length - 1) {
      return;
    }
    setCurrentQuoteIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevClick = () => {
    if (currentQuoteIndex === 0) {
      return;
    }
    setCurrentQuoteIndex((prevIndex) => prevIndex - 1);
  };

  const { img, title, text, author, authorPosition } = quotes[currentQuoteIndex];

  return (
    <Container>
      <Quote
        img={img}
        title={title}
        text={text}
        author={author}
        authorPosition={authorPosition}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
        isNextDisabled={currentQuoteIndex === quotes.length - 1}
        isPrevDisabled={currentQuoteIndex === 0}
      />
    </Container>
  );
};

interface QuoteProps extends QuoteType {
  onNextClick: () => void;
  onPrevClick: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

const Quote = ({
  img,
  title,
  text,
  author,
  authorPosition,
  onNextClick,
  onPrevClick,
  isNextDisabled,
  isPrevDisabled,
}: QuoteProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      gap={{ xs: '40px', md: '92px' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      paddingTop={'44px'}
      paddingBottom={'88px'}
      alignItems={'center'}
    >
      <Image
        src={img}
        alt={author}
        style={{ width: '100%', borderRadius: '8px', height: 'auto' }}
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
            // backgroundSize: 'cover',
            zIndex: -1,
          },
          //   '&::after': {
          //     content: '""',
          //     position: 'absolute',
          //     top: '50%',
          //     left: '50%',
          //     transform: 'translate(-50%, -50%)',
          //     width: '70px',
          //     height: '70px',
          //     background: primary[300],
          //     borderRadius: '50%',
          //     zIndex: -1,
          //   },
        }}
      >
        <Typography variant="fs18" color={gray[800]} fontWeight={600} mb="24px" component="p">
          {title}
        </Typography>
        <Typography variant="fs18" component="p" marginBottom={'18px'}>
          {text}
        </Typography>
        <Box
          display="flex"
          justifyContent={{ md: 'space-between' }}
          alignItems={'center'}
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={{ xs: '20px', md: '0' }}
        >
          <Box>
            <Typography
              component="p"
              textAlign={{ xs: 'center', md: 'start' }}
              variant="fs18"
              color={gray[900]}
              fontWeight={700}
            >
              {author}
            </Typography>
            <Typography
              variant="fs20"
              textAlign={{ xs: 'center', md: 'start' }}
              component="p"
              color={primary[400]}
              fontWeight={500}
            >
              {authorPosition}
            </Typography>
          </Box>

          <Box display="flex" gap="20px">
            <Button
              onClick={onPrevClick}
              disabled={isPrevDisabled}
              sx={{
                p: 0,
                minWidth: '60px',
                minHeight: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid',
                borderColor: isPrevDisabled ? gray[400] : primary[400],
                borderRadius: '60px',
                transform: 'scale(-1, 1)',
              }}
            >
              <ArrowIcon color={isPrevDisabled ? gray[400] : primary[400]} width="30" height="30" />
            </Button>
            <Button
              onClick={onNextClick}
              disabled={isNextDisabled}
              sx={{
                p: 0,
                minWidth: '60px',
                minHeight: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid',
                borderColor: isNextDisabled ? gray[400] : primary[400],
                borderRadius: '60px',
              }}
            >
              <ArrowIcon color={isNextDisabled ? gray[400] : primary[400]} width="30" height="30" />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Quotes;
