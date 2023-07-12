import * as React from 'react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { base, primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IMainTitleProps {
  text: string;
  sx?: SxProps<Theme>;
}

export const MainTitle: React.FunctionComponent<IMainTitleProps> = ({ text, sx, ...props }) => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const stringArr = text.split('/').filter((item) => item !== '');

  return (
    <Box display="flex" alignItems="center" flexWrap="wrap">
      {stringArr.map((str, index) => {
        const isHightLight = index % 2 !== 0;
        return (
          <Typography
            key={str}
            component="h1"
            variant={isMobile ? 'fs36' : 'fs64'}
            color={isHightLight ? primary[500] : base.white}
            display="block"
            sx={sx}
            {...props}
          >
            {str}
            {index + 1 === 0 ? '' : '\u00A0'}
          </Typography>
        );
      })}
    </Box>
  );
};
