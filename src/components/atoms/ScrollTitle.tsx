import * as React from 'react';
import * as colors from '@/styles/colors';
import { MotionValue, motion, useTransform } from 'framer-motion';
import { Typography, useMediaQuery, useTheme } from '@mui/material';

interface IScrollTitleProps {
  scrollYProgress: MotionValue<number>;
  scrollRef: React.RefObject<HTMLDivElement>;
  title: string;
}

const ScrollTitle: React.FunctionComponent<IScrollTitleProps> = ({
  scrollYProgress,
  scrollRef,
  title,
}) => {
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <React.Fragment>
      <motion.div style={{ width: '2500px', x }} viewport={{ root: scrollRef }}>
        <Typography variant={matches ? 'fs180' : 'fs240'} color={colors.gray[200]}>
          {title}
        </Typography>
      </motion.div>
    </React.Fragment>
  );
};

export default ScrollTitle;
