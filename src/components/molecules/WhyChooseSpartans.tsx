import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Container from '../atoms/Container';
import { useScroll } from 'framer-motion';
import ScrollTitle from '../atoms/ScrollTitle';
import chooseSpartansImage from '@/assets/images/choose-spartans-image.svg';
import AccordionImageItem from '../atoms/AccordionImageItem';

interface IWhyChooseSpartansProps {}

const WhyChooseSpartans: React.FunctionComponent<IWhyChooseSpartansProps> = (props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const data = [
    {
      id: 'choose-1',
      title: 'Cross-Continental Expertise',
      content:
        "We leverages our diverse and cross-continental expertise to deliver exceptional solutions to clients worldwide. With a global talent pool, we bring a unique perspective and deep understanding of different markets, cultures, and industries, enabling us to provide tailored solutions that meet our clients' specific needs.",
      imgSrc: chooseSpartansImage,
    },
    {
      id: 'choose-2',
      title: 'Strong US Market Experience',
      content:
        'Our team has extensive experience in the US market, having worked with numerous startups and established companies. We understand the intricacies of business landscape, enabling us to provide valuable insights and strategic guidance to our clients. This experience gives us a competitive edge in delivering solutions that align with all the market trends and your requirements.',
      imgSrc: chooseSpartansImage,
    },
    {
      id: 'choose-3',
      title: 'Cost-Effective Remote Model',
      content:
        'Spartan offers a cost-effective remote model, harnessing the power of offshore talent to provide high-quality engineering services at competitive rates. By leveraging remote work capabilities, we help our clients optimize their costs while maintaining exceptional quality and efficiency. This approach allows your company extending your runway and accelerating your path to profitability.',
      imgSrc: chooseSpartansImage,
    },
    {
      id: 'choose-4',
      title: 'Robust Engineering Processes',
      content:
        'At Spartan, we follow robust engineering processes that have been refined over years of experience working with startups. From decision-making frameworks to deep bug analysis, we ensure that every step of the engineering process is well-defined and optimized for efficiency and quality. Our focus on code review, automation, and continuous improvement guarantees that our clients receive top-notch solutions built on a solid foundation.',
      imgSrc: chooseSpartansImage,
    },
  ];

  const renderDataService = data.map((item, index) => {
    return <AccordionImageItem key={item.id} index={index + 1} {...item} />;
  });

  return (
    <Box my="44px" ref={scrollRef}>
      <Container>
        <Box display={matchesDesktop ? 'block' : 'none'} mt="64px" mb="113px">
          <ScrollTitle
            scrollYProgress={scrollYProgress}
            scrollRef={scrollRef}
            title={'Why Choose Spartans?'}
          />
        </Box>
        <Box mb="100px">{renderDataService}</Box>
      </Container>
    </Box>
  );
};

export default WhyChooseSpartans;
