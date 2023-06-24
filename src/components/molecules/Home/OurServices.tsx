import * as React from 'react';
import { Box } from '@mui/material';
import { useScroll } from 'framer-motion';
import Container from '../../atoms/Container';
import ScrollTitle from '../../atoms/ScrollTitle';
import AccordionItem from '../../atoms/AccordionItem';
import { Services } from '@/constants/services';

interface IOurServicesProps {}

const OurServices: React.FunctionComponent<IOurServicesProps> = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const renderDataService = Services.map((service, index) => {
    return (
      <AccordionItem
        key={service.id}
        index={index + 1}
        {...service}
        link={`/services#${service.hash}`}
      />
    );
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
        <Box>{renderDataService}</Box>
      </Container>
    </Box>
  );
};

export default OurServices;
