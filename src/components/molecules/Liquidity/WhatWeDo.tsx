import ScrollTitle from '@/components/atoms/ScrollTitle';
import { base, gray } from '@/styles/colors';
import { Box, Divider, Typography } from '@mui/material';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import ListItem from '@/components/atoms/ItemLiquidityList';
import Star from '@/assets/images/yellow-star.svg';
import Container from '@/components/atoms/Container';
import mobileImage from '@/assets/images/liquidity-financial.svg';

const WhatWeDo = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const items = [
    {
      title: 'Backend System',
      additionalText: (
        <ul>
          <li>
            <Typography fontWeight={700} component={'span'}>
              Rewrote the entire backend system
            </Typography>{' '}
            from Go to Kotlin to enhance stability and performance.
          </li>
          <li>
            <Typography fontWeight={700} component={'span'}>
              Improved the infrastructure
            </Typography>{' '}
            to ensure robustness and scalability.
          </li>
          <li>
            Implemented{' '}
            <Typography fontWeight={700} component={'span'}>
              DataDog monitoring
            </Typography>{' '}
            for better visibility into the system&apos;s health.
          </li>
        </ul>
      ),
    },
    {
      title: 'Mobile Application',
      additionalText: (
        <ul>
          <li>
            <Typography fontWeight={700} component={'span'}>
              Resolved critical bugs
            </Typography>{' '}
            and improved the overall stability of the mobile applications.
          </li>
          <li>
            Achieved{' '}
            <Typography fontWeight={700} component={'span'}>
              a high level of stability
            </Typography>{' '}
            with a close to 99.5% crash-free user rate.
          </li>
          <li>
            Developed a new mobile product called{' '}
            <Typography fontWeight={700} component={'span'}>
              PrideCard.
            </Typography>
          </li>
        </ul>
      ),
    },
    {
      title: 'Websites and Web Admin Dashboard',
      additionalText: (
        <ul>
          <li>
            Built{' '}
            <Typography fontWeight={700} component={'span'}>
              websites
            </Typography>{' '}
            for Liquidity Financial&apos;s products.
          </li>
          <li>
            Developed{' '}
            <Typography fontWeight={700} component={'span'}>
              web admin dashboard
            </Typography>{' '}
            a for efficient account management and user support.
          </li>
        </ul>
      ),
    },

    {
      title: 'Tools for Support Team',
      additionalText: (
        <ul>
          <li>
            Built{' '}
            <Typography fontWeight={700} component={'span'}>
              tools
            </Typography>{' '}
            to assist the support team in resolving users complaints more efficiently.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <ScrollTitle scrollYProgress={scrollYProgress} scrollRef={scrollRef} title={'What we do'} />
      <Container>
        <Box display={'flex'} flexDirection={'column'} gap={'85px'} pb={'80px'}>
          <Box
            display={'flex'}
            alignItems={'center'}
            width={'100%'}
            justifyContent={'space-between'}
          >
            <Typography variant="fs80" color={base.black}>
              Our Work
            </Typography>
            <Box display={'flex'} gap={'8px'} alignItems={'center'}>
              <Box component={Divider} width={'578px'} height="1px" bgcolor={gray[600]} />
              <Image src={Star} alt="yellow star" />
            </Box>
          </Box>

          <Box display={'flex'} gap={'50px'}>
            <Image src={mobileImage} alt="mobile phone with card" />
            <Box width={'100%'}>
              {items.map((item, index) => (
                <ListItem key={index} title={item.title} additionalText={item.additionalText} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default WhatWeDo;
