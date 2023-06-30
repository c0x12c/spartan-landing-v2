import * as React from 'react';
import { Box, Button } from '@mui/material';
import getInTouchBg from '@/assets/images/home/get-in-touch-bg.png';
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
}) => {
  const isMobile = useBreakpoint(BreakPoints.MD);

  return (
    <Box mb="64px">
      <Container>
        <Box
          py={isMobile ? '64px' : '128px'}
          px={isMobile ? '30px' : '90px'}
          borderRadius="12px"
          overflow="hidden"
          sx={{
            backgroundImage: `url(${getInTouchBg.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box display="flex" flexDirection="column" gap="64px" maxWidth="735px">
            <Title text={title} />
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
