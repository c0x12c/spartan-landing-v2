import React from 'react';
import { Box, Button } from '@mui/material';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { BodyText, Container, Title } from '../atoms';
import { base } from '@/styles/colors';
import Image from 'next/image';
import NotFoundImage from '@/assets/images/not-found/404.webp';
import Link from 'next/link';
import { Footer, Header } from '../molecules';

type Props = {
  children?: React.ReactNode;
};

export const NotFoundPage: React.FC<Props> = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <React.Fragment>
      <Header forceTransparent={false} />
      <Box minHeight={'694px'} display="flex" alignItems="center">
        <Container>
          <Box
            py={isMobile ? '40px' : '64px'}
            maxWidth="521px"
            mx="auto"
            display="flex"
            gap="24px"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              src={NotFoundImage}
              alt="NotFoundImage"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Title
              text="Page not found"
              sx={{
                textAlign: 'center',
              }}
            />
            <BodyText
              text="The page requested could not be found on this server!"
              sx={{ color: base.black, textAlign: 'center' }}
            />
            <Link href="/" scroll={false}>
              <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                Back to home
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
};
