import * as React from 'react';
import * as colors from '@/styles/colors';
import { MotionValue, motion, useTransform } from 'framer-motion';
import { Typography } from '@mui/material';

interface IScrollTitleProps {
  scrollYProgress: MotionValue<number>;
  scrollRef: any;
}

const ScrollTitle: React.FunctionComponent<IScrollTitleProps> = ({
  scrollYProgress,
  scrollRef,
}) => {
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);

  return (
    <React.Fragment>
      <motion.div style={{ width: '2500px', x }} viewport={{ root: scrollRef }}>
        <Typography variant="fs240" color={colors.gray[200]}>
          Who we work with
        </Typography>
      </motion.div>
    </React.Fragment>
  );
};

export default ScrollTitle;
