import * as React from 'react';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import badge from '@/assets/images/spartan-operates/badge.webp';
import { base } from '@/styles/colors';
import { AccordionOperates, Container } from '@/components/atoms';

interface ISpartanOperatesProcessProps {}

export const SpartanOperatesProcess: React.FunctionComponent<ISpartanOperatesProcessProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box py={isMobile ? '40px' : '89px'}>
      <Container>
        <Box display="flex" flexDirection="column" gap={isMobile ? '40px' : '89px'}>
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            alignItems={isMobile ? 'center' : 'flex-start'}
            gap={isMobile ? '24px' : '40px'}
          >
            <Image src={badge} alt="badge" style={{ width: '157px', height: 'auto' }} />
            <Typography
              variant={isMobile ? 'fs18' : 'fs24'}
              component={'p'}
              fontWeight={600}
              color={base.black}
            >
              Our mission is to deliver the best products while enhancing your workflow. We empower
              you to build and deploy exceptional software solutions, gaining expertise in
              cutting-edge technology and best practices. The knowledge acquired with Spartan is
              invaluable, fueling your team’s success in creating top-quality products.
            </Typography>
          </Box>
          <AccordionOperates />
        </Box>
      </Container>
    </Box>
  );
};
