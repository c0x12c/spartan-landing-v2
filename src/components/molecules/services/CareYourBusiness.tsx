import * as React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowIcon, BodyText, Container, Title } from '@/components/atoms';
import { gray } from '@/styles/colors';
import Link from 'next/link';
import touchImage from '@/assets/images/services/touch-image.png';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface ICareYourBusinessProps {}

export const CareYourBusiness: React.FunctionComponent<ICareYourBusinessProps> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        borderRadius="20px"
        p={isMobile ? '24px' : '68px'}
        sx={{
          background: isMobile
            ? 'linear-gradient(319deg, #E0EBFF 0%, rgba(236, 242, 255, 0.63) 100%)'
            : `url(${touchImage.src}), linear-gradient(319deg, #E0EBFF 0%, rgba(236, 242, 255, 0.63) 100%)`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isMobile ? 'center' : 'flex-start'}
          gap="24px"
          maxWidth="578px"
          textAlign={isMobile ? 'center' : 'left'}
        >
          <Title
            text="We care about your business"
            sx={{
              color: gray[800],
            }}
          />
          <BodyText
            text={
              'At Spartan, our capable engineers, product managers, and designers work closely with you to revolutionize your software development process. Our mission is to deliver the finest products while enhancing your workflow. We empower you to build and deploy remarkable software solutions, gaining expertise in cutting-edge technology and best practices. The knowledge acquired with Spartan is invaluable, fueling your team’s success in creating superior products'
            }
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <Link href="/spartan-operates" scroll={false}>
            <Button variant="contained" size={isMobile ? 'small' : 'large'}>
              How spartan operates
              <ArrowIcon />
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
