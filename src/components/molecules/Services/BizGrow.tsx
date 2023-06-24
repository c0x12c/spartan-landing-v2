import * as React from 'react';
import * as colors from '@/styles/colors';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { BusinessType, Businesses } from '@/constants/businesses';
interface IBizGrowProps {}

const BizGrow: React.FunctionComponent<IBizGrowProps> = () => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderBiz = (data: BusinessType[]) => {
    return data.map((item) => {
      return <Image key={item.id} src={item.imgSrc} alt={item.name} />;
    });
  };

  return (
    <Box my="44px">
      <Typography
        variant={matchesMobile ? 'fs30' : 'fs54'}
        color={colors.base.black}
        mt="100px"
        mb="74px"
        component="h2"
        textAlign="center"
      >
        Over{' '}
        <Typography
          variant={matchesMobile ? 'fs30' : 'fs54'}
          color={colors.primary[500]}
          component="span"
        >
          50+
        </Typography>{' '}
        Businesses are {!matchesDesktop && <br />} growing with us
      </Typography>
      <Box sx={{ transform: { sm: 'scale(1, 1)', xs: 'scale(0.6)' } }}>
        <Box display="flex" alignItems="center" justifyContent="center" mb="32px">
          {renderBiz(Businesses.slice(0, 3))}
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          {renderBiz(Businesses.slice(3))}
        </Box>
      </Box>
    </Box>
  );
};

export default BizGrow;
