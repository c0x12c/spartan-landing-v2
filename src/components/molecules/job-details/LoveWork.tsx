import PrimaryTitle from '@/components/atoms/typography/PrimaryTitle';
import { gray } from '@/styles/colors';
import { Box } from '@mui/material';
import React from 'react';
import { LoveWorking } from '@/constants/benefits';
import { BreakPoints, useBreakpoint } from '@/hooks';

const LoveWork = () => {
  const isMobile = useBreakpoint(BreakPoints.MD);
  return (
    <Box>
      <PrimaryTitle text="Why you'll love working here" sx={{ mb: '8px' }} />
      <ul style={{ listStyle: 'inside' }}>
        {LoveWorking.map((item, index) => {
          return (
            <li key={index} style={{ fontSize: isMobile ? '14px' : '16px', color: gray[600] }}>
              {item}
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default LoveWork;
