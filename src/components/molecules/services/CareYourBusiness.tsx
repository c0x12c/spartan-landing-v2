import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowIcon, Container } from '@/components/atoms';
import { gray } from '@/styles/colors';
import Link from 'next/link';
import touchImage from '@/assets/images/services/touch-image.png';

interface ICareYourBusinessProps {}

export const CareYourBusiness: React.FunctionComponent<ICareYourBusinessProps> = () => {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        borderRadius="20px"
        p="68px"
        sx={{
          background: `url(${touchImage.src}), linear-gradient(319deg, #E0EBFF 0%, rgba(236, 242, 255, 0.63) 100%)`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box display="flex" flexDirection="column" gap="24px" maxWidth="578px">
          <Typography variant={'fs48'} color={gray[800]} component="h3">
            We care about your business
          </Typography>
          <Typography variant={'fs18'} color={gray[600]} component="p">
            At Spartan, our top-notch engineers, product managers, and designers work closely with
            you to revolutionize your software development process. Our mission is to deliver the
            best products while enhancing your workflow. We empower you to build and deploy
            exceptional software solutions, gaining expertise in cutting-edge technology and best
            practices. The knowledge acquired with Spartan is invaluable, fueling your team’s
            success in creating top-quality products.
          </Typography>
          <Link href="/spartan-operates" scroll={false}>
            <Button variant="contained">
              How spartan operates
              <ArrowIcon />
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
