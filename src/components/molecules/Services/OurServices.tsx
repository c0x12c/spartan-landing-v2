import * as React from 'react';
import { Box } from '@mui/material';
import { useScroll } from 'framer-motion';
import Container from '../../atoms/Container';
import ScrollTitle from '../../atoms/ScrollTitle';
import AccordionItem from '../../atoms/AccordionItem';
import { Services } from '@/constants/services';

interface IOurServicesProps {}

const OurServices: React.FunctionComponent<IOurServicesProps> = (props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });
  return (
    <Box my="44px" ref={scrollRef}>
      <Container>
        <Box mb="40px">
          <ScrollTitle
            scrollYProgress={scrollYProgress}
            scrollRef={scrollRef}
            title={'Our services'}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
