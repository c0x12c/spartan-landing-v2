import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import ArrowDarkContact from '@/assets/images/Arrow-contact-dark.svg';
import { useRouter } from 'next/router';
interface IButtonDiscussProps {}

const ButtonDiscuss: React.FunctionComponent<IButtonDiscussProps> = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const router = useRouter();
  const goToContactPage = () => {
    router.push('/contact');
  };

  return (
    <Box
      component={Button}
      width={matchesMobile ? '103px' : '127px'}
      height={matchesMobile ? '103px' : '127px'}
      borderRadius="50%"
      bgcolor={colors.primary[500]}
      display="flex"
      flexDirection="column"
      rowGap="11.42px"
      onClick={goToContactPage}
      sx={{
        fontSize: '10.5833px',
        lineHeight: 1.4,
        color: colors.base.black,
        '&:hover': {
          bgcolor: colors.primary[500],
        },
      }}
    >
      <Image src={ArrowDarkContact} alt="Outer Link" />
      Let&apos;s discuss Your project
    </Box>
  );
};

export default ButtonDiscuss;
