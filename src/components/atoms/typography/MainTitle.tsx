import * as React from 'react';
import { SxProps, Theme, Typography } from '@mui/material';
import { base, primary } from '@/styles/colors';
import { BreakPoints, useBreakpoint } from '@/hooks';

interface IMainTitleProps {
  text: string;
  isLightMode?: boolean;
  sx?: SxProps<Theme>;
}

export const MainTitle: React.FunctionComponent<IMainTitleProps> = ({
  text,
  isLightMode = true,
  sx,
  ...props
}) => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  const stringArr = text.split('/');

  return (
    <Typography
      component={'h1'}
      variant={isMobile ? 'fs48' : 'fs64'}
      display="block"
      sx={sx}
      {...props}
    >
      {stringArr.map((str, index) => {
        const isHightLight = index % 2 !== 0;
        return (
          <React.Fragment key={str}>
            <span
              style={{
                color: isHightLight ? primary[500] : isLightMode ? base.white : base.black,
              }}
            >
              {str}
            </span>
            {index + 1 !== 0 ? '' : '\u00A0'}
          </React.Fragment>
        );
      })}
    </Typography>
  );
};
