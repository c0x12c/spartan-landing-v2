import * as React from 'react';
import { Box, Button } from '@mui/material';
import getInTouchBg from '@/assets/images/home/get-in-touch-bg.webp';
import { Container } from './common/Container';
import { Title } from './typography/Title';
import { BreakPoints, useBreakpoint } from '@/hooks';
import { ArrowIcon } from './icons/Arrow';
import Link from 'next/link';

interface IGetInTouchProps {
  title: string;
  textButton?: string;
  linkButton?: string;
}

export const GetInTouch: React.FunctionComponent<IGetInTouchProps> = ({
  title,
  textButton,
  linkButton,
  ...props
}) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box mb={isMobile ? '40px' : '64px'}>
      <Container>
        <Box
          py={isMobile ? '40.5px' : '128px'}
          px={isMobile ? '0' : '90px'}
          borderRadius="12px"
          overflow="hidden"
          sx={{
            backgroundImage: `url(${getInTouchBg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          {...props}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isMobile ? 'center' : 'flex-start'}
            gap={isMobile ? '24px' : '64px'}
            maxWidth="735px"
          >
            <Title
              text={title}
              sx={{ textAlign: isMobile ? 'center' : 'left', fontSize: isMobile ? '28px' : '48px' }}
            />
            {textButton && linkButton && (
              <Link href={linkButton} scroll={false}>
                <Button variant="contained" size={isMobile ? 'small' : 'medium'}>
                  {textButton}
                  <ArrowIcon />
                </Button>
              </Link>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
